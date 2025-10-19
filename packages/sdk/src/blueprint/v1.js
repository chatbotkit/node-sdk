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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} BlueprintOptions
 *
 * @typedef {BlueprintOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} BlueprintInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} BlueprintListRequest
 *
 * @typedef {{items: BlueprintInstance[]}} BlueprintListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: BlueprintInstance
 * }} BlueprintListStreamItemType
 *
 * @typedef {BlueprintListStreamItemType} BlueprintListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintListRequest} [request]
 * @returns {ResponsePromise<BlueprintListResponse,BlueprintListStreamType>}
 */
export function listBlueprints(client, request) {
  let url = `/api/v1/blueprint/list`

  /** @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {BlueprintInstance & {
 * }} BlueprintFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {ResponsePromise<BlueprintFetchResponse,never>}
 */
export function fetchBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchBlueprint']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {BlueprintOptions & {
 * }} BlueprintCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export async function createBlueprint(client, request) {
  const url = `/api/v1/blueprint/create`

  /** @type {import('../types/api/v1.js').operations['createBlueprint']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createBlueprint']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {BlueprintOptions & {
 * }} BlueprintUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} BlueprintUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintUpdateRequest} request
 * @returns {Promise<BlueprintUpdateResponse>}
 */
export async function updateBlueprint(client, blueprintId, request) {
  const url = `/api/v1/blueprint/${blueprintId}/update`

  /** @type {import('../types/api/v1.js').operations['updateBlueprint']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateBlueprint']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export async function deleteBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteBlueprint']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteBlueprint']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string,
 *   resources: Record<string,any>
 * }} BlueprintCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintCloneResponse>}
 */
export async function cloneBlueprint(client, blueprintId) {
  const url = `/api/v1/blueprint/${blueprintId}/clone`

  /** @type {import('../types/api/v1.js').operations['cloneBlueprint']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['cloneBlueprint']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
