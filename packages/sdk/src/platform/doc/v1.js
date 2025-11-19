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
 * }} PlatformDocListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/json']} PlatformDocListResponse
 *
 * @typedef {PlatformDocListResponse['items'][number]} PlatformDocListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/jsonl']} PlatformDocListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformDocListRequest} [request]
 * @returns {ResponsePromise<PlatformDocListResponse,PlatformDocListStreamType>}
 */
export function listPlatformDocs(client, request) {
  let url = `/api/v1/platform/content/doc/list`

  /** @type {ResponsePromise<PlatformDocListResponse,PlatformDocListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformContentDocs']['requestBody']['content']['application/json']} PlatformDocSearchRequestBody
 *
 * @typedef {PlatformDocSearchRequestBody} PlatformDocSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformContentDocs']['responses']['200']['content']['application/json']} PlatformDocSearchResponseBody
 *
 * @typedef {PlatformDocSearchResponseBody} PlatformDocSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformDocSearchRequest} request
 * @returns {Promise<PlatformDocSearchResponse>}
 */
export async function searchPlatformDocs(client, request) {
  const url = `/api/v1/platform/content/doc/search`

  /** @type {PlatformDocSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformDocSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPlatformContentDoc']['responses']['200']['content']['application/json']} PlatformDocFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} docId
 * @returns {ResponsePromise<PlatformDocFetchResponse,never>}
 */
export function fetchPlatformDoc(client, docId) {
  const url = `/api/v1/platform/content/doc/${docId}/fetch`

  /** @type {ResponsePromise<PlatformDocFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/content/doc/{docId}/fetch',
  })

  return response
}
