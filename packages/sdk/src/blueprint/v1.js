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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} BlueprintCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['requestBody']['content']['application/json']} BlueprintCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['responses']['200']['content']['application/json']} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export async function createBlueprint(client, request) {
  const url = `/api/v1/blueprint/create`

  /** @type {BlueprintCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} BlueprintUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['requestBody']['content']['application/json']} BlueprintUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['responses']['200']['content']['application/json']} BlueprintUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintUpdateRequest} request
 * @returns {Promise<BlueprintUpdateResponse>}
 */
export async function updateBlueprint(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/update`

  /** @type {BlueprintUpdateResponse} */
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
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['responses']['200']['content']['application/json']} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export async function deleteBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/delete`

  /** @type {BlueprintDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['requestBody']['content']['application/json']} BlueprintCloneRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['responses']['200']['content']['application/json']} BlueprintCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintCloneResponse>}
 */
export async function cloneBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/clone`

  /** @type {BlueprintCloneResponse} */
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
