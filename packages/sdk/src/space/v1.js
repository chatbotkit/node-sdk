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
 * }} SpaceListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSpaces']['responses']['200']['content']['application/json']} SpaceListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSpaces']['responses']['200']['content']['application/jsonl']} SpaceListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SpaceListRequest} [request]
 * @returns {ResponsePromise<SpaceListResponse,SpaceListStreamType>}
 */
export function listSpaces(client, request) {
  let url = `/api/v1/space/list`

  /** @type {ResponsePromise<SpaceListResponse,SpaceListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchSpace']['responses']['200']['content']['application/json']} SpaceFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @returns {ResponsePromise<SpaceFetchResponse,never>}
 */
export function fetchSpace(client, spaceId) {
  const url = `/api/v1/space/${spaceId}/fetch`

  /** @type {ResponsePromise<SpaceFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createSpace']['requestBody']['content']['application/json']} SpaceCreateRequestBody
 *
 * @typedef {SpaceCreateRequestBody} SpaceCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSpace']['responses']['200']['content']['application/json']} SpaceCreateResponseBody
 *
 * @typedef {SpaceCreateResponseBody} SpaceCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SpaceCreateRequest} request
 * @returns {Promise<SpaceCreateResponse>}
 */
export async function createSpace(client, request) {
  const url = `/api/v1/space/create`

  /** @type {SpaceCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SpaceCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateSpace']['requestBody']['content']['application/json']} SpaceUpdateRequestBody
 *
 * @typedef {SpaceUpdateRequestBody} SpaceUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSpace']['responses']['200']['content']['application/json']} SpaceUpdateResponseBody
 *
 * @typedef {SpaceUpdateResponseBody} SpaceUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceUpdateRequest} request
 * @returns {Promise<SpaceUpdateResponse>}
 */
export async function updateSpace(client, spaceId, request) {
  const url = `/api/v1/space/${spaceId}/update`

  /** @type {SpaceUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SpaceUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{}} SpaceDeleteRequest
 *
 * @typedef {{ id: string }} SpaceDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @returns {Promise<SpaceDeleteResponse>}
 */
export async function deleteSpace(client, spaceId) {
  const url = `/api/v1/space/${spaceId}/delete`

  /** @type {SpaceDeleteResponse} */
  const response = await client.clientFetch(url, {
    record: {},
  })

  return response
}
