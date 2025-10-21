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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string|import('../model/v1.js').Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json']} ConversationCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export async function createConversation(client, request) {
  const url = `/api/v1/conversation/create`

  /** @type {ConversationCreateResponse} */
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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string|import('../model/v1.js').Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json']} ConversationUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} ConversationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpdateRequest} request
 * @returns {Promise<ConversationUpdateResponse>}
 */
export async function updateConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/update`

  /** @type {ConversationUpdateResponse} */
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
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export async function deleteConversation(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/delete`

  /** @type {ConversationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationDeleteRequestBody} */
    record: {},

    endpoint: '/api/v1/conversation/{conversationId}/delete',
  })

  return response
}

/**
 * @typedef {{
 *   botId?: string,
 *   backstory?: string,
 *   model?: import('../model/v1.js').Model,
 *   messages?: Message[],
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   functions?: {name: string, description: string, parameters: any}[]
 * } & ({text: string}|{messages: Message[]})} ConversationCompleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/json']} ConversationCompleteResponse
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
 * @typedef {{
 *   text: string,
 *   entities?: Entity[]
 * }} ConversationCompleteMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/json']} ConversationCompleteMessageResponse
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
 * @typedef {{
 *   text?: string,
 *   entities?: Entity[],
 * }} ConversationSendMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/json']} ConversationSendMessageResponse
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
 * @typedef {{
 * }} ConversationReceiveMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/json']} ConversationReceiveMessageResponse
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
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} ConversationUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['requestBody']['content']['application/json']} ConversationUpvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['responses']['200']['content']['application/json']} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export async function upvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/upvote`

  /** @type {ConversationUpvoteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationUpvoteRequestBody} */
    record: {
      value: 100, // @todo remove once the type is fixed

      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/upvote',
  })

  return response
}

/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} ConversationDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['requestBody']['content']['application/json']} ConversationDownvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['responses']['200']['content']['application/json']} ConversationDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDownvoteRequest} request
 * @returns {Promise<ConversationDownvoteResponse>}
 */
export async function downvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/downvote`

  /** @type {ConversationDownvoteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ConversationDownvoteRequestBody} */
    record: {
      value: -100, // @todo remove once the type is fixed

      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/downvote',
  })

  return response
}
