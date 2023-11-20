import { ChatBotKitClient } from '../../../client.js'
import { listTokens, createToken, deleteToken } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class TokenClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing user tokens associated with this client.
   *
   * @param {string} userId
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').PartnerUserTokenListResponse,import('./v1.js').PartnerUserTokenListStreamType>}
   */
  list(userId, query) {
    return listTokens(this, userId, query)
  }

  /**
   * Creates a new user token.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserTokenCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserTokenCreateResponse>}
   */
  create(userId, request) {
    return createToken(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @param {string} tokenId
   * @returns {Promise<import('./v1.js').PartnerUserTokenDeleteResponse>}
   */
  delete(userId, tokenId) {
    return deleteToken(this, userId, tokenId)
  }
}

export default TokenClient
