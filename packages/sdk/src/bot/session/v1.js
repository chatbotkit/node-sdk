/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   durationInSeconds?: number
 * }} BotSessionCreateRequest
 *
 * @typedef {{
 *   conversationId: string,
 *   token: string,
 *   expiresAt: number
 * }} BotSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotSessionCreateRequest} request
 * @returns {Promise<BotSessionCreateResponse>}
 */
export async function createBotSession(client, botId, request) {
  const url = `/api/v1/bot/${botId}/session/create`

  /** @type {import('../../types/api/v1.js').operations['createBotSession']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createBotSession']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}
