/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {import('../../client.js').ResponsePromise<UserListResponse,UserListStreamType>}
 */
export function userList(client, cursor) {
  let url = `/api/v1/partner/user/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
