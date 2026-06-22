import { ChatBotKitClient } from '../../client.js'
import {
  createSpaceSite,
  deleteSpaceSite,
  fetchSpaceSite,
  listSpaceSites,
  updateSpaceSite,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Space site client.
 */
export class SpaceSiteClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all sites in a space.
   *
   * @param {string} spaceId
   * @param {import('./v1.js').SpaceSiteListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SpaceSiteListResponse,import('./v1.js').SpaceSiteListStreamType>}
   */
  list(spaceId, request) {
    return listSpaceSites(this, spaceId, request)
  }

  /**
   * Fetches a space site.
   *
   * @param {string} spaceId
   * @param {string} siteId
   * @returns {ResponsePromise<import('./v1.js').SpaceSiteFetchResponse,never>}
   */
  fetch(spaceId, siteId) {
    return fetchSpaceSite(this, spaceId, siteId)
  }

  /**
   * Creates a new space site.
   *
   * @param {string} spaceId
   * @param {import('./v1.js').SpaceSiteCreateRequest} request
   * @returns {Promise<import('./v1.js').SpaceSiteCreateResponse>}
   */
  create(spaceId, request) {
    return createSpaceSite(this, spaceId, request)
  }

  /**
   * Updates a space site.
   *
   * @param {string} spaceId
   * @param {string} siteId
   * @param {import('./v1.js').SpaceSiteUpdateRequest} request
   * @returns {Promise<import('./v1.js').SpaceSiteUpdateResponse>}
   */
  update(spaceId, siteId, request) {
    return updateSpaceSite(this, spaceId, siteId, request)
  }

  /**
   * Deletes a space site.
   *
   * @param {string} spaceId
   * @param {string} siteId
   * @returns {Promise<import('./v1.js').SpaceSiteDeleteResponse>}
   */
  delete(spaceId, siteId) {
    return deleteSpaceSite(this, spaceId, siteId)
  }
}

export default SpaceSiteClient
