import { jsonl } from '../src/index.js'

import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'

const encoder = new TextEncoder()

/**
 * @param {Uint8Array[]} chunks
 */
function readerOnlyBody(chunks) {
  const state = { index: 0, cancelled: false, released: false }

  return {
    state,

    getReader() {
      return {
        async read() {
          if (state.index < chunks.length) {
            return { done: false, value: chunks[state.index++] }
          }

          return { done: true, value: undefined }
        },

        async cancel() {
          state.cancelled = true
        },

        releaseLock() {
          state.released = true
        },
      }
    },
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

describe('jsonl', () => {
  const OriginalTextDecoder = globalThis.TextDecoder

  afterEach(() => {
    globalThis.TextDecoder = OriginalTextDecoder
  })

  it('reads a web ReadableStream', async () => {
    const body = new Response(
      '{"type":"token","data":{"token":"a"}}\n{"type":"result","data":{}}\n'
    ).body

    const items = await collect(jsonl(/** @type {any} */ (body)))

    assert.deepEqual(
      items.map((item) => item.type),
      ['token', 'result']
    )
  })

  it('reads a body that only exposes getReader', async () => {
    const body = readerOnlyBody([
      encoder.encode('{"type":"token","data":{"token":"He"}}\n{"type":"tok'),
      encoder.encode('en","data":{"token":"llo"}}\n'),
    ])

    const items = await collect(jsonl(/** @type {any} */ (body)))

    assert.deepEqual(
      items.map((item) => item.data.token),
      ['He', 'llo']
    )

    assert.equal(body.state.released, true)
  })

  it('reads an async iterable body without getReader', async () => {
    const body = {
      async *[Symbol.asyncIterator]() {
        yield encoder.encode('{"type":"token","data":{"token":"x"}}\n')
      },
    }

    const items = await collect(jsonl(/** @type {any} */ (body)))

    assert.deepEqual(items, [{ type: 'token', data: { token: 'x' } }])
  })

  it('decodes multi-byte characters split across chunks', async () => {
    const bytes = encoder.encode('{"type":"token","data":{"token":"é€"}}\n')

    const body = readerOnlyBody([bytes.slice(0, 34), bytes.slice(34)])

    const items = await collect(jsonl(/** @type {any} */ (body)))

    assert.equal(items[0].data.token, 'é€')
  })

  it('cancels the reader when the consumer stops early', async () => {
    const body = readerOnlyBody([
      encoder.encode('{"type":"token","data":{"token":"a"}}\n'),
      encoder.encode('{"type":"token","data":{"token":"b"}}\n'),
    ])

    for await (const item of jsonl(/** @type {any} */ (body))) {
      assert.equal(item.data.token, 'a')

      break
    }

    assert.equal(body.state.cancelled, true)
  })

  it('throws a stream unsupported error for a body that cannot be read', async () => {
    await assert.rejects(collect(jsonl(/** @type {any} */ ({}))), {
      name: 'StreamUnsupportedError',
      code: 'STREAM_UNSUPPORTED',
    })
  })

  it('throws a stream unsupported error when TextDecoder is missing', async () => {
    // @ts-expect-error simulating a runtime without TextDecoder
    delete globalThis.TextDecoder

    const body = readerOnlyBody([encoder.encode('{"type":"token"}\n')])

    await assert.rejects(collect(jsonl(/** @type {any} */ (body))), {
      name: 'StreamUnsupportedError',
      code: 'STREAM_UNSUPPORTED',
      message: /TextDecoder/,
    })
  })
})
