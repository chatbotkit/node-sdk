/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../types/api/v1.js').operations['fetchUsage']['responses']['200']['content']['application/json']} UsageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageFetchResponse,never>}
 */
export function fetchUsage(client) {
  const url = `/api/v1/usage/fetch`

  /** @type {ResponsePromise<UsageFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}
