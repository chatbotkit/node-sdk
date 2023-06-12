import { fetch, Blob, FormData } from 'node-fetch-native'

if (
  typeof globalThis.ReadableStream === 'function' &&
  // @ts-ignore
  typeof globalThis.ReadableStream.prototype[Symbol.asyncIterator] !==
    'function'
) {
  // @ts-ignore
  globalThis.ReadableStream.prototype[Symbol.asyncIterator] = function () {
    const reader = this.getReader()

    return {
      next: () => reader.read(),
      return: () => {
        reader.releaseLock()
      },
    }
  }
}

export { fetch, Blob, FormData }
