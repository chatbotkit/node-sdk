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
 *   meta?: Record<string,string>
 * }} UserTokenListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserTokens']['responses']['200']['content']['application/json']} UserTokenListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserTokens']['responses']['200']['content']['application/jsonl']} UserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserTokenListRequest} [request]
 * @returns {ResponsePromise<UserTokenListResponse,UserTokenListStreamType>}
 */
export function listUserTokens(client, userId, request) {
  let url = `/api/v1/user/${userId}/token/list`

  /** @type {ResponsePromise<UserTokenListResponse,UserTokenListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createUserToken']['requestBody']['content']['application/json']} UserTokenCreateRequestBody
 *
 * @typedef {UserTokenCreateRequestBody} UserTokenCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createUserToken']['responses']['200']['content']['application/json']} UserTokenCreateResponseBody
 *
 * @typedef {UserTokenCreateResponseBody} UserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserTokenCreateRequest} request
 * @returns {Promise<UserTokenCreateResponse>}
 */
export async function createUserToken(client, userId, request) {
  const url = `/api/v1/user/${userId}/token/create`

  /** @type {UserTokenCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserTokenCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateUserToken']['requestBody']['content']['application/json']} UserTokenUpdateRequestBody
 *
 * @typedef {UserTokenUpdateRequestBody} UserTokenUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateUserToken']['responses']['200']['content']['application/json']} UserTokenUpdateResponseBody
 *
 * @typedef {UserTokenUpdateResponseBody} UserTokenUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @param {UserTokenUpdateRequest} request
 * @returns {Promise<UserTokenUpdateResponse>}
 */
export async function updateUserToken(client, userId, tokenId, request) {
  const url = `/api/v1/user/${userId}/token/${tokenId}/update`

  /** @type {UserTokenUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserTokenUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteUserToken']['requestBody']['content']['application/json']} UserTokenDeleteRequestBody
 *
 * @typedef {UserTokenDeleteRequestBody} UserTokenDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteUserToken']['responses']['200']['content']['application/json']} UserTokenDeleteResponseBody
 *
 * @typedef {UserTokenDeleteResponseBody} UserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @param {UserTokenDeleteRequest} [request]
 * @returns {Promise<UserTokenDeleteResponse>}
 */
export async function deleteUserToken(client, userId, tokenId, request) {
  const url = `/api/v1/user/${userId}/token/${tokenId}/delete`

  /** @type {UserTokenDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserTokenDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
