import { ChatBotKit } from '../src/index.js'

import assert from 'node:assert/strict'
import { afterEach, beforeEach, describe, it } from 'node:test'

function createApiFetch() {
  /** @type {{ url: string, init: any }[]} */
  const calls = []

  /** @type {any} */
  const fetchFn = async (
    /** @type {string} */ url,
    /** @type {any} */ init
  ) => {
    calls.push({ url, init })

    if (url.startsWith('https://storage.example/')) {
      return new Response(null, { status: 200 })
    }

    return new Response(
      JSON.stringify({
        id: 'item1',
        uploadRequest: {
          url: 'https://storage.example/upload',
          method: 'PUT',
          headers: { 'x-upload': '1' },
        },
      }),
      { headers: { 'content-type': 'application/json' } }
    )
  }

  return { calls, fetchFn }
}

describe('uploads', () => {
  const originalFetch = globalThis.fetch

  /** @type {string[]} */
  let localReads = []

  beforeEach(() => {
    localReads = []

    globalThis.fetch = async (/** @type {any} */ url) => {
      localReads.push(String(url))

      return new Response(new Blob(['hello'], { type: 'image/jpeg' }))
    }
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  it('uploads a file from a React Native file reference', async () => {
    const { calls, fetchFn } = createApiFetch()

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    const result = await cbk.file.upload('file1', {
      data: {
        uri: 'file:///tmp/photo.jpg',
        name: 'photo.jpg',
        type: 'image/jpeg',
      },
      type: 'image/jpeg',
    })

    assert.equal(result.id, 'item1')
    assert.deepEqual(localReads, ['file:///tmp/photo.jpg'])

    const register = JSON.parse(calls[0].init.body)

    assert.deepEqual(register.file, {
      size: 5,
      type: 'image/jpeg',
      name: 'photo.jpg',
    })

    assert.equal(calls[1].url, 'https://storage.example/upload')
    assert.equal(calls[1].init.method, 'PUT')
    assert.equal(calls[1].init.headers['x-upload'], '1')
    assert.equal(calls[1].init.headers.authorization, undefined)
    assert.equal(calls[1].init.body.size, 5)
  })

  it('uploads a conversation attachment from a React Native file reference', async () => {
    const { calls, fetchFn } = createApiFetch()

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    await cbk.conversation.attachment.upload('attachment1', {
      data: { uri: 'content://media/42', name: 'scan.jpg', type: 'image/jpeg' },
      type: 'image/jpeg',
    })

    assert.deepEqual(localReads, ['content://media/42'])
    assert.equal(JSON.parse(calls[0].init.body).file.size, 5)
    assert.equal(calls[1].init.body.size, 5)
  })

  it('keeps uploading ArrayBuffer data as before', async () => {
    const { calls, fetchFn } = createApiFetch()

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    await cbk.file.upload('file1', {
      data: new TextEncoder().encode('hello world').buffer,
      type: 'text/plain',
      name: 'hello.txt',
    })

    assert.deepEqual(localReads, [])
    assert.equal(JSON.parse(calls[0].init.body).file.size, 11)
    assert.equal(calls[1].init.body.byteLength, 11)
  })

  it('appends a React Native file reference to multipart form data', async () => {
    const { calls, fetchFn } = createApiFetch()

    const cbk = new ChatBotKit({ token: 'session-token', fetchFn })

    /** @type {any[]} */
    const appended = []

    const OriginalFormData = globalThis.FormData

    const append = OriginalFormData.prototype.append

    OriginalFormData.prototype.append = function (...args) {
      appended.push(args)
    }

    try {
      await cbk.clientFetch('/api/v1/example', {
        file: {
          data: { uri: 'file:///tmp/photo.jpg' },
          name: 'photo.jpg',
          type: 'image/jpeg',
        },
      })
    } finally {
      OriginalFormData.prototype.append = append
    }

    assert.equal(calls[0].init.method, 'POST')
    assert.deepEqual(appended, [
      [
        'file',
        { uri: 'file:///tmp/photo.jpg', name: 'photo.jpg', type: 'image/jpeg' },
      ],
    ])
  })
})
