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

/**
 * @typedef {PlatformExampleInstance} PlatformExampleFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} exampleId
 * @returns {ResponsePromise<PlatformExampleFetchResponse,never>}
 */
export function fetchPlatformExample(client, exampleId) {
  const url = `/api/v1/platform/example/${exampleId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchPlatformExample']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   search: string
 * }} PlatformExampleSearchRequest
 *
 * @typedef {{
 *   items: PlatformExampleInstance[]
 * }} PlatformExampleSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleSearchRequest} request
 * @returns {Promise<PlatformExampleSearchResponse>}
 */
export async function searchPlatformExamples(client, request) {
  const url = `/api/v1/platform/example/search`

  /** @type {import('../../types/api/v1.js').operations['searchPlatformExamples']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['searchPlatformExamples']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return /** @type {PlatformExampleSearchResponse} */ (response)
}

/**
 * @typedef {{
 *   resources: Record<string,{id: string, name?: string, description?: string}[]>
 * }} PlatformExampleCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} exampleId
 * @returns {Promise<PlatformExampleCloneResponse>}
 */
export async function clonePlatformExample(client, exampleId) {
  const url = `/api/v1/platform/example/${exampleId}/clone`

  /** @type {import('../../types/api/v1.js').operations['clonePlatformExample']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['clonePlatformExample']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
