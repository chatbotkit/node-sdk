import { ChatBotKitClient } from '../../client.js'
import {
  createMessengerIntegration,
  deleteMessengerIntegration,
  fetchMessengerIntegration,
  listMessengerIntegrations,
  setupMessengerIntegration,
  updateMessengerIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class MessengerIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all messenger integrations.
   *
   * @param {import('./v1.js').MessengerIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').MessengerIntegrationListResponse,import('./v1.js').MessengerIntegrationListStreamType>}
   */
  list(request) {
    return listMessengerIntegrations(this, request)
  }

  /**
   * Fetches a messenger integration.
   *
   * @param {string} messengerId
   * @returns {ResponsePromise<import('./v1.js').MessengerIntegrationFetchResponse,never>}
   */
  fetch(messengerId) {
    return fetchMessengerIntegration(this, messengerId)
  }

  /**
   * Creates a new messenger integration.
   *
   * @param {import('./v1.js').MessengerIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').MessengerIntegrationCreateResponse>}
   */
  create(request) {
    return createMessengerIntegration(this, request)
  }

  /**
   * Updates a messenger integration.
   *
   * @param {string} messengerId
   * @param {import('./v1.js').MessengerIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').MessengerIntegrationUpdateResponse>}
   */
  update(messengerId, request) {
    return updateMessengerIntegration(this, messengerId, request)
  }

  /**
   * Deletes a messenger integration.
   *
   * @param {string} messengerId
   * @returns {Promise<import('./v1.js').MessengerIntegrationDeleteResponse>}
   */
  delete(messengerId) {
    return deleteMessengerIntegration(this, messengerId)
  }

  /**
   * Setups a messenger integration.
   *
   * @param {string} messengerId
   * @returns {Promise<import('./v1.js').MessengerIntegrationSetupResponse>}
   */
  setup(messengerId) {
    return setupMessengerIntegration(this, messengerId)
  }
}

export default MessengerIntegrationClient
