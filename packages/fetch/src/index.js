/* eslint-disable no-undef */
const globalObject = typeof global !== 'undefined' ? global : globalThis

// we need to polyfill the ReadableStream for chrome and Safari
{
  if (
    typeof globalObject !== 'undefined' &&
    typeof globalObject.ReadableStream === 'function' &&
    // @ts-expect-error because it is non standard
    typeof globalObject.ReadableStream.prototype[Symbol.asyncIterator] !==
      'function'
  ) {
    // @ts-expect-error because it is non standard
    globalObject.ReadableStream.prototype[Symbol.asyncIterator] = function () {
      const reader = this.getReader()

      return {
        next: () => reader.read(),
        return: () => {
          reader.releaseLock()

          return Promise.resolve({ done: true })
        },
      }
    }
  }
}

export const OK_STATUS = 200
export const NOT_MODIFIED_STATUS = 304
export const BAD_REQUEST_STATUS = 400
export const NOT_AUTHENTICATED_STATUS = 401
export const NO_SUBSCRIPTION_STATUS = 402
export const NOT_AUTHORIZED_STATUS = 403
export const NOT_FOUND_STATUS = 404
export const METHOD_NOT_ALLOWED_STATUS = 405
export const TIMEOUT_STATUS = 408
export const CONFLICT_STATUS = 409
export const UNPROCESSABLE_ENTITY_STATUS = 422
export const TOO_MANY_REQUESTS_STATUS = 429
export const LIMITS_REACHED_STATUS = 429
export const INTERNAL_SERVER_ERROR_STATUS = 500
export const NOT_IMPLEMENTED_STATUS = 501
export const BAD_GATEWAY_STATUS = 502
export const SERVICE_UNAVAILABLE_STATUS = 503
export const GATEWAY_TIMEOUT_STATUS = 504

export const OK_MESSAGE = 'OK'
export const NOT_MODIFIED_MESSAGE = 'Not modified'
export const BAD_REQUEST_MESSAGE = 'Bad request'
export const NOT_AUTHENTICATED_MESSAGE = 'Not authenticated'
export const NOT_AUTHORIZED_MESSAGE = 'Not authorized'
export const NO_SUBSCRIPTION_MESSAGE = 'No subscription'
export const NOT_FOUND_MESSAGE = 'Not found'
export const METHOD_NOT_ALLOWED_MESSAGE = 'Method not allowed'
export const TIMEOUT_MESSAGE = 'Timeout'
export const CONFLICT_MESSAGE = 'Conflict'
export const UNPROCESSABLE_ENTITY_STATUS_MESSAGE = 'Unprocessable entity'
export const TOO_MANY_REQUESTS_MESSAGE = 'Too many requests'
export const LIMITS_REACHED_MESSAGE = 'Limits reached'
export const INTERNAL_SERVER_ERROR_MESSAGE = 'Internal server error'
export const NOT_IMPLEMENTED_MESSAGE = 'Not implemented'
export const BAD_GATEWAY_MESSAGE = 'Bad gateway'
export const SERVICE_UNAVAILABLE_MESSAGE = 'Service unavailable'
export const GATEWAY_TIMEOUT_MESSAGE = 'Gateway timeout'

export const OK_CODE = 'OK'
export const NOT_MODIFIED_CODE = 'NOT_MODIFIED'
export const BAD_REQUEST_CODE = 'BAD_REQUEST'
export const NOT_AUTHENTICATED_CODE = 'NOT_AUTHENTICATED'
export const NOT_AUTHORIZED_CODE = 'NOT_AUTHORIZED'
export const NO_SUBSCRIPTION_CODE = 'NO_SUBSCRIPTION'
export const NOT_FOUND_CODE = 'NOT_FOUND'
export const METHOD_NOT_ALLOWED_CODE = 'METHOD_NOT_ALLOWED'
export const TIMEOUT_CODE = 'TIMEOUT'
export const CONFLICT_CODE = 'CONFLICT'
export const UNPROCESSABLE_ENTITY_CODE = 'UNPROCESSABLE_ENTITY'
export const TOO_MANY_REQUESTS_CODE = 'TOO_MANY_REQUESTS'
export const LIMITS_REACHED_CODE = 'LIMITS_REACHED'
export const INTERNAL_SERVER_ERROR_CODE = 'INTERNAL_SERVER_ERROR'
export const NOT_IMPLEMENTED_CODE = 'NOT_IMPLEMENTED'
export const BAD_GATEWAY_CODE = 'BAD_GATEWAY'
export const SERVICE_UNAVAILABLE_CODE = 'SERVICE_UNAVAILABLE'
export const GATEWAY_TIMEOUT_CODE = 'GATEWAY_TIMEOUT'

