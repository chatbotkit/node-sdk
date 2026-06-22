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
 * }} SpaceSiteListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceSites']['responses']['200']['content']['application/json']} SpaceSiteListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceSites']['responses']['200']['content']['application/jsonl']} SpaceSiteListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceSiteListRequest} [request]
 * @returns {ResponsePromise<SpaceSiteListResponse,SpaceSiteListStreamType>}
 */
export function listSpaceSites(client, spaceId, request) {
  const url = `/api/v1/space/${spaceId}/site/list`

  /** @type {ResponsePromise<SpaceSiteListResponse,SpaceSiteListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @returns {ResponsePromise<SpaceSiteFetchResponse,never>}
 */
export function fetchSpaceSite(client, spaceId, siteId) {
  const url = `/api/v1/space/${spaceId}/site/${siteId}/fetch`

  /** @type {ResponsePromise<SpaceSiteFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createSpaceSite']['requestBody']['content']['application/json']} SpaceSiteCreateRequestBody
 *
 * @typedef {SpaceSiteCreateRequestBody} SpaceSiteCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteCreateResponseBody
 *
 * @typedef {SpaceSiteCreateResponseBody} SpaceSiteCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceSiteCreateRequest} request
 * @returns {Promise<SpaceSiteCreateResponse>}
 */
export async function createSpaceSite(client, spaceId, request) {
  const url = `/api/v1/space/${spaceId}/site/create`

  /** @type {SpaceSiteCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SpaceSiteCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateSpaceSite']['requestBody']['content']['application/json']} SpaceSiteUpdateRequestBody
 *
 * @typedef {SpaceSiteUpdateRequestBody} SpaceSiteUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteUpdateResponseBody
 *
 * @typedef {SpaceSiteUpdateResponseBody} SpaceSiteUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @param {SpaceSiteUpdateRequest} request
 * @returns {Promise<SpaceSiteUpdateResponse>}
 */
export async function updateSpaceSite(client, spaceId, siteId, request) {
  const url = `/api/v1/space/${spaceId}/site/${siteId}/update`

  /** @type {SpaceSiteUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SpaceSiteUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceSite']['requestBody']['content']['application/json']} SpaceSiteDeleteRequestBody
 *
 * @typedef {SpaceSiteDeleteRequestBody} SpaceSiteDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteDeleteResponseBody
 *
 * @typedef {SpaceSiteDeleteResponseBody} SpaceSiteDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @param {SpaceSiteDeleteRequest} [request]
 * @returns {Promise<SpaceSiteDeleteResponse>}
 */
export async function deleteSpaceSite(client, spaceId, siteId, request) {
  const url = `/api/v1/space/${spaceId}/site/${siteId}/delete`

  /** @type {SpaceSiteDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SpaceSiteDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
