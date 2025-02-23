/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {'user'|'bot'|'context'|'instruction'|'backstory'|'activity'} ConversationMessageType
 *
 * @typedef {{
 *   type: ConversationMessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} ConversationMessageOptions
 *
 * @typedef {ConversationMessageOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationMessageInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} ConversationMessageListRequest
 *
 * @typedef {{items: ConversationMessageInstance[]}} ConversationMessageListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationMessageInstance
 * }} ConversationMessageListStreamItem
 *
 * @typedef {ConversationMessageListStreamItem} ConversationMessageListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageListRequest} [request]
 * @returns {ResponsePromise<ConversationMessageListResponse,ConversationMessageListStreamType>}
 */
export function listConversationMessages(client, conversationId, request) {
  let url = `/api/v1/conversation/${conversationId}/message/list`

  /** @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {ConversationMessageInstance & {
 * }} ConversationMessageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {ResponsePromise<ConversationMessageFetchResponse,never>}
 */
export function fetchConversationMessage(client, conversationId, messageId) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchConversationMessage']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {ConversationMessageOptions & {
 * }} ConversationMessageCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageCreateRequest} request
 * @returns {Promise<ConversationMessageCreateResponse>}
 */
export async function createConversationMessage(
  client,
  conversationId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/message/create`

  /** @type {import('../../types/api/v1.js').operations['createConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createConversationMessage']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {ConversationMessageOptions & {
 * }} ConversationMessageUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpdateRequest} request
 * @returns {Promise<ConversationMessageUpdateResponse>}
 */
export async function updateConversationMessage(
  client,
  conversationId,
  messageId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateConversationMessage']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} ConversationMessageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {Promise<ConversationMessageDeleteResponse>}
 */
export async function deleteConversationMessage(
  client,
  conversationId,
  messageId
) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteConversationMessage']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   value?: number
 * }} ConversationMessageUpvoteRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpvoteRequest} request
 * @returns {Promise<ConversationMessageUpvoteResponse>}
 */
export async function upvoteConversationMessage(
  client,
  conversationId,
  messageId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/upvote`

  /** @type {import('../../types/api/v1.js').operations['upvoteConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['upvoteConversationMessage']['requestBody']['content']['application/json']} */
    record: {
      value: 100, // @todo remove once the type is fixed

      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   value?: number
 * }} ConversationMessageDownvoteRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageDownvoteRequest} request
 * @returns {Promise<ConversationMessageDownvoteResponse>}
 */
export async function downvoteConversationMessage(
  client,
  conversationId,
  messageId,
  request
) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/downvote`

  /** @type {import('../../types/api/v1.js').operations['downvoteConversationMessage']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['downvoteConversationMessage']['requestBody']['content']['application/json']} */
    record: {
      value: -100, // @todo remove once the type is fixed

      ...request,
    },
  })

  return response
}
