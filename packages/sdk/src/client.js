import { fetchWithBackoff, RequestError } from './fetch.js'

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

    this.url = new URL(`https://localhost`)

    this.url.host = options.host || 'api.chatbotkit.com'
  }

  /**
   * @template T
   * @param {string} path
   * @param {{data?: Record<string,any>}} [options]
   * @returns {Promise<T>}
   */
  async clientFetch(path, options) {
    let method = 'GET'

    const url = new URL(this.url)

    url.pathname = path

    /** @type {Record<string,string>} */
    const headers = {
      Authorization: `Bearer ${this.secret}`,
    }

    let body

    if (options?.data) {
      method = 'POST'

      headers['Content-Type'] = 'application/json'

      body = JSON.stringify(options.data)
    }

    const request = {
      method,
      headers,
      body,
    }

    const response = await fetchWithBackoff(url.toString(), request)

    if (response.ok) {
      return await response.json()
    }

    const { message, code } = await response.json()

    throw new RequestError(message, code, request, response)
  }
}
