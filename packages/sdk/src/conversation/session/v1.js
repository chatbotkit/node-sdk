/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {import('../../types/api/v1.js').operations['createConversationSession']['requestBody']['content']['application/json']} ConversationSessionCreateRequestBody
 *
 * @typedef {ConversationSessionCreateRequestBody} ConversationSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationSession']['responses']['200']['content']['application/json']} ConversationSessionCreateResponseBody
 *
 * @typedef {ConversationSessionCreateResponseBody} ConversationSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSessionCreateRequest} request
 * @returns {Promise<ConversationSessionCreateResponse>}
 */
export async function createConversationSession(
  client,
  conversationId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/session/create`

  /** @type {ConversationSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
