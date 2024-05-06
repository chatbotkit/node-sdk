/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {Promise<UsageSeriesFetchResponse>}
 */
export async function fetchUsageSeries(client) {
  const url = `/api/v1/usage/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchUsageSeries']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}
