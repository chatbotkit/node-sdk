/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PartnerUserTokenListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/json']} PartnerUserTokenListResponse
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/jsonl']} PartnerUserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenListRequest} [request]
 * @returns {ResponsePromise<PartnerUserTokenListResponse,PartnerUserTokenListStreamType>}
 */
export function listPartnerUserTokens(client, userId, request) {
  let url = `/api/v1/partner/user/${userId}/token/list`

  /** @type {ResponsePromise<PartnerUserTokenListResponse,PartnerUserTokenListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserToken']['requestBody']['content']['application/json']} PartnerUserTokenCreateRequestBody
 *
 * @typedef {PartnerUserTokenCreateRequestBody} PartnerUserTokenCreateRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserToken']['responses']['200']['content']['application/json']} PartnerUserTokenCreateResponseBody
 *
 * @typedef {PartnerUserTokenCreateResponseBody} PartnerUserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenCreateRequest} request
 * @returns {Promise<PartnerUserTokenCreateResponse>}
 */
export async function createPartnerUserToken(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/token/create`

  /** @type {PartnerUserTokenCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserTokenCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['requestBody']['content']['application/json']} PartnerUserTokenDeleteRequestBody
 *
 * @typedef {PartnerUserTokenDeleteRequestBody} PartnerUserTokenDeleteRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['responses']['200']['content']['application/json']} PartnerUserTokenDeleteResponseBody
 *
 * @typedef {PartnerUserTokenDeleteResponseBody} PartnerUserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @returns {Promise<PartnerUserTokenDeleteResponse>}
 */
export async function deletePartnerUserToken(client, userId, tokenId) {
  const url = `/api/v1/partner/user/${userId}/token/${tokenId}/delete`

  /** @type {PartnerUserTokenDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserTokenDeleteRequestBody} */
    record: {},
  })

  return response
}
