import { ChatBotKitClient } from '../../client.js'
import {
  createMicrosoftteamsIntegration,
  deleteMicrosoftteamsIntegration,
  fetchMicrosoftteamsIntegration,
  initiateMicrosoftteams,
  listMicrosoftteamsIntegrations,
  setupMicrosoftteamsIntegration,
  updateMicrosoftteamsIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class MicrosoftteamsIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all Microsoft Teams integrations.
   *
   * @param {import('./v1.js').MicrosoftteamsIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').MicrosoftteamsIntegrationListResponse,import('./v1.js').MicrosoftteamsIntegrationListStreamType>}
   */
  list(request) {
    return listMicrosoftteamsIntegrations(this, request)
  }

  /**
   * Fetches a Microsoft Teams integration.
   *
   * @param {string} microsoftteamsId
   * @returns {ResponsePromise<import('./v1.js').MicrosoftteamsIntegrationFetchResponse,never>}
   */
  fetch(microsoftteamsId) {
    return fetchMicrosoftteamsIntegration(this, microsoftteamsId)
  }

  /**
   * Creates a new Microsoft Teams integration.
   *
   * @param {import('./v1.js').MicrosoftteamsIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationCreateResponse>}
   */
  create(request) {
    return createMicrosoftteamsIntegration(this, request)
  }

  /**
   * Updates a Microsoft Teams integration.
   *
   * @param {string} microsoftteamsId
   * @param {import('./v1.js').MicrosoftteamsIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationUpdateResponse>}
   */
  update(microsoftteamsId, request) {
    return updateMicrosoftteamsIntegration(this, microsoftteamsId, request)
  }

  /**
   * Deletes a Microsoft Teams integration.
   *
   * @param {string} microsoftteamsId
   * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationDeleteResponse>}
   */
  delete(microsoftteamsId) {
    return deleteMicrosoftteamsIntegration(this, microsoftteamsId)
  }

  /**
   * Setups a Microsoft Teams integration.
   *
   * @param {string} microsoftteamsId
   * @returns {Promise<import('./v1.js').MicrosoftteamsIntegrationSetupResponse>}
   */
  setup(microsoftteamsId) {
    return setupMicrosoftteamsIntegration(this, microsoftteamsId)
  }

  /**
   * Initiates a Microsoft Teams integration conversation.
   *
   * @param {string} microsoftteamsId
   * @param {import('./v1.js').MicrosoftteamsInitiateRequest} request
   * @returns {Promise<import('./v1.js').MicrosoftteamsInitiateResponse>}
   */
  initiate(microsoftteamsId, request) {
    return initiateMicrosoftteams(this, microsoftteamsId, request)
  }
}

export default MicrosoftteamsIntegrationClient
