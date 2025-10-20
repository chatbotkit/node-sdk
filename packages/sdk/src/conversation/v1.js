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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationOptions
 *
 * @typedef {ConversationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationInstance
 *
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
 * @typedef {{items: ConversationInstance[]}} ConversationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationInstance
 * }} ConversationListStreamItem
 *
 * @typedef {ConversationListStreamItem} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client, request) {
  let url = `/api/v1/conversation/list`

  /** @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {ConversationInstance & {
 * }} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {ResponsePromise<ConversationFetchResponse,never>}
 */
export function fetchConversation(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchConversation']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/conversation/{conversationId}/fetch',
  })

  return response
}

/**
 * @typedef {ConversationOptions & {
 *   model?: import('../model/v1.js').Model
 * }} ConversationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export async function createConversation(client, request) {
  const url = `/api/v1/conversation/create`

  /** @type {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {ConversationOptions & {
 *   model?: import('../model/v1.js').Model
 * }} ConversationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpdateRequest} request
 * @returns {Promise<ConversationUpdateResponse>}
 */
export async function updateConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/update`

  /** @type {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },

    endpoint: '/api/v1/conversation/{conversationId}/update',
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export async function deleteConversation(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteConversation']['requestBody']['content']['application/json']} */
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
 * @typedef {{
 *   text: string,
 *   usage: { token: number }
 * }} ConversationCompleteResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationCompleteResponse
 * }} ConversationCompleteStreamResult
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationCompleteStreamToken
 *
 * @typedef {{
 *   type: 'message',
 *   data: Message
 * }} ConversationCompleteMessage
 *
 * @typedef {ConversationCompleteStreamResult|ConversationCompleteStreamToken|ConversationCompleteMessage} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function completeConversation(client, request) {
  let url = `/api/v1/conversation/complete`

  /** @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
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
 * @typedef {{
 *   id: string,
 *   text: string,
 *   usage: { token: number }
 * }} ConversationCompleteMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationCompleteMessageResponse
 * }} ConversationCompleteMessageStreamResult
 *
 *  @typedef {{
 *   type: 'message',
 *   data: Message
 * }} ConversationCompleteMessageStreamMessage
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationCompleteMessageStreamToken
 *
 * @typedef {ConversationCompleteMessageStreamResult|ConversationCompleteMessageStreamMessage|ConversationCompleteMessageStreamToken} ConversationCompleteMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationCompleteMessageRequest} request
 * @returns {ResponsePromise<ConversationCompleteMessageResponse,ConversationCompleteMessageStreamType>}
 */
export function completeConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/complete`

  /** @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
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
 * @typedef {{
 *   id: string
 *   entities: Entity[]
 * }} ConversationSendMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationSendMessageResponse
 * }} ConversationSendMessageStreamResult
 *
 * @typedef {ConversationSendMessageStreamResult} ConversationSendMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendMessageRequest} request
 * @returns {ResponsePromise<ConversationSendMessageResponse,ConversationSendMessageStreamType>}
 */
export function sendConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/send`

  /** @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
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
 * @typedef {{
 *   id: string,
 *   text: string,
 *   usage: { token: number }
 * }} ConversationReceiveMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationReceiveMessageResponse
 * }} ConversationReceiveMessageStreamResult
 *
 * @typedef {{
 *   type: 'message',
 *   data: Message,
 * }} ConversationReceiveMessageStreamMessage
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationReceiveMessageStreamToken
 *
 * @typedef {ConversationReceiveMessageStreamResult|ConversationReceiveMessageStreamMessage|ConversationReceiveMessageStreamToken} ConversationReceiveMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveMessageRequest} request
 * @returns {ResponsePromise<ConversationReceiveMessageResponse,ConversationReceiveMessageStreamType>}
 */
export function receiveConversationMessage(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/receive`

  /** @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
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
 * @typedef {{
 *   id: string
 * }} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export async function upvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/upvote`

  /** @type {import('../types/api/v1.js').operations['upvoteConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['upvoteConversation']['requestBody']['content']['application/json']} */
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
 * @typedef {{
 *   id: string
 * }} ConversationDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDownvoteRequest} request
 * @returns {Promise<ConversationDownvoteResponse>}
 */
export async function downvoteConversation(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/downvote`

  /** @type {import('../types/api/v1.js').operations['downvoteConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['downvoteConversation']['requestBody']['content']['application/json']} */
    record: {
      value: -100, // @todo remove once the type is fixed

      ...request,
    },

    endpoint: '/api/v1/conversation/{conversationId}/downvote',
  })

  return response
}
