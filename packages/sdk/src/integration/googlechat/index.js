import { ChatBotKitClient } from '../../client.js'
import {
  createGooglechatIntegration,
  deleteGooglechatIntegration,
  fetchGooglechatIntegration,
  listGooglechatIntegrations,
  setupGooglechatIntegration,
  updateGooglechatIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class GooglechatIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all Google Chat integrations.
   *
   * @param {import('./v1.js').GooglechatIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').GooglechatIntegrationListResponse,import('./v1.js').GooglechatIntegrationListStreamType>}
   */
  list(request) {
    return listGooglechatIntegrations(this, request)
  }

  /**
   * Fetches a Google Chat integration.
   *
   * @param {string} googlechatId
   * @returns {ResponsePromise<import('./v1.js').GooglechatIntegrationFetchResponse,never>}
   */
  fetch(googlechatId) {
    return fetchGooglechatIntegration(this, googlechatId)
  }

  /**
   * Creates a new Google Chat integration.
   *
   * @param {import('./v1.js').GooglechatIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').GooglechatIntegrationCreateResponse>}
   */
  create(request) {
    return createGooglechatIntegration(this, request)
  }

  /**
   * Updates a Google Chat integration.
   *
   * @param {string} googlechatId
   * @param {import('./v1.js').GooglechatIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').GooglechatIntegrationUpdateResponse>}
   */
  update(googlechatId, request) {
    return updateGooglechatIntegration(this, googlechatId, request)
  }

  /**
   * Deletes a Google Chat integration.
   *
   * @param {string} googlechatId
   * @returns {Promise<import('./v1.js').GooglechatIntegrationDeleteResponse>}
   */
  delete(googlechatId) {
    return deleteGooglechatIntegration(this, googlechatId)
  }

  /**
   * Setups a Google Chat integration.
   *
   * @param {string} googlechatId
   * @returns {Promise<import('./v1.js').GooglechatIntegrationSetupResponse>}
   */
  setup(googlechatId) {
    return setupGooglechatIntegration(this, googlechatId)
  }
}

export default GooglechatIntegrationClient
