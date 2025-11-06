import { ChatBotKitClient } from '../client.js'
import {
  createSpace,
  deleteSpace,
  fetchSpace,
  listSpaces,
  updateSpace,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Space client.
 */
export class SpaceClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all spaces.
   *
   * @param {import('./v1.js').SpaceListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SpaceListResponse,import('./v1.js').SpaceListStreamType>}
   */
  list(request) {
    return listSpaces(this, request)
  }

  /**
   * Fetches a space.
   *
   * @param {string} spaceId
   * @returns {ResponsePromise<import('./v1.js').SpaceFetchResponse,never>}
   */
  fetch(spaceId) {
    return fetchSpace(this, spaceId)
  }

  /**
   * Creates a new space.
   *
   * @param {import('./v1.js').SpaceCreateRequest} request
   * @returns {Promise<import('./v1.js').SpaceCreateResponse>}
   */
  create(request) {
    return createSpace(this, request)
  }

  /**
   * Updates a space.
   *
   * @param {string} spaceId
   * @param {import('./v1.js').SpaceUpdateRequest} request
   * @returns {Promise<import('./v1.js').SpaceUpdateResponse>}
   */
  update(spaceId, request) {
    return updateSpace(this, spaceId, request)
  }

  /**
   * Deletes the space.
   *
   * @param {string} spaceId
   * @returns {Promise<import('./v1.js').SpaceDeleteResponse>}
   */
  delete(spaceId) {
    return deleteSpace(this, spaceId)
  }
}

export default SpaceClient
