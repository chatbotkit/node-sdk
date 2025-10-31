/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {'user'|'bot'|'reasoning'|'context'|'instruction'|'backstory'|'activity'} ConversationMessageType
 *
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationMessageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/json']} ConversationMessageListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/jsonl']} ConversationMessageListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageListRequest} [request]
 * @returns {ResponsePromise<ConversationMessageListResponse,ConversationMessageListStreamType>}
 */
export function listConversationMessages(client, conversationId, request) {
  let url = `/api/v1/conversation/${conversationId}/message/list`

  /** @type {ResponsePromise<ConversationMessageListResponse,ConversationMessageListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {ResponsePromise<ConversationMessageFetchResponse,never>}
 */
export function fetchConversationMessage(client, conversationId, messageId) {
  const url = `/api/v1/conversation/${conversationId}/message/${messageId}/fetch`

  /** @type {ResponsePromise<ConversationMessageFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['requestBody']['content']['application/json']} ConversationMessageCreateRequestBody
 *
 * @typedef {ConversationMessageCreateRequestBody} ConversationMessageCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageCreateResponseBody
 *
 * @typedef {ConversationMessageCreateResponseBody} ConversationMessageCreateResponse
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

  /** @type {ConversationMessageCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationMessageCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpdateRequestBody
 *
 * @typedef {ConversationMessageUpdateRequestBody} ConversationMessageUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpdateResponseBody
 *
 * @typedef {ConversationMessageUpdateResponseBody} ConversationMessageUpdateResponse
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

  /** @type {ConversationMessageUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationMessageUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageDeleteRequestBody
 *
 * @typedef {ConversationMessageDeleteRequestBody} ConversationMessageDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDeleteResponseBody
 *
 * @typedef {ConversationMessageDeleteResponseBody} ConversationMessageDeleteResponse
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

  /** @type {ConversationMessageDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationMessageDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpvoteRequestBody
 *
 * @typedef {ConversationMessageUpvoteRequestBody} ConversationMessageUpvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpvoteResponseBody
 *
 * @typedef {ConversationMessageUpvoteResponseBody} ConversationMessageUpvoteResponse
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

  /** @type {ConversationMessageUpvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationMessageUpvoteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageDownvoteRequestBody
 *
 * @typedef {ConversationMessageDownvoteRequestBody} ConversationMessageDownvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDownvoteResponseBody
 *
 * @typedef {ConversationMessageDownvoteResponseBody} ConversationMessageDownvoteResponse
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

  /** @type {ConversationMessageDownvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationMessageDownvoteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