/**
 * @type {Record<number,string>}
 */
export const statusToCodeMap = {
  [OK_STATUS]: OK_CODE,
  [NOT_MODIFIED_STATUS]: NOT_MODIFIED_CODE,
  [BAD_REQUEST_STATUS]: BAD_REQUEST_CODE,
  [NOT_AUTHENTICATED_STATUS]: NOT_AUTHENTICATED_CODE,
  [NOT_AUTHORIZED_STATUS]: NOT_AUTHORIZED_CODE,
  [NO_SUBSCRIPTION_STATUS]: NO_SUBSCRIPTION_CODE,
  [NOT_FOUND_STATUS]: NOT_FOUND_CODE,
  [METHOD_NOT_ALLOWED_STATUS]: METHOD_NOT_ALLOWED_CODE,
  [TIMEOUT_STATUS]: TIMEOUT_CODE,
  [CONFLICT_STATUS]: CONFLICT_CODE,
  [UNPROCESSABLE_ENTITY_STATUS]: UNPROCESSABLE_ENTITY_CODE,
  [TOO_MANY_REQUESTS_STATUS]: TOO_MANY_REQUESTS_CODE,
  // [LIMITS_REACHED_STATUS]: LIMITS_REACHED_CODE, // disabled because duplicate status
  [INTERNAL_SERVER_ERROR_STATUS]: INTERNAL_SERVER_ERROR_CODE,
  [NOT_IMPLEMENTED_STATUS]: NOT_IMPLEMENTED_CODE,
  [BAD_GATEWAY_STATUS]: BAD_GATEWAY_CODE,
  [SERVICE_UNAVAILABLE_STATUS]: SERVICE_UNAVAILABLE_CODE,
  [GATEWAY_TIMEOUT_STATUS]: GATEWAY_TIMEOUT_CODE,
}

/**
 * A FetchError is thrown when a fetch request fails.
 */
export class FetchError extends Error {
  /**
   * @param {string} message
   * @param {string} code
   * @param {Record<string,any>} [meta]
   */
  constructor(message, code, meta) {
    super(message)

    this.name = meta
      ? 'FetchError'
      : `FetchError(${JSON.stringify(meta || {})})`
    this.code = code || 'FetchError'
  }
}

/**
 * Create a FetchError from a Response object.
 *
 * @param {Response} response
 * @param {Record<string,any>} [meta]
 * @returns {Promise<FetchError>}
 */
export async function getFetchError(response, meta) {
  if (response.ok) {
    throw new Error(`Response ok: ${response.status} ${response.statusText}`)
  }

  const status = response.status
  const text = await response.text()

  let json

  try {
    json = JSON.parse(text)
  } catch {
    json = { message: text, code: statusToCodeMap[status] }
  }

  return new FetchError(
    json.message || text,
    json.code || statusToCodeMap[status] || statusToCodeMap[500],
    meta
  )
}

export const ABORT_ERROR_NAME = 'AbortError'
export const TIMEOUT_ERROR_NAME = 'TimeoutError'

export const DEFAULT_TIMEOUT = process.env.FETCH_DEFAULT_TIMEOUT
  ? parseInt(process.env.FETCH_DEFAULT_TIMEOUT, 10)
  : 30000

export const DEFAULT_RETRIES = 5
export const DEFAULT_RETRY_DELAY = 250
export const DEFAULT_RETRY_TIMEOUT = false
export const DEFAULT_RETRY_STATUSES = [429, 500, 502, 503, 504]

/**
 * A AbortError is thrown when a fetch request is aborted.
 */
export class AbortError extends Error {
  /**
   * @param {string} [message]
   */
  constructor(message) {
    super(message || ABORT_ERROR_NAME)

    this.name = ABORT_ERROR_NAME
    this.code = ABORT_ERROR_NAME
  }
}

/**
 * A TimeoutError is thrown when a fetch request times out.
 */
export class TimeoutError extends Error {
  /**
   * @param {string} [message]
   */
  constructor(message) {
    super(message || TIMEOUT_ERROR_NAME)

    this.name = TIMEOUT_ERROR_NAME
    this.code = TIMEOUT_ERROR_NAME
  }
}

