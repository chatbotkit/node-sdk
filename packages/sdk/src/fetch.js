import fetch from 'isomorphic-fetch'

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

export class RequestError extends Error {
  /**
   * @param {string} message
   * @param {number|string} code
   * @param {RequestInit} request
   * @param {Response} response
   */
  constructor(message, code, request, response) {
    super(message)

    this.code = code || response.status

    this.request = request
    this.response = response
  }
}

/**
 * @param {string} url
 * @param {RequestInit} options
 * @param {number} [retries=5]
 * @param {number} [retryDelay=250]
 * @returns {Promise<Response>}
 */
export async function fetchWithBackoff(
  url,
  options,
  retries = 5,
  retryDelay = 250
) {
  let response

  try {
    response = await fetch(url, options)

    if (!response.ok) {
      switch (response.status) {
        case 429:
        case 500:
        case 502:
        case 504:
          throw new RequestError(
            `Request failed`,
            response.status,
            options,
            response
          )

        default:
          return response
      }
    }

    return response
  } catch (error) {
    if (retries === 0) {
      // @ts-ignore
      return response
    }

    await new Promise((resolve) => setTimeout(resolve, retryDelay))

    return fetchWithBackoff(url, options, retries - 1, retryDelay * 2)
  }
}

/**
 * @param {ReadableStream} body
 * @returns {AsyncGenerator<Record<string,any>>}
 */
export async function* jsonl(body) {
  const decoder = new TextDecoder()

  let previous = ''

  // @ts-ignore
  for await (const chunk of body) {
    previous += decoder.decode(chunk)

    let eolIndex

    while ((eolIndex = previous.indexOf('\n')) >= 0) {
      const line = previous.slice(0, eolIndex + 1)

      if (line) {
        yield JSON.parse(line)
      }

      previous = previous.slice(eolIndex + 1)
    }
  }

  if (previous.length > 0) {
    yield JSON.parse(previous)
  }
}

export { fetch }

export default fetch
