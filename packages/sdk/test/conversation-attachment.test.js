import { ChatBotKit } from '../src/index.js'

import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

function createApiFetch() {
  /** @type {{ url: string, init: any }[]} */
  const calls = []

  /** @type {any} */
  const fetchFn = async (
    /** @type {string} */ url,
    /** @type {any} */ init
  ) => {
    calls.push({ url: String(url), init })

    if (String(url).startsWith('https://storage.example/')) {
      return new Response(null, { status: 200 })
    }

    return new Response(
      JSON.stringify({
        id: 'attachment1',
        uploadRequest: {
          url: 'https://storage.example/upload',
          method: 'PUT',
          headers: {},
        },
      }),
      { headers: { 'content-type': 'application/json' } }
    )
  }

  return { calls, fetchFn }
}

describe('conversation attachment upload', () => {
  it('registers the upload under the conversation', async () => {
    const { calls, fetchFn } = createApiFetch()

    const cbk = new ChatBotKit({ token: 'token', fetchFn })

    const result = await cbk.conversation.attachment.upload('conversation1', {
      data: new TextEncoder().encode('hello').buffer,
      type: 'text/plain',
      name: 'hello.txt',
    })

    assert.equal(result.id, 'attachment1')

    const registerUrl = new URL(calls[0].url)

    assert.equal(
      registerUrl.pathname,
      '/v1/conversation/conversation1/attachment/upload'
    )
    assert.equal(calls[0].init.method, 'POST')
    assert.deepEqual(JSON.parse(calls[0].init.body).file, {
      size: 5,
      type: 'text/plain',
      name: 'hello.txt',
    })

    assert.equal(calls[1].url, 'https://storage.example/upload')
  })
})
