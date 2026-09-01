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
 *   meta?: Record<string,string>,
 *   email?: string
 * }} UserListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listUsers']['responses']['200']['content']['application/json']} UserListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listUsers']['responses']['200']['content']['application/jsonl']} UserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {UserListRequest} [request]
 * @returns {ResponsePromise<UserListResponse,UserListStreamType>}
 */
export function listUsers(client, request) {
  let url = `/api/v1/user/list`

  /** @type {ResponsePromise<UserListResponse,UserListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchUser']['responses']['200']['content']['application/json']} UserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<UserFetchResponse,never>}
 */
export function fetchUser(client, userId) {
  const url = `/api/v1/user/${userId}/fetch`

  /** @type {ResponsePromise<UserFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createUser']['requestBody']['content']['application/json']} UserCreateRequestBody
 *
 * @typedef {UserCreateRequestBody} UserCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createUser']['responses']['200']['content']['application/json']} UserCreateResponseBody
 *
 * @typedef {UserCreateResponseBody} UserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {UserCreateRequest} request
 * @returns {Promise<UserCreateResponse>}
 */
export async function createUser(client, request) {
  const url = `/api/v1/user/create`

  /** @type {UserCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateUser']['requestBody']['content']['application/json']} UserUpdateRequestBody
 *
 * @typedef {UserUpdateRequestBody} UserUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateUser']['responses']['200']['content']['application/json']} UserUpdateResponseBody
 *
 * @typedef {UserUpdateResponseBody} UserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserUpdateRequest} request
 * @returns {Promise<UserUpdateResponse>}
 */
export async function updateUser(client, userId, request) {
  const url = `/api/v1/user/${userId}/update`

  /** @type {UserUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteUser']['requestBody']['content']['application/json']} UserDeleteRequestBody
 *
 * @typedef {UserDeleteRequestBody} UserDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteUser']['responses']['200']['content']['application/json']} UserDeleteResponseBody
 *
 * @typedef {UserDeleteResponseBody} UserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserDeleteRequest} [request]
 * @returns {Promise<UserDeleteResponse>}
 */
export async function deleteUser(client, userId, request) {
  const url = `/api/v1/user/${userId}/delete`

  /** @type {UserDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
