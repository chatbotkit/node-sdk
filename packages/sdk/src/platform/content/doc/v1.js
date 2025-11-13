/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformContentDocListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/json']} PlatformContentDocListResponse
 *
 * @typedef {PlatformContentDocListResponse['items'][number]} PlatformContentDocListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/jsonl']} PlatformContentDocListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentDocListRequest} [request]
 * @returns {ResponsePromise<PlatformContentDocListResponse,PlatformContentDocListStreamType>}
 */
export function listPlatformContentDocs(client, request) {
  let url = `/api/v1/platform/content/doc/list`

  /** @type {ResponsePromise<PlatformContentDocListResponse,PlatformContentDocListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentDocs']['requestBody']['content']['application/json']} PlatformContentDocSearchRequestBody
 *
 * @typedef {PlatformContentDocSearchRequestBody} PlatformContentDocSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentDocs']['responses']['200']['content']['application/json']} PlatformContentDocSearchResponseBody
 *
 * @typedef {PlatformContentDocSearchResponseBody} PlatformContentDocSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentDocSearchRequest} request
 * @returns {Promise<PlatformContentDocSearchResponse>}
 */
export async function searchPlatformContentDocs(client, request) {
  const url = `/api/v1/platform/content/doc/search`

  /** @type {PlatformContentDocSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformContentDocSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentDoc']['responses']['200']['content']['application/json']} PlatformContentDocFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} docId
 * @returns {ResponsePromise<PlatformContentDocFetchResponse,never>}
 */
export function fetchPlatformContentDoc(client, docId) {
  const url = `/api/v1/platform/content/doc/${docId}/fetch`

  /** @type {ResponsePromise<PlatformContentDocFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/content/doc/{docId}/fetch',
  })

  return response
}
