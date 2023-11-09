import { TokenClient } from './token/index.js'
import { ChatBotKitClient } from '../../client.js'
import {
  userList,
  userFetch,
  userCreate,
  userUpdate,
  userDelete,
} from './v1.js'

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
   * @param {string} [cursor]
   * @returns {import('../../client.js').ResponsePromise<import('./v1.js').UserListResponse,import('./v1.js').UserListStreamType>}
   */
  list(cursor) {
    return userList(this, cursor)
  }

  /**
   * Fetches a user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').UserFetchResponse>}
   */
  fetch(userId) {
    return userFetch(this, userId)
  }

  /**
   * Creates a new user.
   *
   * @param {import('./v1.js').UserCreateRequest} request
   * @returns {Promise<import('./v1.js').UserCreateResponse>}
   */
  create(request) {
    return userCreate(this, request)
  }

  /**
   * Updates the user.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserUpdateRequest} request
   * @returns {Promise<import('./v1.js').UserUpdateResponse>}
   */
  update(userId, request) {
    return userUpdate(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').UserDeleteResponse>}
   */
  delete(userId) {
    return userDelete(this, userId)
  }
}

export default UserClient