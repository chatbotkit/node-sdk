import { fetch, Blob, FormData } from 'node-fetch-native'

export { fetch, Blob, FormData }

if (
  // eslint-disable-next-line no-undef
  typeof globalThis.ReadableStream === 'function' &&
  // @ts-expect-error polyfill
  // eslint-disable-next-line no-undef
  typeof globalThis.ReadableStream.prototype[Symbol.asyncIterator] !==
    'function'
) {
  // @ts-expect-error polyfill
  // eslint-disable-next-line no-undef
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

export const ABORT_ERROR_NAME = 'AbortError'
export const TIMEOUT_ERROR_NAME = 'TimeoutError'

/**
 * @param {AbortSignal[]} signals
 * @returns {AbortSignal}
 */
function anySignal(signals) {
  const controller = new AbortController()

  for (const signal of signals) {
    if (signal.aborted) {
      controller.abort(signal.reason)

      return signal
    }

    signal.addEventListener('abort', () => controller.abort(signal.reason), {
      signal: controller.signal,
    })
  }

  return controller.signal
}

/**
 */
export class FetchError extends Error {
  /**
   * @param {string} message
   * @param {number|string} code
   * @param {string} url
   * @param {RequestInit & withTimeoutOptions & withRetryOptions} request
   * @param {Response} response
   */
  constructor(message, code, url, request, response) {
    super(message)

    this.code = code || response.status

    this.url = url
    this.request = request
    this.response = response
  }
}

/**
 * @typedef {(url: string, options?: RequestInit) => Promise<Response>} FetchFn
 */

/**
 * @typedef {{
 *   timeout?: number
 * }} withTimeoutOptions
 *
 * Add timeout capabilities to any fetch implementation.
 *
 * @param {FetchFn} fetch
 * @param {withTimeoutOptions} [defaultOptions]
 * @returns {FetchFn}
 */
export function withTimeout(fetch, defaultOptions) {
  /**
   * @param {string} url
   * @param {RequestInit & withTimeoutOptions} [options]
   * @returns {Promise<Response>}
   */
  return async function fetchWithTimeout(url, options) {
    const timeout = options?.timeout ?? defaultOptions?.timeout ?? 30000

    let signal
    let handler

    if (timeout > 0 && timeout !== Infinity) {
      const abortController = new AbortController()

      // @todo use AbortSignal.timeout(n) when widely supported

      handler = setTimeout(() => {
        abortController.abort(TIMEOUT_ERROR_NAME)
      }, timeout)

      signal = options?.signal
        ? anySignal([abortController.signal, options.signal])
        : abortController.signal
    } else {
      signal = options?.signal
    }

    let response

    try {
      response = await fetch(url, {
        ...options,

        signal,
      })
    } finally {
      clearTimeout(handler)
    }

    return response
  }
}

/**
 * @typedef {{
 *   retries?: number,
 *   retryDelay?: number,
 *   retryAbort?: boolean,
 *   retryTimeout?: boolean,
 *   retryStatuses?: number[]
 * }} withRetryOptions
 *
 * Add retry capabilities to any fetch implementation.
 *
 * @param {FetchFn} fetch
 * @param {withRetryOptions} [defaultOptions]
 * @returns {FetchFn}
 */
export function withRetry(fetch, defaultOptions) {
  /**
   * @param {string} url
   * @param {RequestInit & withRetryOptions} [options]
   * @returns {Promise<Response>}
   */
  return async function fetchWithRetry(url, options) {
    const retries = options?.retries ?? defaultOptions?.retries ?? 5
    const retryDelay = options?.retryDelay ?? defaultOptions?.retryDelay ?? 250
    const retryAbort =
      options?.retryAbort ?? defaultOptions?.retryAbort ?? false
    const retryTimeout =
      options?.retryTimeout ?? defaultOptions?.retryTimeout ?? false
    const retryStatuses = options?.retryStatuses ??
      defaultOptions?.retryStatuses ?? [429, 500, 502, 503, 504]

    let response

    try {
      response = await fetch(url, { ...options })

      if (!response.ok) {
        if (retryStatuses.includes(response.status)) {
          throw new FetchError(
            `Request failed`,
            response.status,
            url,
            options || {},
            response
          )
        } else {
          return response
        }
      }

      return response
    } catch (error) {
      switch (true) {
        case error instanceof Error &&
          error.name === ABORT_ERROR_NAME &&
          !retryAbort: {
          throw error
        }

        case error instanceof Error &&
          error.name === TIMEOUT_ERROR_NAME &&
          !retryTimeout: {
          throw error
        }

        case retries === 0: {
          if (response) {
            return response
          } else {
            throw error
          }
        }
      }

      await new Promise((resolve) => setTimeout(resolve, retryDelay))

      return await fetchWithRetry(url, {
        ...options,

        retries: retries - 1,
        retryDelay: retryDelay * 2,
      })
    }
  }
}

/**
 * Expose a JSONL stream as an async iterable.
 *
 * @param {ReadableStream<Uint8Array> & {[Symbol.asyncIterator](): AsyncIterator<Uint8Array>}} body
 * @returns {AsyncGenerator<Record<string,any>>}
 */
export async function* jsonl(body) {
  const decoder = new TextDecoder()

  let previous = ''

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

  if (previous.trim().length > 0) {
    yield JSON.parse(previous)
  }
}
