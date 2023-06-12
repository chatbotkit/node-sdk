/* global globalThis */

// NOTE: we need to pollyfill the ReadableStream for chrome and Safari

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

export const fetch = globalThis.fetch
export const Blob = globalThis.Blob
export const FormData = globalThis.FormData
