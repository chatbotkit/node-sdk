import {
  fetch,
  withTimeout,
  withRetry,
  FetchError,
  jsonl,
  Blob,
  FormData,
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
 * @template T,U
 */
export class ResponsePromise {
  /**
   * @param {URL|string} url
   * @param {{
   *   method: string,
   *   headers: Record<string,any>,
   *   data?: Record<string,any>
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
   * @param {{headers?: Record<string,any>, data?: Record<string,any>}} [params]
   */
  async getRequest(params) {
    let body

    const { method, headers, data } = this.request

    if (data) {
      if (data instanceof FormData) {
        body = data
      } else {
        body = JSON.stringify({ ...data, ...params?.data })
      }
    }

    const url = this.url.toString()

    const response = await fetchPlusPlus(url, {
      method,

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

      try {
        const data = await response.json()

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
 * @typedef {{
 *   secret: string,
 *   host?: string,
 *   protocol?: 'http:'|'https'
 * }} ChatBotKitClientOptions
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
  }

  /**
   * @template T,U
   * @param {string} path
   * @param {{query?: Record<string,any>, data?: Record<string,any>, file?: { name?: string, type?: string, data: string|ArrayBuffer }}} [options]
   * @returns {ResponsePromise<T,U>}
   */
  clientFetch(path, options) {
    let method = 'GET'

    const url = new URL(path, this.url)

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

    if (this.secret) {
      headers.Authorization = `Bearer ${this.secret}`
    }

    let data

    if (options?.data) {
      method = 'POST'

      headers['Content-Type'] = 'application/json'

      data = options.data
    } else if (options?.file) {
      method = 'POST'

      data = new FormData()

      data.append(
        'file',
        new Blob([options.file.data], { type: options.file.type }),
        options.file.name
      )
    }

    const request = {
      method,
      headers,
      data,
    }

    return new ResponsePromise(url, request)
  }
}
