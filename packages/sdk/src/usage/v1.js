/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   tokens: number,
 *   conversations: number,
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
