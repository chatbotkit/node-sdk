/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   tokens: number,
 *   conversations: number,
 * }} UsageOptions
 *
 * @typedef {{
 *   id: string,
 *   store: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & UsageOptions} UsageInstance
 */

/**
 * @typedef {UsageInstance} UsageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<UsageFetchResponse>}
 */
export async function usageFetch(client) {
  const url = `/api/v1/usage/fetch`

  return client.clientFetch(url)
}
