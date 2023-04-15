/* global fetch */

require('isomorphic-fetch')

class RequestError extends Error {
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
async function fetchWithBackoff(url, options, retries = 5, retryDelay = 250) {
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

module.exports = {
  RequestError,

  fetchWithBackoff,
}
