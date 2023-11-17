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

  /** @type {import('../../types/api/v1.js').operations['createConversationSession']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createConversationSession']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}
