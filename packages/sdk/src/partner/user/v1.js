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
 *   name?: string,
 *   image?: string,
 *   meta?: Record<string,any>
 * }} UserOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & UserOptions} UserInstance
 */

/**
 * @typedef {{items: UserInstance[]}} UserListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: UserInstance
 * }} UserListStreamItem
 *
 * @typedef {UserListStreamItem} UserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} [cursor]
 * @returns {ResponsePromise<UserListResponse,UserListStreamType>}
 */
export function userList(client, cursor) {
  let url = `/api/v1/partner/user/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {UserInstance} UserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<UserFetchResponse>}
 */
export async function userFetch(client, userId) {
  const url = `/api/v1/partner/user/${userId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchPartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {UserOptions} UserCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} UserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {UserCreateRequest} request
 * @returns {Promise<UserCreateResponse>}
 */
export async function userCreate(client, request) {
  const url = `/api/v1/partner/user/create`

  /** @type {import('../../types/api/v1.js').operations['createPartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createPartnerUser']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {UserOptions} UserUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} UserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserUpdateRequest} request
 * @returns {Promise<UserUpdateResponse>}
 */
export async function userUpdate(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/update`

  /** @type {import('../../types/api/v1.js').operations['updatePartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updatePartnerUser']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} UserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<UserDeleteResponse>}
 */
export async function userDelete(client, userId) {
  const url = `/api/v1/partner/user/${userId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deletePartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deletePartnerUser']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
