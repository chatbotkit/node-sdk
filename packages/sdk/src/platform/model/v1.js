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
 * }} PlatformModelListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/json']} PlatformModelListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/jsonl']} PlatformModelListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformModelListRequest} [request]
 * @returns {ResponsePromise<PlatformModelListResponse,PlatformModelListStreamType>}
 */
export function listPlatformModels(client, request) {
  let url = `/api/v1/platform/model/list`

  /** @type {ResponsePromise<PlatformModelListResponse,PlatformModelListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
