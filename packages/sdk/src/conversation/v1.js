/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @typedef {ConversationInstance} ConversationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationInstance
 * }} ConversationListStreamItem
 *
 * @typedef {ConversationListStreamItem} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @returns {import('../client.js').ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function conversationList(client) {
  const url = `/api/v1/conversation/list`

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
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
  const url = `/api/v1/conversation/${conversationId}/delete`

  return client.clientFetch(url, {
    data: {},
  })
}

/**
 * @typedef {{
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
 * @returns {import('../client.js').ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function conversationComplete(client, conversationId, request) {
  let url

  if (conversationId) {
    url = `/api/v1/conversation/${conversationId}/complete`
  } else {
    url = `/api/v1/conversation/complete`
  }

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
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
  const url = `/api/v1/conversation/${conversationId}/receive`

  return client.clientFetch(url, {
    data: request,
  })
}
