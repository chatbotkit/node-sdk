import { buildModelString } from '../model/v1.js'

/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {'user'|'bot'|'reasoning'|'context'|'instruction'|'backstory'|'activity'} MessageType
 *
 * @typedef {{
 *   type: MessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} Message
 *
 * @typedef {{
 *   type: string,
 *   begin: number,
 *   end: number,
 *   text: string,
 *   replacement?: {
 *     begin: number,
 *     end: number,
 *     text: string
 *   }
 * }} Entity
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/json']} ConversationListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/jsonl']} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client, request) {
  let url = `/api/v1/conversation/list`

  /** @type {ResponsePromise<ConversationListResponse,ConversationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchConversation']['responses']['200']['content']['application/json']} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {ResponsePromise<ConversationFetchResponse,never>}
 */
export function fetchConversation(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/fetch`

  /** @type {ResponsePromise<ConversationFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/conversation/{conversationId}/fetch',
  })

  return response
}

/**
 * @typedef {Omit<import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json'],'model'> & {
 *   model?: string|import('../model/v1.js').Model,
 * }} ConversationCreateRequestBody
 *
 * @typedef {ConversationCreateRequestBody} ConversationCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} ConversationCreateResponseBody
 *
 * @typedef {ConversationCreateResponseBody} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export async function createConversation(client, request) {
  const url = `/api/v1/conversation/create`

  /** @type {ConversationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationCreateRequestBody} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {Omit<import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json'],'model'> & {
 *   model?: string|import('../model/v1.js').Model,
 * }} ConversationUpdateRequestBody
 *
 * @typedef {ConversationUpdateRequestBody} ConversationUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} ConversationUpdateResponseBody
 *
 * @typedef {ConversationUpdateResponseBody} ConversationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpdateRequest} request
 * @returns {Promise<ConversationUpdateResponse>}
 */
export async function updateConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/update`

  /** @type {ConversationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationUpdateRequestBody} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },

    endpoint: '/api/v1/conversation/{conversationId}/update',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['requestBody']['content']['application/json']} ConversationDeleteRequestBody
 *
 * @typedef {ConversationDeleteRequestBody} ConversationDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} ConversationDeleteResponseBody
 *
 * @typedef {ConversationDeleteResponseBody} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export async function deleteConversation(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/delete`

  /** @type {ConversationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationDeleteRequestBody} */
    record: {},

    endpoint: '/api/v1/conversation/{conversationId}/delete',
  })

  return response
}

/**
 * @typedef {Omit<import('../types/api/v1.js').operations['completeConversation']['requestBody']['content']['application/json'],'model'> & {
 *   model?: string|import('../model/v1.js').Model,
 * }} ConversationCompleteRequestBody
 *
 * @typedef {ConversationCompleteRequestBody} ConversationCompleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/json']} ConversationCompleteResponseBody
 *
 * @typedef {ConversationCompleteResponseBody} ConversationCompleteResponse
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/jsonl']} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function completeConversation(client, request) {
  let url = `/api/v1/conversation/complete`

  /** @type {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>} */
  const response = client.clientFetch(url, {
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['requestBody']['content']['application/json']} ConversationCompleteMessageRequestBody
 *
 * @typedef {ConversationCompleteMessageRequestBody} ConversationCompleteMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/json']} ConversationCompleteMessageResponseBody
 *
 * @typedef {ConversationCompleteMessageResponseBody} ConversationCompleteMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationCompleteMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationCompleteMessageRequest} request
 * @returns {ResponsePromise<ConversationCompleteMessageResponse,ConversationCompleteMessageStreamType>}
 */
export function completeConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/complete`

  /** @type {ResponsePromise<ConversationCompleteMessageResponse,ConversationCompleteMessageStreamType>} */
  const response = client.clientFetch(url, {
    record: {
      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/complete',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['requestBody']['content']['application/json']} ConversationSendMessageRequestBody
 *
 * @typedef {ConversationSendMessageRequestBody} ConversationSendMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/json']} ConversationSendMessageResponseBody
 *
 * @typedef {ConversationSendMessageResponseBody} ConversationSendMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationSendMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendMessageRequest} request
 * @returns {ResponsePromise<ConversationSendMessageResponse,ConversationSendMessageStreamType>}
 */
export function sendConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/send`

  /** @type {ResponsePromise<ConversationSendMessageResponse,ConversationSendMessageStreamType>} */
  const response = client.clientFetch(url, {
    record: {
      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/send',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['requestBody']['content']['application/json']} ConversationReceiveMessageRequestBody
 *
 * @typedef {ConversationReceiveMessageRequestBody} ConversationReceiveMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/json']} ConversationReceiveMessageResponseBody
 *
 * @typedef {ConversationReceiveMessageResponseBody} ConversationReceiveMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationReceiveMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveMessageRequest} request
 * @returns {ResponsePromise<ConversationReceiveMessageResponse,ConversationReceiveMessageStreamType>}
 */
export function receiveConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/receive`

  /** @type {ResponsePromise<ConversationReceiveMessageResponse,ConversationReceiveMessageStreamType>} */
  const response = client.clientFetch(url, {
    record: {
      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/receive',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['requestBody']['content']['application/json']} ConversationUpvoteRequestBody
 *
 * @typedef {ConversationUpvoteRequestBody} ConversationUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['responses']['200']['content']['application/json']} ConversationUpvoteResponseBody
 *
 * @typedef {ConversationUpvoteResponseBody} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export async function upvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/upvote`

  /** @type {ConversationUpvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationUpvoteRequestBody} */
    record: {
      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/upvote',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['requestBody']['content']['application/json']} ConversationDownvoteRequestBody
 *
 * @typedef {ConversationDownvoteRequestBody} ConversationDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['responses']['200']['content']['application/json']} ConversationDownvoteResponseBody
 *
 * @typedef {ConversationDownvoteResponseBody} ConversationDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDownvoteRequest} request
 * @returns {Promise<ConversationDownvoteResponse>}
 */
export async function downvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/downvote`

  /** @type {ConversationDownvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationDownvoteRequestBody} */
    record: {
      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/downvote',
  })

  return response
}
