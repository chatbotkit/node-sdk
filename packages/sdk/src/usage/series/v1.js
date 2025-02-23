/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   tokens: {date: number, total: number}[],
 *   conversations: {date: number, total: number}[],
 *   messages: {date: number, total: number}[]
 * }} UsageSeriesOptions
 *
 * @typedef {UsageSeriesOptions & {
 * }} UsageSeriesInstance
 */

/**
 * @typedef {UsageSeriesInstance & {
 * }} UsageSeriesFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageSeriesFetchResponse,never>}
 */
export function fetchUsageSeries(client) {
  const url = `/api/v1/usage/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchUsageSeries']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}
