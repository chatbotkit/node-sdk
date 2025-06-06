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
 *   email?: string,
 *   meta?: Record<string,any>
 * }} PartnerUserOptions
 *
 * @typedef {PartnerUserOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PartnerUserInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} PartnerUserListRequest
 *
 * @typedef {{items: PartnerUserInstance[]}} PartnerUserListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PartnerUserInstance
 * }} PartnerUserListStreamItem
 *
 * @typedef {PartnerUserListStreamItem} PartnerUserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserListRequest} [request]
 * @returns {ResponsePromise<PartnerUserListResponse,PartnerUserListStreamType>}
 */
export function listPartnerUsers(client, request) {
  let url = `/api/v1/partner/user/list`

  /** @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {PartnerUserInstance & {
 * }} PartnerUserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<PartnerUserFetchResponse,never>}
 */
export function fetchPartnerUser(client, userId) {
  const url = `/api/v1/partner/user/${userId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchPartnerUser']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {PartnerUserOptions & {
 * }} PartnerUserCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} PartnerUserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserCreateRequest} request
 * @returns {Promise<PartnerUserCreateResponse>}
 */
export async function createPartnerUser(client, request) {
  const url = `/api/v1/partner/user/create`

  /** @type {import('../../types/api/v1.js').operations['createPartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createPartnerUser']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {PartnerUserOptions & {
 * }} PartnerUserUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} PartnerUserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserUpdateRequest} request
 * @returns {Promise<PartnerUserUpdateResponse>}
 */
export async function updatePartnerUser(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/update`

  /** @type {import('../../types/api/v1.js').operations['updatePartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updatePartnerUser']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} PartnerUserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<PartnerUserDeleteResponse>}
 */
export async function deletePartnerUser(client, userId) {
  const url = `/api/v1/partner/user/${userId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deletePartnerUser']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deletePartnerUser']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