/**
 * @param {string|URL} url
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 */
export function fetch(url, init) {
  const nativeFetch =
    typeof globalObject !== 'undefined' ? globalObject.fetch : undefined

  if (!nativeFetch) {
    throw new Error(`No suitable fetch implementation found`)
  }

  return nativeFetch(url, init)
}

/**
 * @param {(AbortSignal|null|undefined)[]} signals
 * @returns {AbortSignal}
 */
export function anySignal(signals) {
  const controller = new AbortController()

  for (const signal of signals) {
    if (!signal) {
      continue
    }

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
 * @template T
 * @typedef {(url: string|URL, options?: RequestInit & T) => Promise<Response>} FetchFn
 */

/**
 * @typedef {{
 *   timeout?: number
 * }} withTimeoutOptions
 *
 * Add timeout capabilities to any fetch implementation.
 *
 * @param {FetchFn<{}>} fetch
 * @param {withTimeoutOptions} [defaultOptions]
 * @returns {FetchFn<withTimeoutOptions>}
 */
export function withTimeout(fetch, defaultOptions) {
  /**
   * @param {string|URL} url
   * @param {RequestInit & withTimeoutOptions} [options]
   * @returns {Promise<Response>}
   */
  return async function fetchWithTimeout(url, options) {
    const timeout =
      options?.timeout ?? defaultOptions?.timeout ?? DEFAULT_TIMEOUT

    let signal
    let handler

    let isTimeOutAbort = false

    if (timeout > 0 && timeout !== Infinity) {
      const abortController = new AbortController()

      // @todo use AbortSignal.timeout(n) when widely supported, right now there
      // in fact little to no support with known bugs in Chrome

      handler = setTimeout(() => {
        isTimeOutAbort = true

        abortController.abort(new TimeoutError())
      }, timeout)

      // @todo use AbortSignal.any([]) when widely supported, right now most
      // implementation simply do not have it

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
    } catch (/** @type {any} */ error) {
      // @note we have a problem because some implementation (Chrome) do not
      // correctly transfer the real reason for the abort i.e. the timeout
      // error, so we need to check if we have raised a timeout above and if so
      // we need to throw the correct error

      if ([error?.name, error?.message].includes(ABORT_ERROR_NAME)) {
        if (isTimeOutAbort) {
          throw new TimeoutError()
        }
      }

      throw error
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
 *   retryTimeout?: boolean
 *   retryStatuses?: number[]
 * }} withRetryOptions
 *
 * Add retry capabilities to any fetch implementation.
 *
 * @param {FetchFn<{}>} fetch
 * @param {withRetryOptions} [defaultOptions]
 * @returns {FetchFn<withRetryOptions>}
 */
export function withRetry(fetch, defaultOptions) {
  /**
   * @param {string|URL} url
   * @param {RequestInit & withRetryOptions} [options]
   * @returns {Promise<Response>}
   */
  return async function fetchWithRetry(url, options) {
    const retries =
      options?.retries ?? defaultOptions?.retries ?? DEFAULT_RETRIES

    const retryDelay =
      options?.retryDelay ?? defaultOptions?.retryDelay ?? DEFAULT_RETRY_DELAY

    const retryTimeout =
      options?.retryTimeout ??
      defaultOptions?.retryTimeout ??
      DEFAULT_RETRY_TIMEOUT

    const retryStatuses =
      options?.retryStatuses ??
      defaultOptions?.retryStatuses ??
      DEFAULT_RETRY_STATUSES

    let response

    try {
      response = await fetch(url, { ...options })

      if (!response.ok) {
        if (retryStatuses.includes(response.status)) {
          // @note we don't use getFetchError here because we don't want to read
          // the response body

          throw new FetchError(
            `Fetch failed with status ${response.status} (${response.statusText})`,
            statusToCodeMap[response.status] || statusToCodeMap[500],
            {
              url: new URL(url).href,
              options: options,
            }
          )
        } else {
          return response
        }
      }

      return response
    } catch (/** @type {any} */ error) {
      switch (true) {
        case [error?.name, error?.message].includes(TIMEOUT_ERROR_NAME) &&
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
  try {
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
  } catch (/** @type {any} */ error) {
    if (error?.name !== ABORT_ERROR_NAME) {
      throw error
    }
  }
}

export default fetch
