import { TokenClient } from './token/index.js'
import { ChatBotKitClient } from '../../client.js'
import {
  listUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class UserClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.token = new TokenClient(options)
  }

  /**
   * Retrieves a list of all existing users associated with this client.
   *
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').PartnerUserListResponse,import('./v1.js').PartnerUserListStreamType>}
   */
  list(query) {
    return listUsers(this, query)
  }

  /**
   * Fetches a user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').PartnerUserFetchResponse>}
   */
  fetch(userId) {
    return fetchUser(this, userId)
  }

  /**
   * Creates a new user.
   *
   * @param {import('./v1.js').PartnerUserCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserCreateResponse>}
   */
  create(request) {
    return createUser(this, request)
  }

  /**
   * Updates the user.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserUpdateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserUpdateResponse>}
   */
  update(userId, request) {
    return updateUser(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').PartnerUserDeleteResponse>}
   */
  delete(userId) {
    return deleteUser(this, userId)
  }
}

export default UserClient
