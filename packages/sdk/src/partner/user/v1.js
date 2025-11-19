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
 *   email?: string
 * }} PartnerUserListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/json']} PartnerUserListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/jsonl']} PartnerUserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserListRequest} [request]
 * @returns {ResponsePromise<PartnerUserListResponse,PartnerUserListStreamType>}
 */
export function listPartnerUsers(client, request) {
  let url = `/api/v1/partner/user/list`

  /** @type {ResponsePromise<PartnerUserListResponse,PartnerUserListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPartnerUser']['responses']['200']['content']['application/json']} PartnerUserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<PartnerUserFetchResponse,never>}
 */
export function fetchPartnerUser(client, userId) {
  const url = `/api/v1/partner/user/${userId}/fetch`

  /** @type {ResponsePromise<PartnerUserFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createPartnerUser']['requestBody']['content']['application/json']} PartnerUserCreateRequestBody
 *
 * @typedef {PartnerUserCreateRequestBody} PartnerUserCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createPartnerUser']['responses']['200']['content']['application/json']} PartnerUserCreateResponseBody
 *
 * @typedef {PartnerUserCreateResponseBody} PartnerUserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserCreateRequest} request
 * @returns {Promise<PartnerUserCreateResponse>}
 */
export async function createPartnerUser(client, request) {
  const url = `/api/v1/partner/user/create`

  /** @type {PartnerUserCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updatePartnerUser']['requestBody']['content']['application/json']} PartnerUserUpdateRequestBody
 *
 * @typedef {PartnerUserUpdateRequestBody} PartnerUserUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updatePartnerUser']['responses']['200']['content']['application/json']} PartnerUserUpdateResponseBody
 *
 * @typedef {PartnerUserUpdateResponseBody} PartnerUserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserUpdateRequest} request
 * @returns {Promise<PartnerUserUpdateResponse>}
 */
export async function updatePartnerUser(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/update`

  /** @type {PartnerUserUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deletePartnerUser']['requestBody']['content']['application/json']} PartnerUserDeleteRequestBody
 *
 * @typedef {PartnerUserDeleteRequestBody} PartnerUserDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deletePartnerUser']['responses']['200']['content']['application/json']} PartnerUserDeleteResponseBody
 *
 * @typedef {PartnerUserDeleteResponseBody} PartnerUserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<PartnerUserDeleteResponse>}
 */
export async function deletePartnerUser(client, userId) {
  const url = `/api/v1/partner/user/${userId}/delete`

  /** @type {PartnerUserDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserDeleteRequestBody} */
    record: {},
  })

  return response
}
