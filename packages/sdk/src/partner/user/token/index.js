import { ChatBotKitClient } from '../../../client.js'
import {
  listPartnerUserTokens,
  createPartnerUserToken,
  deletePartnerUserToken,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class PartnerUserTokenClient extends ChatBotKitClient {
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
    return listPartnerUserTokens(this, userId, query)
  }

  /**
   * Creates a new user token.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserTokenCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserTokenCreateResponse>}
   */
  create(userId, request) {
    return createPartnerUserToken(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @param {string} tokenId
   * @returns {Promise<import('./v1.js').PartnerUserTokenDeleteResponse>}
   */
  delete(userId, tokenId) {
    return deletePartnerUserToken(this, userId, tokenId)
  }
}

export default PartnerUserTokenClient
