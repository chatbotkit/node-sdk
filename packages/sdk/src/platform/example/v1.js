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
 * }} PlatformExampleListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/json']} PlatformExampleListResponse
 *
 * @typedef {PlatformExampleListResponse['items'][number]} PlatformExampleListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformExamples']['responses']['200']['content']['application/jsonl']} PlatformExampleListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleListRequest} [request]
 * @returns {ResponsePromise<PlatformExampleListResponse,PlatformExampleListStreamType>}
 */
export function listPlatformExamples(client, request) {
  let url = `/api/v1/platform/example/list`

  /** @type {ResponsePromise<PlatformExampleListResponse,PlatformExampleListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformExamples']['requestBody']['content']['application/json']} PlatformExampleSearchRequestBody
 *
 * @typedef {PlatformExampleSearchRequestBody} PlatformExampleSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformExamples']['responses']['200']['content']['application/json']} PlatformExampleSearchResponseBody
 *
 * @typedef {PlatformExampleSearchResponseBody} PlatformExampleSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleSearchRequest} request
 * @returns {Promise<PlatformExampleSearchResponse>}
 */
export async function searchPlatformExamples(client, request) {
  const url = `/api/v1/platform/example/search`

  /** @type {PlatformExampleSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformExampleSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['clonePlatformExample']['requestBody']['content']['application/json']} PlatformExampleCloneRequestBody
 *
 * @typedef {PlatformExampleCloneRequestBody} PlatformExampleCloneRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['clonePlatformExample']['responses']['200']['content']['application/json']} PlatformExampleCloneResponseBody
 *
 * @typedef {PlatformExampleCloneResponseBody} PlatformExampleCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} exampleId
 * @returns {Promise<PlatformExampleCloneResponse>}
 */
export async function clonePlatformExample(client, exampleId) {
  const url = `/api/v1/platform/example/${exampleId}/clone`

  /** @type {PlatformExampleCloneResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformExampleCloneRequestBody} */
    record: {},
  })

  return response
}
