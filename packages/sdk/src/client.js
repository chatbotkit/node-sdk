import { fetchWithBackoff, RequestError } from './fetch.js'

/**
 * @template T,D
 */
export class ResponsePromise {
  /**
   * @param {URL|string} url
   * @param {{
   * method: string,
   * headers: Record<string,any>,
   * data?: Record<string,any>
   * }} request
   */
  constructor(url, request) {
    this.url = url
    this.request = request

    this.decoder = new TextDecoder()

    this.fetchPromise = null
    this.streamPromise = null
  }

  /**
   * @param {Record<string,any>} [params]
   */
  async getRequest(params) {
    let body

    const { method, headers, data } = this.request

    if (data) {
      body = JSON.stringify({ ...data, ...params })
    }

    const response = await fetchWithBackoff(this.url.toString(), {
      method,
      headers,
      body,
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
      this.streamPromise = this.getRequest({ stream: true })
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
   * @returns {AsyncGenerator<D>}
   */
  async *stream() {
    const response = await this.getStreamPromise()

    if (!response.body) {
      return
    }

    /** @type {string[]} */
    let chunks = []

    // @ts-ignore
    for await (const data of response.body) {
      let chunk = this.decoder.decode(data)

      let index = chunk.indexOf('\n')

      if (index >= 0) {
        const reminder = chunk.substring(index + 1)

        chunk = chunk.substring(0, index)

        chunks.push(chunk)

        const json = chunks.join('').trim()

        if (json) {
          yield JSON.parse(json)
        }

        chunks = [reminder]
      } else {
        chunks.push(chunk)
      }
    }

    if (chunks.length) {
      const json = chunks.join('').trim()

      if (json) {
        yield JSON.parse(json)
      }
    }
  }
}

/**
 * @typedef {{
 * secret: string,
 * host?: string
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
  }

  /**
   * @template T,D
   * @param {string} path
   * @param {{data?: Record<string,any>}} [options]
   * @returns {ResponsePromise<T,D>}
   */
  clientFetch(path, options) {
    let method = 'GET'

    const url = new URL(this.url)

    url.pathname = path

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
