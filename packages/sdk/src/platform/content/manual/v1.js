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
 * }} PlatformContentManualListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentManuals']['responses']['200']['content']['application/json']} PlatformContentManualListResponse
 *
 * @typedef {PlatformContentManualListResponse['items'][number]} PlatformContentManualListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentManuals']['responses']['200']['content']['application/jsonl']} PlatformContentManualListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentManualListRequest} [request]
 * @returns {ResponsePromise<PlatformContentManualListResponse,PlatformContentManualListStreamType>}
 */
export function listPlatformContentManuals(client, request) {
  let url = `/api/v1/platform/content/manual/list`

  /** @type {ResponsePromise<PlatformContentManualListResponse,PlatformContentManualListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentManuals']['requestBody']['content']['application/json']} PlatformContentManualSearchRequestBody
 *
 * @typedef {PlatformContentManualSearchRequestBody} PlatformContentManualSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformContentManuals']['responses']['200']['content']['application/json']} PlatformContentManualSearchResponseBody
 *
 * @typedef {PlatformContentManualSearchResponseBody} PlatformContentManualSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentManualSearchRequest} request
 * @returns {Promise<PlatformContentManualSearchResponse>}
 */
export async function searchPlatformContentManuals(client, request) {
  const url = `/api/v1/platform/content/manual/search`

  /** @type {PlatformContentManualSearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformContentManualSearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentManual']['responses']['200']['content']['application/json']} PlatformContentManualFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} manualId
 * @returns {ResponsePromise<PlatformContentManualFetchResponse,never>}
 */
export function fetchPlatformContentManual(client, manualId) {
  const url = `/api/v1/platform/content/manual/${manualId}/fetch`

  /** @type {ResponsePromise<PlatformContentManualFetchResponse,never>} */
  const response = client.clientFetch(url, {
    endpoint: '/api/v1/platform/content/manual/{manualId}/fetch',
  })

  return response
}
