/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   durationInSeconds?: number
 * }} SessionCreateRequest
 *
 * @typedef {{
 *   token: string,
 *   expiresAt: number
 * }} SessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {SessionCreateRequest} request
 * @returns {Promise<SessionCreateResponse>}
 */
export async function sessionCreate(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/session/create`

  return client.clientFetch(url, {
    data: request,
  })
}
