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
 * @param {BlueprintDeleteRequest} [request]
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export async function deleteBlueprint(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/delete`

  /** @type {BlueprintDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintDeleteRequestBody} */
    record: {
      ...request,
    },
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

/**
 * @typedef {{
 *   ensure?: boolean,
 *   resources: Record<string, Array<Record<string, any>>>
 * }} BlueprintImportResourcesRequest
 *
 * @typedef {{
 *   id: string,
 *   resources: Record<string, Array<{ id: string, name?: string, description?: string }>>
 * }} BlueprintImportResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId can be a blueprint id or `@alias` (with `ensure` to create on miss)
 * @param {BlueprintImportResourcesRequest} request
 * @returns {Promise<BlueprintImportResourcesResponse>}
 */
export async function importBlueprintResources(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/resource/import`

  /** @type {BlueprintImportResourcesResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintImportResourcesRequest} */
    record: request,
  })

  return response
}

/**
 * @typedef {{
 *   id?: string,
 *   name?: string,
 *   config?: Record<string, any>,
 *   meta?: Record<string, any>,
 *   resources: Record<string, { type: string, data: Record<string, any> }>
 * }} BlueprintExportResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId can be a blueprint id or `@alias`
 * @returns {Promise<BlueprintExportResourcesResponse>}
 */
export async function exportBlueprintResources(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/resource/export`

  /** @type {BlueprintExportResourcesResponse} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number
 * }} BlueprintBulletinListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprintBulletins']['responses']['200']['content']['application/json']} BlueprintListBulletinsResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprintBulletins']['responses']['200']['content']['application/jsonl']} BlueprintListBulletinsStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintBulletinListRequest} [request]
 * @returns {ResponsePromise<BlueprintListBulletinsResponse,BlueprintListBulletinsStreamType>}
 */
export function listBlueprintBulletins(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/bulletin/list`

  /** @type {ResponsePromise<BlueprintListBulletinsResponse,BlueprintListBulletinsStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createBlueprintBulletin']['requestBody']['content']['application/json']} BlueprintCreateBulletinRequestBody
 *
 * @typedef {BlueprintCreateBulletinRequestBody} BlueprintCreateBulletinRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprintBulletin']['responses']['200']['content']['application/json']} BlueprintCreateBulletinResponseBody
 *
 * @typedef {BlueprintCreateBulletinResponseBody} BlueprintCreateBulletinResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintCreateBulletinRequest} request
 * @returns {Promise<BlueprintCreateBulletinResponse>}
 */
export async function createBlueprintBulletin(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/bulletin/create`

  /** @type {BlueprintCreateBulletinResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BlueprintCreateBulletinRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
