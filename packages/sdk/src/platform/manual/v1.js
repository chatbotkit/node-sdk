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
 * }} PlatformManualListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformManuals']['responses']['200']['content']['application/json']} PlatformManualListResponse
 *
 * @typedef {PlatformManualListResponse['items'][number]} PlatformManualListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformManuals']['responses']['200']['content']['application/jsonl']} PlatformManualListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformManualListRequest} [request]
 * @returns {ResponsePromise<PlatformManualListResponse,PlatformManualListStreamType>}
 */
export function listPlatformManuals(client, request) {
  let url = `/api/v1/platform/manual/list`

  /** @type {ResponsePromise<PlatformManualListResponse,PlatformManualListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformManuals']['requestBody']['content']['application/json']} PlatformManualSearchRequestBody
 *
 * @typedef {PlatformManualSearchRequestBody} PlatformManualSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformManuals']['responses']['200']['content']['application/json']} PlatformManualSearchResponseBody
 *
 * @typedef {PlatformManualSearchResponseBody} PlatformManualSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformManualSearchRequest} request
 * @returns {Promise<PlatformManualSearchResponse>}
 */
export async function searchPlatformManuals(client, request) {
  const url = `/api/v1/platform/manual/search`

  /** @type {PlatformManualSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformManualSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPlatformManual']['responses']['200']['content']['application/json']} PlatformManualFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} manualId
 * @returns {ResponsePromise<PlatformManualFetchResponse,never>}
 */
export function fetchPlatformManual(client, manualId) {
  const url = `/api/v1/platform/manual/${manualId}/fetch`

  /** @type {ResponsePromise<PlatformManualFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/manual/{manualId}/fetch',
  })

  return response
}
