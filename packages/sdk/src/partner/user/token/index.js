import { ChatBotKitClient } from '../../../client.js'
import { tokenList, tokenCreate, tokenDelete } from './v1.js'

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
   * @param {string} [cursor]
   * @returns {import('../../../client.js').ResponsePromise<import('./v1.js').TokenListResponse,import('./v1.js').TokenListStreamType>}
   */
  list(userId, cursor) {
    return tokenList(this, userId, cursor)
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