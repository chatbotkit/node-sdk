import { ChatBotKitClient } from '../../../client.js'
import { tokenList, tokenCreate, tokenDelete } from './v1.js'

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
   * @returns {ResponsePromise<import('./v1.js').TokenListResponse,import('./v1.js').TokenListStreamType>}
   */
  list(userId, query) {
    return tokenList(this, userId, query)
  }

  /**
   * Creates a new user.
   *
   * @param {string} userId
   * @param {import('./v1.js').TokenCreateRequest} request
   * @returns {Promise<import('./v1.js').TokenCreateResponse>}
   */
  create(userId, request) {
    return tokenCreate(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @param {string} tokenId
   * @returns {Promise<import('./v1.js').TokenDeleteResponse>}
   */
  delete(userId, tokenId) {
    return tokenDelete(this, userId, tokenId)
  }
}

export default TokenClient
