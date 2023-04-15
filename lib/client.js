const { fetchWithBackoff, RequestError } = require('./fetch.js')

/**
 * @typedef {{secret: string}} ChatBotKitClientOptions
 */

class ChatBotKitClient {
  /**
   * @param {ChatBotKitClientOptions} options
   */
  constructor(options) {
    this.secret = options.secret
  }

  /**
   * @template T
   * @param {string} url
   * @param {{data?: Record<string,any>}} [options]
   * @returns {Promise<T>}
   */
  async clientFetch(url, options) {
    let method = 'GET'

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

    const response = await fetchWithBackoff(url, { method, headers, body })

    if (response.ok) {
      return await response.json()
    }

    throw new RequestError('Unable process request', response)
  }
}

module.exports = {
  ChatBotKitClient,
}
