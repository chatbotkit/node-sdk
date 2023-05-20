import { fetchWithBackoff, jsonl, RequestError } from './fetch.js'

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
      body = JSON.stringify({ ...data, ...params?.data })
    }

    const response = await fetchWithBackoff(this.url.toString(), {
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
      const { message, code } = await response.json()

      throw new RequestError(message, code, this.request, response)
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
      .then((response) => response.json())
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

    // @ts-ignore
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
   * @param {{data?: Record<string,any>}} [options]
   * @returns {ResponsePromise<T,U>}
   */
  clientFetch(path, options) {
    let method = 'GET'

    const url = new URL(this.url)

    url.pathname = path

    if (
      url.hostname === 'api.chatbotkit.com' &&
      url.pathname.startsWith('/api/')
    ) {
      url.pathname = url.pathname.substring(4)
    }

    /** @type {Record<string,string>} */
    const headers = {
      Authorization: `Bearer ${this.secret}`,
    }

    let data

    if (options?.data) {
      method = 'POST'

      headers['Content-Type'] = 'application/json'

      data = options.data
    }

    const request = {
      method,
      headers,
      data,
    }

    return new ResponsePromise(url, request)
  }
}
