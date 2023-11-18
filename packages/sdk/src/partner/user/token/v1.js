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
 * }} TokenOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & TokenOptions} TokenInstance
 */

/**
 * @typedef {{items: TokenInstance[]}} TokenListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TokenInstance
 * }} TokenListStreamItem
 *
 * @typedef {TokenListStreamItem} TokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
 * @returns {ResponsePromise<TokenListResponse,TokenListStreamType>}
 */
export function tokenList(client, userId, query) {
  let url = `/api/v1/partner/user/${userId}/token/list`

  /** @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query })

  return response
}

/**
 * @typedef {TokenOptions} TokenCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   createdAt: number
 * }} TokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {TokenCreateRequest} request
 * @returns {Promise<TokenCreateResponse>}
 */
export async function tokenCreate(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/token/create`

  /** @type {import('../../../types/api/v1.js').operations['createPartnerUserToken']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../../types/api/v1.js').operations['createPartnerUserToken']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @returns {Promise<TokenDeleteResponse>}
 */
export async function tokenDelete(client, userId, tokenId) {
  const url = `/api/v1/partner/user/${userId}/token/${tokenId}/delete`

  /** @type {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
