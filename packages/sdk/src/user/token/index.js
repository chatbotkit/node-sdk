import { ChatBotKitClient } from '../../client.js'
import {
  createUserToken,
  deleteUserToken,
  listUserTokens,
  updateUserToken,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * User token client.
 */
export class UserTokenClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all user tokens.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserTokenListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').UserTokenListResponse,import('./v1.js').UserTokenListStreamType>}
   */
  list(userId, request) {
    return listUserTokens(this, userId, request)
  }

  /**
   * Creates a new user token.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserTokenCreateRequest} request
   * @returns {Promise<import('./v1.js').UserTokenCreateResponse>}
   */
  create(userId, request) {
    return createUserToken(this, userId, request)
  }

  /**
   * Updates the user token.
   *
   * @param {string} userId
   * @param {string} tokenId
   * @param {import('./v1.js').UserTokenUpdateRequest} request
   * @returns {Promise<import('./v1.js').UserTokenUpdateResponse>}
   */
  update(userId, tokenId, request) {
    return updateUserToken(this, userId, tokenId, request)
  }

  /**
   * Deletes the user token.
   *
   * @param {string} userId
   * @param {string} tokenId
   * @returns {Promise<import('./v1.js').UserTokenDeleteResponse>}
   */
  delete(userId, tokenId) {
    return deleteUserToken(this, userId, tokenId)
  }
}

export default UserTokenClient
