/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @param {string} [cursor]
 * @returns {import('../../client.js').ResponsePromise<MessageListResponse,MessageListStreamType>}
 */
export function messageList(client, conversationId, cursor) {
  let url = `/api/v1/conversation/${conversationId}/message/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
