import { ChatBotKitClient } from '../../client.js'
import {
  createSlackIntegration,
  deleteSlackIntegration,
  fetchSlackIntegration,
  listSlackIntegrations,
  setupSlackIntegration,
  updateSlackIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class SlackIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all slack integrations.
   *
   * @param {import('./v1.js').SlackIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SlackIntegrationListResponse,import('./v1.js').SlackIntegrationListStreamType>}
   */
  list(request) {
    return listSlackIntegrations(this, request)
  }

  /**
   * Fetches a slack integration.
   *
   * @param {string} slackId
   * @returns {ResponsePromise<import('./v1.js').SlackIntegrationFetchResponse,never>}
   */
  fetch(slackId) {
    return fetchSlackIntegration(this, slackId)
  }

  /**
   * Creates a new slack integration.
   *
   * @param {import('./v1.js').SlackIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').SlackIntegrationCreateResponse>}
   */
  create(request) {
    return createSlackIntegration(this, request)
  }

  /**
   * Updates a slack integration.
   *
   * @param {string} slackId
   * @param {import('./v1.js').SlackIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').SlackIntegrationUpdateResponse>}
   */
  update(slackId, request) {
    return updateSlackIntegration(this, slackId, request)
  }

  /**
   * Deletes a slack integration.
   *
   * @param {string} slackId
   * @returns {Promise<import('./v1.js').SlackIntegrationDeleteResponse>}
   */
  delete(slackId) {
    return deleteSlackIntegration(this, slackId)
  }

  /**
   * Setups a slack integration.
   *
   * @param {string} slackId
   * @returns {Promise<import('./v1.js').SlackIntegrationSetupResponse>}
   */
  setup(slackId) {
    return setupSlackIntegration(this, slackId)
  }
}

export default SlackIntegrationClient
