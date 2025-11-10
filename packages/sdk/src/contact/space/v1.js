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
 * }} SpaceListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSpaces']['responses']['200']['content']['application/json']} SpaceListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSpaces']['responses']['200']['content']['application/jsonl']} SpaceListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {SpaceListRequest} [request]
 * @returns {ResponsePromise<SpaceListResponse,SpaceListStreamType>}
 */
export function listSpaces(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/space/list`

  /** @type {ResponsePromise<SpaceListResponse,SpaceListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
