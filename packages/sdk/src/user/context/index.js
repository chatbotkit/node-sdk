import { ChatBotKitClient } from '../../client.js'
import {
  createUserContext,
  deleteUserContext,
  fetchUserContext,
  listUserContexts,
  updateUserContext,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * User context client.
 */
export class UserContextClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of user contexts.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserContextListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').UserContextListResponse,import('./v1.js').UserContextListStreamType>}
   */
  list(userId, request) {
    return listUserContexts(this, userId, request)
  }

  /**
   * Fetches a user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @returns {ResponsePromise<import('./v1.js').UserContextFetchResponse,never>}
   */
  fetch(userId, contextId) {
    return fetchUserContext(this, userId, contextId)
  }

  /**
   * Creates a user context.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserContextCreateRequest} request
   * @returns {Promise<import('./v1.js').UserContextCreateResponse>}
   */
  create(userId, request) {
    return createUserContext(this, userId, request)
  }

  /**
   * Updates a user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @param {import('./v1.js').UserContextUpdateRequest} request
   * @returns {Promise<import('./v1.js').UserContextUpdateResponse>}
   */
  update(userId, contextId, request) {
    return updateUserContext(this, userId, contextId, request)
  }

  /**
   * Deletes a user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @returns {Promise<import('./v1.js').UserContextDeleteResponse>}
   */
  delete(userId, contextId) {
    return deleteUserContext(this, userId, contextId)
  }
}

export default UserContextClient
