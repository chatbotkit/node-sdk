/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   tokens: number,
 *   conversations: number,
 *   messages: number,
 *   database: {
 *     datasets: number,
 *     records: number,
 *     skillsets: number,
 *     abilities: number,
 *     files: number,
 *     users: number
 *   }
 * }} UsageOptions
 *
 * @typedef {UsageOptions & {
 * }} UsageInstance
 */

/**
 * @typedef {UsageInstance & {
 * }} UsageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<UsageFetchResponse>}
 */
export async function fetchUsage(client) {
  const url = `/api/v1/usage/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchUsage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}
