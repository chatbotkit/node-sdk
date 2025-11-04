/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PortalListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listPortals']['responses']['200']['content']['application/json']} PortalListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listPortals']['responses']['200']['content']['application/jsonl']} PortalListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PortalListRequest} [request]
 * @returns {ResponsePromise<PortalListResponse,PortalListStreamType>}
 */
export function listPortals(client, request) {
  let url = `/api/v1/portal/list`

  /** @type {ResponsePromise<PortalListResponse,PortalListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchPortal']['responses']['200']['content']['application/json']} PortalFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @returns {ResponsePromise<PortalFetchResponse,never>}
 */
export function fetchPortal(client, portalId) {
  const url = `/api/v1/portal/${portalId}/fetch`

  /** @type {ResponsePromise<PortalFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createPortal']['requestBody']['content']['application/json']} PortalCreateRequestBody
 *
 * @typedef {PortalCreateRequestBody} PortalCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createPortal']['responses']['200']['content']['application/json']} PortalCreateResponseBody
 *
 * @typedef {PortalCreateResponseBody} PortalCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PortalCreateRequest} request
 * @returns {Promise<PortalCreateResponse>}
 */
export async function createPortal(client, request) {
  const url = `/api/v1/portal/create`

  /** @type {PortalCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PortalCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updatePortal']['requestBody']['content']['application/json']} PortalUpdateRequestBody
 *
 * @typedef {PortalUpdateRequestBody} PortalUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updatePortal']['responses']['200']['content']['application/json']} PortalUpdateResponseBody
 *
 * @typedef {PortalUpdateResponseBody} PortalUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @param {PortalUpdateRequest} request
 * @returns {Promise<PortalUpdateResponse>}
 */
export async function updatePortal(client, portalId, request) {
  const url = `/api/v1/portal/${portalId}/update`

  /** @type {PortalUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PortalUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deletePortal']['requestBody']['content']['application/json']} PortalDeleteRequestBody
 *
 * @typedef {PortalDeleteRequestBody} PortalDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deletePortal']['responses']['200']['content']['application/json']} PortalDeleteResponseBody
 *
 * @typedef {PortalDeleteResponseBody} PortalDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @returns {Promise<PortalDeleteResponse>}
 */
export async function deletePortal(client, portalId) {
  const url = `/api/v1/portal/${portalId}/delete`

  /** @type {PortalDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PortalDeleteRequestBody} */
    record: {},
  })

  return response
}
