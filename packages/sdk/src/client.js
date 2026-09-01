import {
  Blob,
  FetchError,
  FormData,
  fetch,
  jsonl,
  withRetry,
  withTimeout,
} from '@chatbotkit/fetch'

const fetchPlusPlus = withRetry(withTimeout(fetch, { timeout: Infinity }), {
  retries: 3,
  retryDelay: 250,
  retryTimeout: true,
})

/** @type {Record<string,{message: string, code: string}>} */
const standardErrors = {
  413: {
    message: 'Client request is too large to be processed by the web server.',
    code: 'CONTENT_TOO_LARGE',
  },

  default: {
    message: 'There was a generic error',
    code: 'GENERIC_ERROR',
  },
}

/**
 * Thrown when the API responds with `409 authorization_required` - the linked
 * secret or connection has not been authenticated yet. `url` is the address the
 * user must visit to authorize; `data` carries the full response body.
 */
export class AuthorizationRequiredError extends FetchError {
  /**
   * @param {string} message
   * @param {{ url?: string, status?: number, data?: any }} [meta]
   */
  constructor(message, meta = {}) {
    super(message, 'AUTHORIZATION_REQUIRED', meta)

    this.name = 'AuthorizationRequiredError'
    this.url = meta.url
    this.status = meta.status
    this.data = meta.data
  }
}

/**
 * @typedef {import('@chatbotkit/fetch').FetchFn<import('@chatbotkit/fetch').withRetryOptions & import('@chatbotkit/fetch').withTimeoutOptions>} FetchFunction
 */

/**
 * @template T
 * @template U
 */
export class ResponsePromise {
  /**
   * @param {URL|string} url
   * @param {{
   *   method: string,
   *   headers: Record<string,any>,
   *   data?: any,
   *   timeout?: number,
   *   retries?: number,
   *   retryDelay?: number,
   *   retryTimeout?: boolean,
   *   passthrough?: boolean,
   *   fetchFn?: FetchFunction
   * }} request
   * @param {Map<string,Promise<T>>} [cacheMap]
   */
  constructor(url, request, cacheMap = new Map()) {
    this.url = url
    this.request = request

    this.decoder = new TextDecoder()

    this.fetchPromise = null
    this.streamPromise = null

    this.cacheMap = cacheMap
  }

  get [Symbol.toStringTag]() {
    return 'ResponsePromise'
  }

  /**
   * @param {{
   *   method?: string,
   *   headers?: Record<string,any>,
   *   data?: any,
   *   timeout?: number,
   *   retries?: number,
   *   retryDelay?: number,
   *   retryTimeout?: boolean,
   *   fetchFn?: FetchFunction,
   *   abortSignal?: AbortSignal,
   * }} [params]
   */
  async getRequest(params) {
    let body

    const {
      method,
      headers,
      data,

      timeout,

      retries,
      retryDelay,
      retryTimeout,

      fetchFn,
    } = this.request

    if (data) {
      body = params?.data || data
    }

    const url = this.url.toString()

    const response = await (params?.fetchFn || fetchFn || fetchPlusPlus)(url, {
      method: params?.method || method,

      headers: {
        ...headers,
        ...params?.headers,
      },

      body,

      ...{
        timeout: params?.timeout ?? timeout,

        retries: params?.retries ?? retries,
        retryDelay: params?.retryDelay ?? retryDelay,
        retryTimeout: params?.retryTimeout ?? retryTimeout,
      },

      ...(params?.abortSignal ? { signal: params.abortSignal } : {}),

      mode: 'cors',
      cache: 'no-cache',
    })

    if (!response.ok && !this.request.passthrough) {
      let message
      let code
      let data

      const buffer = await response.arrayBuffer()

      try {
        data = JSON.parse(new TextDecoder().decode(buffer))

        message = data.message || `HTTP Error: ${response.statusText}`
        code = data.code || `ERROR_${response.status}`
      } catch {
        const fallback = standardErrors[response.status] || standardErrors.default

        message = fallback.message
        code = fallback.code
      }

      // surface the authorize URL on a typed error so callers can drive a
      // connect flow when a secret/connection has not been authenticated yet
      if (data && data.error === 'authorization_required') {
        throw new AuthorizationRequiredError(message, {
          url: data.url,
          status: response.status,
          data,
        })
      }

      // attach the parsed body + status so structured error fields are reachable
      const error = /** @type {FetchError & { status?: number, data?: any }} */ (
        new FetchError(message, code, { url })
      )

      error.status = response.status
      error.data = data

      throw error
    }

    return response
  }

