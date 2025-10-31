/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactConversations']['responses']['200']['content']['application/json']} ConversationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactConversations']['responses']['200']['content']['application/jsonl']} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/conversation/list`

  /** @type {ResponsePromise<ConversationListResponse,ConversationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
