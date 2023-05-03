/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   type: 'user'|'bot'|'context'|'instruction'|'backstory',
 *   text: string
 * }} Message
 */

/**
 * @typedef {{
 *   id: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: {
 *     id: string,
 *     backstory?: string,
 *     model?: string,
 *     datasetId?: string,
 *     skillsetId?: string,
 *     meta?: Record<string,any>
 *     createdAt: number,
 *     updatedAt: number
 *   }
 * }} ConversationListStreamConversation
 *
 * @typedef {ConversationListStreamConversation} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @returns {import('../client.js').ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function conversationList(client) {
  return client.clientFetch(`/api/v1/conversation/list`)
}

/**
 * @typedef {{
 *   id: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationFetchResponse>}
 */
export async function conversationFetch(client, conversationId) {
  return client.clientFetch(`/api/v1/conversation/${conversationId}/fetch`)
}

/**
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   messages?: Message[]
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
export async function conversationCreate(client, request) {
  return client.clientFetch(`/api/v1/conversation/create`, {
    data: request,
  })
}

/**
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
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
export async function conversationUpdate(client, conversationId, request) {
  return client.clientFetch(`/api/v1/conversation/${conversationId}/update`, {
    data: request,
  })
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
  return client.clientFetch(`/api/v1/conversation/${conversationId}/delete`, {
    data: {},
  })
}

/**
 * @typedef {{
 *   model?: string,
 *   messages: Message[]
 * }} ConversationCompleteRequest
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
 * @param {ConversationCompleteRequest} request
 * @returns {import('../client.js').ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function conversationComplete(client, request) {
  return client.clientFetch(`/api/v1/conversation/complete`, {
    data: request,
  })
}

/**
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
 *
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
  return client.clientFetch(`/api/v1/conversation/${conversationId}/send`, {
    data: request,
  })
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
  return client.clientFetch(`/api/v1/conversation/${conversationId}/receive`, {
    data: request,
  })
}
