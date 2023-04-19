/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 * type: 'user'|'bot'|'context'|'instruction'|'backstory',
 * text: string
 * }} Message
 */

/**
 * @typedef {{
 * model?: string,
 * messages: Message[]
 * }} ConversationCompleteRequest
 *
 * @typedef {{
 * text: string,
 * usage: { token: number }
 * }} ConversationCompleteResponse
 *
 * @typedef {{
 * type: 'token',
 * token: string
 * }} ConversationCompleteStreamToken
 * @typedef {{
 * type: 'result',
 * text: string,
 * usage: { token: number }
 * }} ConversationCompleteStreamResult
 * @typedef {ConversationCompleteStreamToken|ConversationCompleteStreamResult} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {import('../client.js').ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function conversationComplete(client, request) {
  return client.clientFetch(`/api/v2/conversation/complete`, {
    data: request,
  })
}

/**
 * @typedef {{
 * type: string,
 * begin: number,
 * end: number,
 * text: string,
 * replacement?: {
 * begin: number,
 * end: number,
 * text: string
 * }
 * }} Entity
 *
 * @typedef {{
 * text: string,
 * entities?: Entity[]
 * }} ConversationSendRequest
 *
 * @typedef {{
 * id: string
 * entities: Entity[]
 * }} ConversationSendResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendRequest} request
 * @returns {Promise<ConversationSendResponse>}
 */
export async function conversationSend(client, conversationId, request) {
  return client.clientFetch(`/api/v2/conversation/${conversationId}/send`, {
    data: request,
  })
}

/**
 * @typedef {{
 * type: string,
 * text: string
 * }} Action
 *
 * @typedef {{
 * parse?: boolean
 * messages?: Message[]
 * }} ConversationReceiveRequest
 *
 * @typedef {{
 * id: string,
 * text: string|{stripped: string, original: string, actions: Action[]}
 * }} ConversationReceiveResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveRequest} request
 * @returns {Promise<ConversationReceiveResponse>}
 */
export async function conversationReceive(client, conversationId, request) {
  return client.clientFetch(`/api/v2/conversation/${conversationId}/receive`, {
    data: request,
  })
}
