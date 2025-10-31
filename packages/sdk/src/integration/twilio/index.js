import { ChatBotKitClient } from '../../client.js'
import {
  createTwilioIntegration,
  deleteTwilioIntegration,
  fetchTwilioIntegration,
  listTwilioIntegrations,
  setupTwilioIntegration,
  updateTwilioIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class TwilioIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all twilio integrations.
   *
   * @param {import('./v1.js').TwilioIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TwilioIntegrationListResponse,import('./v1.js').TwilioIntegrationListStreamType>}
   */
  list(request) {
    return listTwilioIntegrations(this, request)
  }

  /**
   * Fetches a twilio integration.
   *
   * @param {string} twilioId
   * @returns {ResponsePromise<import('./v1.js').TwilioIntegrationFetchResponse,never>}
   */
  fetch(twilioId) {
    return fetchTwilioIntegration(this, twilioId)
  }

  /**
   * Creates a new twilio integration.
   *
   * @param {import('./v1.js').TwilioIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').TwilioIntegrationCreateResponse>}
   */
  create(request) {
    return createTwilioIntegration(this, request)
  }

  /**
   * Updates a twilio integration.
   *
   * @param {string} twilioId
   * @param {import('./v1.js').TwilioIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').TwilioIntegrationUpdateResponse>}
   */
  update(twilioId, request) {
    return updateTwilioIntegration(this, twilioId, request)
  }

  /**
   * Deletes a twilio integration.
   *
   * @param {string} twilioId
   * @returns {Promise<import('./v1.js').TwilioIntegrationDeleteResponse>}
   */
  delete(twilioId) {
    return deleteTwilioIntegration(this, twilioId)
  }

  /**
   * Sets up a twilio integration.
   *
   * @param {string} twilioId
   * @returns {Promise<import('./v1.js').TwilioIntegrationSetupResponse>}
   */
  setup(twilioId) {
    return setupTwilioIntegration(this, twilioId)
  }
}

export default TwilioIntegrationClient
