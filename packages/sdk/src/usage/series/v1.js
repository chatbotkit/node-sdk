/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchUsageSeries']['responses']['200']['content']['application/json']} UsageSeriesFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageSeriesFetchResponse,never>}
 */
export function fetchUsageSeries(client) {
  const url = `/api/v1/usage/series/fetch`

  /** @type {ResponsePromise<UsageSeriesFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}
