import { PartnerUserTokenClient } from './token/index.js'
import { ChatBotKitClient } from '../../client.js'
import {
  listPartnerUsers,
  fetchPartnerUser,
  createPartnerUser,
  updatePartnerUser,
  deletePartnerUser,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class PartnerUserClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.token = new PartnerUserTokenClient(options)
  }

  /**
   * Retrieves a list of all users.
   *
   * @param {import('./v1.js').PartnerUserListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PartnerUserListResponse,import('./v1.js').PartnerUserListStreamType>}
   */
  list(request) {
    return listPartnerUsers(this, request)
  }

  /**
   * Fetches a user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').PartnerUserFetchResponse>}
   */
  fetch(userId) {
    return fetchPartnerUser(this, userId)
  }

  /**
   * Creates a new user.
   *
   * @param {import('./v1.js').PartnerUserCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserCreateResponse>}
   */
  create(request) {
    return createPartnerUser(this, request)
  }

  /**
   * Updates the user.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserUpdateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserUpdateResponse>}
   */
  update(userId, request) {
    return updatePartnerUser(this, userId, request)
  }

  /**
   * Deletes the user.
   *
   * @param {string} userId
   * @returns {Promise<import('./v1.js').PartnerUserDeleteResponse>}
   */
  delete(userId) {
    return deletePartnerUser(this, userId)
  }
}

export default PartnerUserClient
