/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   durationInSeconds?: number
 * }} SessionCreateRequest
 *
 * @typedef {{
 *   conversationId: string,
 *   token: string,
 *   expiresAt: number
 * }} SessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {SessionCreateRequest} request
 * @returns {Promise<SessionCreateResponse>}
 */
export async function sessionCreate(client, botId, request) {
  const url = `/api/v1/bot/${botId}/session/create`

  return client.clientFetch(url, {
    data: request,
  })
}
