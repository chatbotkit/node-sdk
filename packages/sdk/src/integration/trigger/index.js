import { ChatBotKitClient } from '../../client.js'
import {
  createTriggerIntegration,
  deleteTriggerIntegration,
  fetchTriggerIntegration,
  listTriggerIntegrations,
  setupTriggerIntegration,
  updateTriggerIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class TriggerIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all trigger integrations.
   *
   * @param {import('./v1.js').TriggerIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TriggerIntegrationListResponse,import('./v1.js').TriggerIntegrationListStreamType>}
   */
  list(request) {
    return listTriggerIntegrations(this, request)
  }

  /**
   * Fetches a trigger integration.
   *
   * @param {string} triggerId
   * @returns {Promise<import('./v1.js').TriggerIntegrationFetchResponse>}
   */
  fetch(triggerId) {
    return fetchTriggerIntegration(this, triggerId)
  }

  /**
   * Creates a new trigger integration.
   *
   * @param {import('./v1.js').TriggerIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').TriggerIntegrationCreateResponse>}
   */
  create(request) {
    return createTriggerIntegration(this, request)
  }

  /**
   * Updates a trigger integration.
   *
   * @param {string} triggerId
   * @param {import('./v1.js').TriggerIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').TriggerIntegrationUpdateResponse>}
   */
  update(triggerId, request) {
    return updateTriggerIntegration(this, triggerId, request)
  }

  /**
   * Deletes a trigger integration.
   *
   * @param {string} triggerId
   * @returns {Promise<import('./v1.js').TriggerIntegrationDeleteResponse>}
   */
  delete(triggerId) {
    return deleteTriggerIntegration(this, triggerId)
  }

  /**
   * Setups a trigger integration.
   *
   * @param {string} triggerId
   * @returns {Promise<import('./v1.js').TriggerIntegrationSetupResponse>}
   */
  setup(triggerId) {
    return setupTriggerIntegration(this, triggerId)
  }
}

export default TriggerIntegrationClient
