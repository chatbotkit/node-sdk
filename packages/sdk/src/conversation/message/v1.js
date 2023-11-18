/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {'user'|'bot'|'context'|'instruction'|'backstory'} MessageType
 *
 * @typedef {{
 *   type: MessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} MessageOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & MessageOptions} MessageInstance
 */

/**
 * @typedef {{items: MessageInstance[]}} MessageListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MessageInstance
 * }} MessageListStreamItem
 *
 * @typedef {MessageListStreamItem} MessageListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
 * @returns {ResponsePromise<MessageListResponse,MessageListStreamType>}
 */
export function messageList(client, conversationId, query) {
  let url = `/api/v1/conversation/${conversationId}/message/list`

  /** @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query })

  return response
}

/**
 * @typedef {MessageInstance} MessageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {Promise<MessageFetchResponse>}
 */
export async function messageFetch(client, conversationId, messageId) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {MessageOptions} MessageCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessageCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {MessageCreateRequest} request
 * @returns {Promise<MessageCreateResponse>}
 */
export async function messageCreate(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/message/create`

  /** @type {import('../../types/api/v1.js').operations['createConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createConversationMessage']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {MessageOptions} MessageUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessageUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {MessageUpdateRequest} request
 * @returns {Promise<MessageUpdateResponse>}
 */
export async function messageUpdate(
  client,
  conversationId,
  messageId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateConversationMessage']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} MessageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {Promise<MessageDeleteResponse>}
 */
export async function messageDelete(client, conversationId, messageId) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteConversationMessage']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
