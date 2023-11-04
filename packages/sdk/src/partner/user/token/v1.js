/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @param {string} [cursor]
 * @returns {import('../../../client.js').ResponsePromise<TokenListResponse,TokenListStreamType>}
 */
export function tokenList(client, userId, cursor) {
  let url = `/api/v1/partner/user/${userId}/token/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
