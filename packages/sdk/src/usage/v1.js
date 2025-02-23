/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
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
 * @returns {ResponsePromise<UsageFetchResponse,never>}
 */
export function fetchUsage(client) {
  const url = `/api/v1/usage/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchUsage']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}
