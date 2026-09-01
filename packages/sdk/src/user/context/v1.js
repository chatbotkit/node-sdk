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
 *   meta?: Record<string,string>,
 *   blueprintId?: string,
 *   botId?: string,
 *   datasetId?: string,
 *   skillsetId?: string
 * }} UserContextListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserContexts']['responses']['200']['content']['application/json']} UserContextListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserContexts']['responses']['200']['content']['application/jsonl']} UserContextListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserContextListRequest} [request]
 * @returns {ResponsePromise<UserContextListResponse,UserContextListStreamType>}
 */
export function listUserContexts(client, userId, request) {
  const url = `/api/v1/user/${userId}/context/list`

  /** @type {ResponsePromise<UserContextListResponse,UserContextListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchUserContext']['responses']['200']['content']['application/json']} UserContextFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @returns {ResponsePromise<UserContextFetchResponse,never>}
 */
export function fetchUserContext(client, userId, contextId) {
  const url = `/api/v1/user/${userId}/context/${contextId}/fetch`

  /** @type {ResponsePromise<UserContextFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createUserContext']['requestBody']['content']['application/json']} UserContextCreateRequestBody
 *
 * @typedef {UserContextCreateRequestBody} UserContextCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createUserContext']['responses']['200']['content']['application/json']} UserContextCreateResponseBody
 *
 * @typedef {UserContextCreateResponseBody} UserContextCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserContextCreateRequest} request
 * @returns {Promise<UserContextCreateResponse>}
 */
export async function createUserContext(client, userId, request) {
  const url = `/api/v1/user/${userId}/context/create`

  /** @type {UserContextCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserContextCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateUserContext']['requestBody']['content']['application/json']} UserContextUpdateRequestBody
 *
 * @typedef {UserContextUpdateRequestBody} UserContextUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateUserContext']['responses']['200']['content']['application/json']} UserContextUpdateResponseBody
 *
 * @typedef {UserContextUpdateResponseBody} UserContextUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {UserContextUpdateRequest} request
 * @returns {Promise<UserContextUpdateResponse>}
 */
export async function updateUserContext(
  client,
  userId,
  contextId,
  request
) {
  const url = `/api/v1/user/${userId}/context/${contextId}/update`

  /** @type {UserContextUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserContextUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteUserContext']['requestBody']['content']['application/json']} UserContextDeleteRequestBody
 *
 * @typedef {UserContextDeleteRequestBody} UserContextDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteUserContext']['responses']['200']['content']['application/json']} UserContextDeleteResponseBody
 *
 * @typedef {UserContextDeleteResponseBody} UserContextDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {UserContextDeleteRequest} [request]
 * @returns {Promise<UserContextDeleteResponse>}
 */
export async function deleteUserContext(
  client,
  userId,
  contextId,
  request
) {
  const url = `/api/v1/user/${userId}/context/${contextId}/delete`

  /** @type {UserContextDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserContextDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
