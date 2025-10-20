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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} PlatformModelOptions
 *
 * @typedef {PlatformModelOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformModelInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 * }} PlatformModelListRequest
 *
 * @typedef {{items: PlatformModelInstance[]}} PlatformModelListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformModelInstance
 * }} PlatformModelListStreamItemType
 *
 * @typedef {PlatformModelListStreamItemType} PlatformModelListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformModelListRequest} [request]
 * @returns {ResponsePromise<PlatformModelListResponse,PlatformModelListStreamType>}
 */
export function listPlatformModels(client, request) {
  let url = `/api/v1/platform/model/list`

  /** @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
