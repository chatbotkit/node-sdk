/**
 * @typedef {{
 * type: 'user'|'bot'|'context'|'instruction'|'backstory',
 * text: string
 * }} Message
 */

/**
 * @typedef {{
 * model?: string,
 * messages: Message[]
 * }} ConversationCompleteRequest
 *
 * @typedef {{
 * text: string
 * }} ConversationCompleteResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {Promise<ConversationCompleteResponse>}
 */
async function conversationComplete(client, request) {
  const response = await client.clientFetch(`/api/v1/conversation/complete`, {
    data: request,
  })

  return response
}

/**
 * @typedef {{
 * id: string
 * }} ConversationListResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @returns {Promise<ConversationListResponse>}
 */
async function conversationList(client) {
  const response = await client.clientFetch(`/api/v1/conversation/list`)

  return response
}

/**
 * @typedef {{
 * backstory?: string,
 * model?: string,
 * datasetId?: string,
 * skillsetId?: string,
 * privacy?: boolean,
 * moderation?: boolean,
 * messages?: Message[]
 * }} ConversationCreateRequest
 *
 * @typedef {{
 * id: string
 * }} ConversationCreateResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
async function conversationCreate(client, request) {
  const response = await client.clientFetch(`/api/v1/conversation/create`, {
    data: request,
  })

  return response
}

/**
 * @typedef {{
 * id: string
 * }} ConversationDeleteResponse
 *
 * @param {import('../client.js').ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
async function conversationDelete(client, conversationId) {
  const response = await client.clientFetch(
    `/api/v1/conversation/${conversationId}/delete`
  )

  return response
}

module.exports = {
  conversationComplete,
  conversationList,
  conversationCreate,
  conversationDelete,
}