  getFetchPromise() {
    if (!this.fetchPromise) {
      this.fetchPromise = this.getRequest()
    }

    return this.fetchPromise
  }

  /**
   * Resolves to the raw `Response` without parsing the body. Combined with the
   * `passthrough` request option it does not throw on a non-2xx status, which
   * makes it suitable for passthrough endpoints such as the secret proxy.
   *
   * @param {{ abortSignal?: AbortSignal }} [params]
   * @returns {Promise<Response>}
   */
  raw(params) {
    return this.getRequest(params)
  }

  /**
   * @param {{ abortSignal?: AbortSignal }} [params]
   */
  getStreamPromise(params) {
    if (!this.streamPromise) {
      this.streamPromise = this.getRequest({
        headers: { Accept: 'application/jsonl' },
        abortSignal: params?.abortSignal,
      })
    }

    return this.streamPromise
  }

  /**
   * @template TResult1
   * @template TResult2
   * @param {((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null} [onSuccess]
   * @param {((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null} [onFail]
   * @returns {Promise<TResult1 | TResult2>}
   */
  then(onSuccess, onFail) {
    return this.getFetchPromise()
      .then(async (response) => {
        if (
          (response.headers.get('content-type') || '')
            .toLowerCase()
            .split(';')[0]
            .trim() === 'application/json'
        ) {
          return await response.json()
        } else {
          return {
            headers: response.headers,
            data: await response.arrayBuffer(),
          }
        }
      })
      .then(onSuccess, onFail)
  }

  /**
   * @template TResult
   * @param {((reason: any) => TResult | PromiseLike<TResult>) | undefined | null} [fn]
   * @returns {Promise<T | TResult>}
   */
  catch(fn) {
    return this.then(undefined, fn)
  }

  /**
   * @param {(() => void) | undefined | null} [fn]
   * @returns {Promise<T>}
   */
  finally(fn) {
    return this.then(
      (value) => {
        if (fn) {
          fn()
        }

        return value
      },
      (reason) => {
        if (fn) {
          fn()
        }

        throw reason
      }
    )
  }

  /**
   * @param {{ abortSignal?: AbortSignal }} [params]
   * @returns {AsyncGenerator<U>}
   */
  async *stream(params) {
    const response = await this.getStreamPromise(params)

    if (!response.body) {
      return
    }

    // @ts-expect-error polyfill
    yield* jsonl(response.body)
  }

  /**
   * @param {string} [key]
   * @returns {Promise<T>}
   */
  async cache(key = 'default') {
    const cacheKey = JSON.stringify({
      key,
      method: this.request?.method || 'GET',
      url: this.url.toString(),
    })

    if (!this.cacheMap.has(cacheKey)) {
      this.cacheMap.set(
        cacheKey,
        this.getFetchPromise().then(async (response) => {
          if (
            (response.headers.get('content-type') || '')
              .toLowerCase()
              .split(';')[0]
              .trim() === 'application/json'
          ) {
            return await response.json()
          } else {
            return {
              data: await response.arrayBuffer(),
            }
          }
        })
      )
    }

    return /** @type {T}*/ (await this.cacheMap.get(cacheKey))
  }
}

/**
 * @typedef {Object} ChatBotKitClientOptions
 * @property {string} secret A token to authenticate with the API
 * @property {string|URL} [baseUrl] An optional base URL to use for the API
 * @property {string} [host] An optional hostname to use for the API
 * @property {'http:'|'https:'} [protocol] An optional protocol to use for the API
 * @property {Record<string,string>} [endpoints] An optional map of endpoints to override
 * @property {string} [runAsUserId] An optional user ID to run as
 * @property {string} [runAsChildUserEmail] An optional child user email to run as (experimental)
 * @property {string} [timezone] An optional timezone to use for the API
 * @property {Record<string,string>} [headers] An optional map of headers to add to the request
 * @property {number} [timeout] An optional timeout in milliseconds for the request
 * @property {number} [retries] An optional number of retries for the request
 * @property {number} [retryDelay] An optional delay in milliseconds between retries
 * @property {boolean} [retryTimeout] An optional flag to retry on timeout errors
 * @property {FetchFunction} [fetchFn] An optional fetch implementation function to use instead
 */

