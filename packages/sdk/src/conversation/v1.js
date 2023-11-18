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
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & ConversationOptions} ConversationInstance
 *
 * @typedef {'user'|'bot'|'context'|'instruction'|'backstory'} MessageType
 *
 * @typedef {{
 *   type: MessageType,
 *   text: string
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
 * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function conversationList(client, query) {
  let url = `/api/v1/conversation/list`

  /** @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query })

  return response
}

/**
 * @typedef {ConversationInstance} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationFetchResponse>}
 */
export async function conversationFetch(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {ConversationOptions} ConversationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export async function conversationCreate(client, request) {
  const url = `/api/v1/conversation/create`

  /** @type {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {ConversationOptions} ConversationUpdateRequest
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
export async function conversationUpdate(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/update`

  /** @type {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json']} */
    data: request,
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
export async function conversationDelete(client, conversationId) {
  const url = `/api/v1/conversation/${conversationId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteConversation']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}

/**
 * @typedef {{
 *   text?: string,
 *   model?: string,
 *   entities?: Entity[],
 *   parse?: boolean
 * } & ({text: string}|{messages: Message[]})} ConversationCompleteRequest
 *
 * @typedef {{
 *   text: string,
 *   usage: { token: number }
 * }} ConversationCompleteResponse
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationCompleteStreamToken
 *
 * @typedef {{
 *   type: 'result',
 *   data: {
 *     text: string
 *   }
 * usage: { token: number }
 * }} ConversationCompleteStreamResult
 *
 * @typedef {ConversationCompleteStreamToken|ConversationCompleteStreamResult} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string?} conversationId
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function conversationComplete(client, conversationId, request) {
  let url

  if (conversationId) {
    url = `/api/v1/conversation/${conversationId}/complete`
  } else {
    url = `/api/v1/conversation/complete`
  }

  const response = client.clientFetch(url, {
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   text: string,
 *   entities?: Entity[]
 * }} ConversationSendRequest
 *
 * @typedef {{
 *   id: string
 *   entities: Entity[]
 * }} ConversationSendResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendRequest} request
 * @returns {Promise<ConversationSendResponse>}
 */
export async function conversationSend(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/send`

  const response = client.clientFetch(url, {
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   type: string,
 *   text: string
 * }} Action
 *
 * @typedef {{
 *   parse?: boolean
 *   messages?: Message[]
 * }} ConversationReceiveRequest
 *
 * @typedef {{
 *   id: string,
 *   text: string|{stripped: string, original: string, actions: Action[]}
 * }} ConversationReceiveResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveRequest} request
 * @returns {Promise<ConversationReceiveResponse>}
 */
export async function conversationReceive(client, conversationId, request) {
  const url = `/api/v1/conversation/${conversationId}/receive`

  const response = client.clientFetch(url, {
    data: request,
  })

  return response
}
