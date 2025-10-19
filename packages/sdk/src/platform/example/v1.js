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
 *   id: string,
 *   name?: string,
 *   description?: string,
 *   category?: string,
 *   tags?: string[],
 *   config?: Record<string,any>,
 *   meta?: Record<string,any>
 * }} PlatformExampleOptions
 *
 * @typedef {PlatformExampleOptions & {
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformExampleInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformExampleListRequest
 *
 * @typedef {{items: PlatformExampleInstance[]}} PlatformExampleListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformExampleInstance
 * }} PlatformExampleListStreamItemType
 *
 * @typedef {PlatformExampleListStreamItemType} PlatformExampleListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleListRequest} [request]
 * @returns {ResponsePromise<PlatformExampleListResponse,PlatformExampleListStreamType>}
 */
export function listPlatformExamples(client, request) {
  let url = `/api/v1/platform/example/list`

  /** @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