export class ChatBotKitClient {
  /** @type {string|null} */
  #secret = null

  /** @type {URL} */
  #baseUrl

  /** @type {Record<string,string>} */
  #endpoints

  /** @type {string|undefined} */
  #runAsUserId

  /** @type {string|undefined} */
  #runAsChildUserEmail

  /** @type {string|undefined} */
  #timezone

  /** @type {Record<string,string>} */
  #headers

  /** @type {number|undefined} */
  #timeout

  /** @type {number|undefined} */
  #retries

  /** @type {number|undefined} */
  #retryDelay

  /** @type {boolean|undefined} */
  #retryTimeout

  /** @type {FetchFunction} */
  #fetchFn

  /** @type {Map<string,Promise<any>>} */
  #cacheMap

  /**
   * @param {ChatBotKitClientOptions} options
   */
  constructor(options) {
    this.#secret = options.secret

    this.#baseUrl = new URL(options.baseUrl || `https://api.chatbotkit.com`)

    if (options.host) {
      this.#baseUrl.host = options.host
    }

    if (options.protocol) {
      this.#baseUrl.protocol = options.protocol
    }

    this.#endpoints = options.endpoints || {}

    this.#runAsUserId = options.runAsUserId
    this.#runAsChildUserEmail = options.runAsChildUserEmail

    this.#timezone = options.timezone

    this.#headers = options.headers || {}

    this.#timeout = options.timeout

    this.#retries = options.retries
    this.#retryDelay = options.retryDelay
    this.#retryTimeout = options.retryTimeout

    this.#fetchFn = options.fetchFn || fetchPlusPlus

    this.#cacheMap = new Map()
  }

