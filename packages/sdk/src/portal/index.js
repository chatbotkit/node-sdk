import { ChatBotKitClient } from '../client.js'
import {
  createPortal,
  deletePortal,
  fetchPortal,
  listPortals,
  updatePortal,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Portal client.
 */
export class PortalClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all portals.
   *
   * @param {import('./v1.js').PortalListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PortalListResponse,import('./v1.js').PortalListStreamType>}
   */
  list(request) {
    return listPortals(this, request)
  }

  /**
   * Fetches a portal.
   *
   * @param {string} portalId
   * @returns {ResponsePromise<import('./v1.js').PortalFetchResponse,never>}
   */
  fetch(portalId) {
    return fetchPortal(this, portalId)
  }

  /**
   * Creates a new portal.
   *
   * @param {import('./v1.js').PortalCreateRequest} request
   * @returns {Promise<import('./v1.js').PortalCreateResponse>}
   */
  create(request) {
    return createPortal(this, request)
  }

  /**
   * Updates a portal.
   *
   * @param {string} portalId
   * @param {import('./v1.js').PortalUpdateRequest} request
   * @returns {Promise<import('./v1.js').PortalUpdateResponse>}
   */
  update(portalId, request) {
    return updatePortal(this, portalId, request)
  }

  /**
   * Deletes the portal.
   *
   * @param {string} portalId
   * @returns {Promise<import('./v1.js').PortalDeleteResponse>}
   */
  delete(portalId) {
    return deletePortal(this, portalId)
  }
}

export default PortalClient
