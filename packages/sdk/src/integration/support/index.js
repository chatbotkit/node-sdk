import { ChatBotKitClient } from '../../client.js'
import {
  createSupportIntegration,
  deleteSupportIntegration,
  fetchSupportIntegration,
  listSupportIntegrations,
  updateSupportIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class SupportIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all support integrations.
   *
   * @param {import('./v1.js').SupportIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SupportIntegrationListResponse,import('./v1.js').SupportIntegrationListStreamType>}
   */
  list(request) {
    return listSupportIntegrations(this, request)
  }

  /**
   * Fetches a support integration.
   *
   * @param {string} supportId
   * @returns {ResponsePromise<import('./v1.js').SupportIntegrationFetchResponse,never>}
   */
  fetch(supportId) {
    return fetchSupportIntegration(this, supportId)
  }

  /**
   * Creates a new support integration.
   *
   * @param {import('./v1.js').SupportIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').SupportIntegrationCreateResponse>}
   */
  create(request) {
    return createSupportIntegration(this, request)
  }

  /**
   * Updates a support integration.
   *
   * @param {string} supportId
   * @param {import('./v1.js').SupportIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').SupportIntegrationUpdateResponse>}
   */
  update(supportId, request) {
    return updateSupportIntegration(this, supportId, request)
  }

  /**
   * Deletes a support integration.
   *
   * @param {string} supportId
   * @returns {Promise<import('./v1.js').SupportIntegrationDeleteResponse>}
   */
  delete(supportId) {
    return deleteSupportIntegration(this, supportId)
  }
}

export default SupportIntegrationClient