  /**
   * Creates a new instance of the same client type with extended options.
   *
   * This is useful when you need to create a client with modified configuration
   * (e.g., different endpoint, token, or headers) without affecting the original.
   *
   * Note: This method creates a completely new instance rather than cloning,
   * which is necessary because private class fields cannot be copied.
   *
   * @param {Partial<ChatBotKitClientOptions>} extensionOptions - Options to merge with current options
   * @returns {this} A new instance of the same client class with extended options
   */
  extend(extensionOptions) {
    const currentOptions = {
      secret: this.#secret || '',

      baseUrl: this.#baseUrl.toString(),

      endpoints: { ...this.#endpoints },

      runAsUserId: this.#runAsUserId,
      runAsChildUserEmail: this.#runAsChildUserEmail,

      timezone: this.#timezone,

      headers: { ...this.#headers },

      timeout: this.#timeout,

      retries: this.#retries,
      retryDelay: this.#retryDelay,
      retryTimeout: this.#retryTimeout,

      fetchFn: this.#fetchFn,
    }

    const mergedOptions = {
      ...currentOptions,

      ...extensionOptions,

      endpoints: {
        ...currentOptions.endpoints,

        ...(extensionOptions.endpoints || {}),
      },

      headers: {
        ...currentOptions.headers,

        ...(extensionOptions.headers || {}),
      },
    }

    // @ts-expect-error - this.constructor will be the actual class (e.g., ConversationClient)
    return new this.constructor(mergedOptions)
  }

  /**
   * @internal
   * @template T
   * @template U
   * @param {string} path
   * @param {{
   *   method?: string,
   *   headers?: Record<string,any>,
   *   query?: Record<string,any>,
   *   record?: Record<string,any>,
   *   buffer?: ArrayBuffer,
   *   file?: { name?: string, type?: string, data: string|ArrayBuffer },
   *   external?: boolean,
   *   endpoint?: string,
   *   timeout?: number,
   *   retries?: number,
   *   retryDelay?: number,
   *   retryTimeout?: boolean,
   *   passthrough?: boolean,
   *   fetchFn?: FetchFunction
   * }} [options]
   * @returns {ResponsePromise<T,U>}
   */
  clientFetch(path, options) {
    let method = options?.method

    const url = new URL(
      this.#endpoints[options?.endpoint || path] || path,
      this.#baseUrl
    )

    if (
      url.hostname === 'api.chatbotkit.com' &&
      url.pathname.startsWith('/api/')
    ) {
      url.pathname = url.pathname.substring(4)
    }

    if (options?.query) {
      for (const key in options.query) {
        const value = options.query[key]

        if (typeof value === 'object') {
          for (const subKey in value) {
            const subValue = value[subKey]

            if (subValue != null) {
              url.searchParams.append(`${key}.${subKey}`, subValue)
            }
          }
        } else {
          if (value != null) {
            url.searchParams.append(key, value)
          }
        }
      }
    }

    /** @type {Record<string,string>} */
    const headers = {
      ...this.#headers,
    }

    if (!options?.external) {
      if (this.#secret) {
        headers['authorization'] = `Bearer ${this.#secret}`
      }

      if (this.#runAsUserId) {
        headers['x-runas-user-id'] = this.#runAsUserId
      }

      if (this.#runAsChildUserEmail) {
        headers['x-runas-child-user-email'] = this.#runAsChildUserEmail
      }
    }

    if (this.#timezone) {
      headers['x-timezone'] = this.#timezone
    }

    let data

    if (options?.record) {
      method = method || 'POST'

      data = JSON.stringify(options.record)

      headers['content-type'] = 'application/json'
    } else if (options?.buffer) {
      method = method || 'POST'

      data = options.buffer

      headers['content-type'] = 'application/octet-stream'
    } else if (options?.file) {
      method = method || 'POST'

      data = new FormData()

      data.append(
        'file',
        new Blob([options.file.data], { type: options.file.type }),
        options.file.name
      )
    } else {
      method = method || 'GET'
    }

    if (options?.headers) {
      Object.assign(headers, options.headers)
    }

    const request = {
      method,
      headers,
      data,

      timeout: options?.timeout ?? this.#timeout,

      retries: options?.retries ?? this.#retries,
      retryDelay: options?.retryDelay ?? this.#retryDelay,
      retryTimeout: options?.retryTimeout ?? this.#retryTimeout,

      passthrough: options?.passthrough,

      fetchFn: options?.fetchFn || this.#fetchFn,
    }

    return new ResponsePromise(url, request, this.#cacheMap)
  }

  /**
   * Proxies a request and resolves the upstream `Response`. Successful and
   * upstream-error responses pass through untouched - streaming, binary and
   * large bodies are preserved (the body is never read on the success path).
   * The one exception is a CBK `authorization_required` signal, which is thrown
   * as an {@link AuthorizationRequiredError} carrying the `url` the user must
   * visit to authenticate.
   *
   * @param {string} path
   * @param {{
   *   method?: string,
   *   headers?: Record<string,any>,
   *   query?: Record<string,any>,
   *   record?: Record<string,any>,
   *   buffer?: ArrayBuffer,
   *   file?: { name?: string, type?: string, data: string|ArrayBuffer },
   *   external?: boolean,
   *   endpoint?: string,
   *   timeout?: number,
   *   retries?: number,
   *   retryDelay?: number,
   *   retryTimeout?: boolean,
   *   fetchFn?: FetchFunction
   * }} [options]
   * @returns {Promise<Response>}
   */
  async clientProxy(path, options) {
    const response = await this.clientFetch(path, {
      ...options,
      passthrough: true,
    }).raw()

    if (response.ok) {
      return response
    }

    const contentType = response.headers.get('content-type') || ''

    if (!contentType.includes('application/json')) {
      return response
    }

    let data

    try {
      data = await response.clone().json()
    } catch {
      return response
    }

    if (data && data.error === 'authorization_required') {
      throw new AuthorizationRequiredError(data.message, {
        url: data.url,
        status: response.status,
        data,
      })
    }

    return response
  }
}
