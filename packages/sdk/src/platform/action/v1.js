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
 * }} PlatformActionListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformActions']['responses']['200']['content']['application/json']} PlatformActionListResponse
 *
 * @typedef {PlatformActionListResponse['items'][number]} PlatformActionListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformActions']['responses']['200']['content']['application/jsonl']} PlatformActionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformActionListRequest} [request]
 * @returns {ResponsePromise<PlatformActionListResponse,PlatformActionListStreamType>}
 */
export function listPlatformActions(client, request) {
  let url = `/api/v1/platform/action/list`

  /** @type {ResponsePromise<PlatformActionListResponse,PlatformActionListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
