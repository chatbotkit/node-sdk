import { ChatBotKitClient } from '../../client.js'
import {
  createInstagramIntegration,
  deleteInstagramIntegration,
  fetchInstagramIntegration,
  listInstagramIntegrations,
  setupInstagramIntegration,
  updateInstagramIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class InstagramIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all instagram integrations.
   *
   * @param {import('./v1.js').InstagramIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').InstagramIntegrationListResponse,import('./v1.js').InstagramIntegrationListStreamType>}
   */
  list(request) {
    return listInstagramIntegrations(this, request)
  }

  /**
   * Fetches an instagram integration.
   *
   * @param {string} instagramId
   * @returns {ResponsePromise<import('./v1.js').InstagramIntegrationFetchResponse,never>}
   */
  fetch(instagramId) {
    return fetchInstagramIntegration(this, instagramId)
  }

  /**
   * Creates a new instagram integration.
   *
   * @param {import('./v1.js').InstagramIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').InstagramIntegrationCreateResponse>}
   */
  create(request) {
    return createInstagramIntegration(this, request)
  }

  /**
   * Updates an instagram integration.
   *
   * @param {string} instagramId
   * @param {import('./v1.js').InstagramIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').InstagramIntegrationUpdateResponse>}
   */
  update(instagramId, request) {
    return updateInstagramIntegration(this, instagramId, request)
  }

  /**
   * Deletes an instagram integration.
   *
   * @param {string} instagramId
   * @returns {Promise<import('./v1.js').InstagramIntegrationDeleteResponse>}
   */
  delete(instagramId) {
    return deleteInstagramIntegration(this, instagramId)
  }

  /**
   * Setups an instagram integration.
   *
   * @param {string} instagramId
   * @returns {Promise<import('./v1.js').InstagramIntegrationSetupResponse>}
   */
  setup(instagramId) {
    return setupInstagramIntegration(this, instagramId)
  }
}

export default InstagramIntegrationClient
