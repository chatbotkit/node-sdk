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
 * }} PartnerUserTokenOptions
 *
 * @typedef {PartnerUserTokenOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PartnerUserTokenInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} PartnerUserTokenListRequest
 *
 * @typedef {{items: PartnerUserTokenInstance[]}} PartnerUserTokenListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PartnerUserTokenInstance
 * }} PartnerUserTokenListStreamItem
 *
 * @typedef {PartnerUserTokenListStreamItem} PartnerUserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenListRequest} [request]
 * @returns {ResponsePromise<PartnerUserTokenListResponse,PartnerUserTokenListStreamType>}
 */
export function listPartnerUserTokens(client, userId, request) {
  let url = `/api/v1/partner/user/${userId}/token/list`

  /** @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {PartnerUserTokenOptions & {
 * }} PartnerUserTokenCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   createdAt: number
 * }} PartnerUserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenCreateRequest} request
 * @returns {Promise<PartnerUserTokenCreateResponse>}
 */
export async function createPartnerUserToken(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/token/create`

  /** @type {import('../../../types/api/v1.js').operations['createPartnerUserToken']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../../types/api/v1.js').operations['createPartnerUserToken']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} PartnerUserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @returns {Promise<PartnerUserTokenDeleteResponse>}
 */
export async function deletePartnerUserToken(client, userId, tokenId) {
  const url = `/api/v1/partner/user/${userId}/token/${tokenId}/delete`

  /** @type {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
