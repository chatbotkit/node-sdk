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
 * }} BlueprintListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/json']} BlueprintListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/jsonl']} BlueprintListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintListRequest} [request]
 * @returns {ResponsePromise<BlueprintListResponse,BlueprintListStreamType>}
 */
export function listBlueprints(client, request) {
  let url = `/api/v1/blueprint/list`

  /** @type {ResponsePromise<BlueprintListResponse,BlueprintListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchBlueprint']['responses']['200']['content']['application/json']} BlueprintFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {ResponsePromise<BlueprintFetchResponse,never>}
 */
export function fetchBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/fetch`

  /** @type {ResponsePromise<BlueprintFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['requestBody']['content']['application/json']} BlueprintCreateRequestBody
 *
 * @typedef {BlueprintCreateRequestBody} BlueprintCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['responses']['200']['content']['application/json']} BlueprintCreateResponseBody
 *
 * @typedef {BlueprintCreateResponseBody} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export async function createBlueprint(client, request) {
  const url = `/api/v1/blueprint/create`

  /** @type {BlueprintCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['requestBody']['content']['application/json']} BlueprintUpdateRequestBody
 *
 * @typedef {BlueprintUpdateRequestBody} BlueprintUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['responses']['200']['content']['application/json']} BlueprintUpdateResponseBody
 *
 * @typedef {BlueprintUpdateResponseBody} BlueprintUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintUpdateRequest} request
 * @returns {Promise<BlueprintUpdateResponse>}
 */
export async function updateBlueprint(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/update`

  /** @type {BlueprintUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['requestBody']['content']['application/json']} BlueprintDeleteRequestBody
 *
 * @typedef {BlueprintDeleteRequestBody} BlueprintDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['responses']['200']['content']['application/json']} BlueprintDeleteResponseBody
 *
 * @typedef {BlueprintDeleteResponseBody} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export async function deleteBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/delete`

  /** @type {BlueprintDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['requestBody']['content']['application/json']} BlueprintCloneRequestBody
 *
 * @typedef {BlueprintCloneRequestBody} BlueprintCloneRequest
 *
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['responses']['200']['content']['application/json']} BlueprintCloneResponseBody
 *
 * @typedef {BlueprintCloneResponseBody} BlueprintCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintCloneResponse>}
 */
export async function cloneBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/clone`

  /** @type {BlueprintCloneResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintCloneRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['listBlueprintResources']['responses']['200']['content']['application/json']} BlueprintListResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintListResourcesResponse>}
 */
export async function listBlueprintResources(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/resource/list`

  /** @type {BlueprintListResourcesResponse} */
  const response = await client.clientFetch(url)

  return response
}
