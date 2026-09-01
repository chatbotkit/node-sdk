import { ChatBotKitClient } from '../client.js'
import { UserContextClient } from './context/index.js'
import { UserSessionClient } from './session/index.js'
import { UserTokenClient } from './token/index.js'
import {
  createUser,
  deleteUser,
  fetchUser,
  listUsers,
  updateUser,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * User client.
 */
export class UserClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {UserContextClient} context client
     */
    this.context = new UserContextClient(options)

    /**
     * @type {UserSessionClient} session client
     */
    this.session = new UserSessionClient(options)

    /**
     * @type {UserTokenClient} token client
     */
    this.token = new UserTokenClient(options)
  }

  /**
   * Retrieves a list of all users.
   *
   * @param {import('./v1.js').UserListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').UserListResponse,import('./v1.js').UserListStreamType>}
   */
  list(request) {
    return listUsers(this, request)
  }

  /**
   * Fetches a user.
   *
   * @param {string} userId
   * @returns {ResponsePromise<import('./v1.js').UserFetchResponse,never>}
   */
  fetch(userId) {
    return fetchUser(this, userId)
  }

  /**
   * Creates a new user.
   *
   * @param {import('./v1.js').UserCreateRequest} request
   * @returns {Promise<import('./v1.js').UserCreateResponse>}
   */
  create(request) {
    return createUser(this, request)
  }

  /**
   * Updates the user.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserUpdateRequest} request
   * @returns {Promise<import('./v1.js').UserUpdateResponse>}
   */
  update(userId, request) {
    return updateUser(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').UserDeleteResponse>}
   */
  delete(userId) {
    return deleteUser(this, userId)
  }
}

export default UserClient
