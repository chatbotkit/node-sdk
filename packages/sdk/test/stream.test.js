import { ChatBotKit } from '../src/index.js'

import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'

const encoder = new TextEncoder()

const lines =
  '{"type":"token","data":{"token":"Hel"}}\n' +
  '{"type":"token","data":{"token":"lo"}}\n' +
  '{"type":"result","data":{"text":"Hello"}}\n'

/**
 * @param {any} response
 */
function fetchReturning(response) {
  /** @type {{ url: string, init: any }[]} */
  const calls = []

  /** @type {any} */
  const fetchFn = async (
    /** @type {string} */ url,
    /** @type {any} */ init
  ) => {
    calls.push({ url, init })

    return response
  }

  return { calls, fetchFn }
}

/**
 * @param {Record<string,any>} [overrides]
 */
function responseLike(overrides) {
  return {
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'content-type': 'application/jsonl' }),
    body: null,
    ...overrides,
  }
}

/**
 * @param {AsyncIterable<any>} iterable
 */
async function collect(iterable) {
  const items = []

  for await (const item of iterable) {
    items.push(item)
  }

  return items
}

describe('ResponsePromise.stream', () => {
  const OriginalTextDecoder = globalThis.TextDecoder

  afterEach(() => {
    globalThis.TextDecoder = OriginalTextDecoder
  })

  it('streams a standard fetch response body', async () => {
    const { calls, fetchFn } = fetchReturning(new Response(lines))

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    const items = await collect(
      cbk.conversation
        .complete(null, { messages: [{ type: 'user', text: 'Hi' }] })
        .stream()
    )

    assert.deepEqual(
      items.map((item) => item.type),
      ['token', 'token', 'result']
    )

    assert.equal(calls[0].init.headers.Accept, 'application/jsonl')
    assert.equal(calls[0].init.headers.authorization, 'Bearer session-token')
  })

  it('streams a body that only exposes getReader', async () => {
    const chunks = [
      encoder.encode(lines.slice(0, 20)),
      encoder.encode(lines.slice(20)),
    ]

    const body = {
      getReader() {
        let index = 0

        return {
          async read() {
            return index < chunks.length
              ? { done: false, value: chunks[index++] }
              : { done: true, value: undefined }
          },

          async cancel() {},

          releaseLock() {},
        }
      },
    }

    const { fetchFn } = fetchReturning(responseLike({ body }))

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    const items = await collect(
      cbk.conversation
        .complete(null, { messages: [{ type: 'user', text: 'Hi' }] })
        .stream()
    )

    assert.deepEqual(
      items
        .filter((item) => item.type === 'token')
        .map((item) => item.data.token),
      ['Hel', 'lo']
    )
  })

  it('throws a stream unsupported error when the response has no body', async () => {
    const { fetchFn } = fetchReturning(responseLike({ body: undefined }))

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    await assert.rejects(
      collect(
        cbk.conversation
          .complete(null, { messages: [{ type: 'user', text: 'Hi' }] })
          .stream()
      ),
      {
        name: 'StreamUnsupportedError',
        code: 'STREAM_UNSUPPORTED',
        message: /fetchFn/,
      }
    )
  })

  it('yields nothing for a 204 response without a body', async () => {
    const { fetchFn } = fetchReturning(
      responseLike({ status: 204, statusText: 'No Content' })
    )

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    const items = await collect(
      cbk.conversation
        .complete(null, { messages: [{ type: 'user', text: 'Hi' }] })
        .stream()
    )

    assert.deepEqual(items, [])
  })

  it('makes non-streaming requests without TextDecoder', async () => {
    // @ts-expect-error simulating a runtime without TextDecoder
    delete globalThis.TextDecoder

    const { fetchFn } = fetchReturning(
      new Response(JSON.stringify({ id: 'bot1' }), {
        headers: { 'content-type': 'application/json' },
      })
    )

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    const result = await cbk.bot.fetch('bot1')

    assert.equal(result.id, 'bot1')
  })
})
