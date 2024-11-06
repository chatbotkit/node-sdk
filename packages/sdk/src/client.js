import {
  Blob,
  FetchError,
  FormData,
  fetch,
  jsonl,
  withRetry,
  withTimeout,
} from '@chatbotkit/fetch'

const fetchPlusPlus = withRetry(withTimeout(fetch))

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
 * @template T
 * @template U
 */
export class ResponsePromise {
  /**
   * @param {URL|string} url
   * @param {{
   *   method: string,
   *   headers: Record<string,any>,
   *   data?: any
   * }} request
   */
  constructor(url, request) {
    this.url = url
    this.request = request

    this.decoder = new TextDecoder()

    this.fetchPromise = null
    this.streamPromise = null
  }

  get [Symbol.toStringTag]() {
    return 'ResponsePromise'
  }

  /**
   * @param {{method?: string, headers?: Record<string,any>, data?: any}} [params]
   */
  async getRequest(params) {
    let body

    const { method, headers, data } = this.request

    if (data) {
      body = params?.data || data
    }

    const url = this.url.toString()

    const response = await fetchPlusPlus(url, {
      method: params?.method || method,

      headers: {
        ...headers,
        ...params?.headers,
      },

      body,

      mode: 'cors',
      cache: 'no-cache',
    })

    if (!response.ok) {
      let message
      let code

      const buffer = await response.arrayBuffer()

      try {
        const data = JSON.parse(new TextDecoder().decode(buffer))

        message = data.message
        code = data.code
      } catch (e) {
        const data = standardErrors[response.status] || standardErrors.default

        message = data.message
        code = data.code
      }

      throw new FetchError(message, code, url, this.request, response)
    }

    return response
  }

  getFetchPromise() {
    if (!this.fetchPromise) {
      this.fetchPromise = this.getRequest()
    }

    return this.fetchPromise
  }

  getStreamPromise() {
    if (!this.streamPromise) {
      this.streamPromise = this.getRequest({
        headers: { Accept: 'application/jsonl' },
      })
    }

    return this.streamPromise
  }

  /**
   * @param {(...args: any[]) => any} onSuccess
   * @param {(...args: any[]) => any} onFail
   * @returns {Promise<T>}
   */
  then(onSuccess, onFail) {
    return this.getFetchPromise()
      .then(async (response) => {
        if (
          response.headers.get('content-type')?.includes('application/json')
        ) {
          return await response.json()
        } else {
          return {
            data: await response.arrayBuffer(),
          }
        }
      })
      .then(onSuccess, onFail)
  }

  /**
   * @param {(...args: any[]) => any} fn
   */
  catch(fn) {
    return this.getFetchPromise().catch(fn)
  }

  /**
   * @param {(...args: any[]) => any} fn
   */
  finally(fn) {
    return this.getFetchPromise().finally(fn)
  }

  /**
   * @returns {AsyncGenerator<U>}
   */
  async *stream() {
    const response = await this.getStreamPromise()

    if (!response.body) {
      return
    }

    // @ts-expect-error polyfill
    yield* jsonl(response.body)
  }
}

/**
 * @typedef {Object} ChatBotKitClientOptions
 * @property {string} secret A token to authenticate with the API
 * @property {string} [host] An optional hostname to use for the API
 * @property {'http:'|'https:'} [protocol] An optional protocol to use for the API
 * @property {Record<string,string>} [endpoints] An optional map of endpoints to override
 * @property {string} [runAsUserId] An optional user ID to run as
 * @property {string} [runAsUserEmail] An optional user email to run as
 */

export class ChatBotKitClient {
  /**
   * @param {ChatBotKitClientOptions} options
   */
  constructor(options) {
    this.secret = options.secret

    this.url = new URL(`https://api.chatbotkit.com`)

    if (options.host) {
      this.url.host = options.host
    }

    if (options.protocol) {
      this.url.protocol = options.protocol
    }

    this.endpoints = options.endpoints || {}

    this.runAsUserId = options.runAsUserId
    this.runAsUserEmail = options.runAsUserEmail
  }

  /**
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
   *   external?: boolean
   * }} [options]
   * @returns {ResponsePromise<T,U>}
   */
  clientFetch(path, options) {
    let method = options?.method

    const url = new URL(this.endpoints[path] || path, this.url)

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

            url.searchParams.append(`${key}.${subKey}`, subValue)
          }
        } else {
          url.searchParams.append(key, value)
        }
      }
    }

    /** @type {Record<string,string>} */
    const headers = {}

    if (!options?.external) {
      if (this.secret) {
        headers['authorization'] = `Bearer ${this.secret}`
      }

      if (this.runAsUserId) {
        headers['x-runas-user-id'] = this.runAsUserId
      }

      if (this.runAsUserEmail) {
        headers['x-runas-user-email'] = this.runAsUserEmail
      }
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
    }

    return new ResponsePromise(url, request)
  }
}
