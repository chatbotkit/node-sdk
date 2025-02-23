import { ChatBotKitClient } from '../../client.js'
import {
  createEmailIntegration,
  deleteEmailIntegration,
  fetchEmailIntegration,
  listEmailIntegrations,
  setupEmailIntegration,
  updateEmailIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class EmailIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all email integrations.
   *
   * @param {import('./v1.js').EmailIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').EmailIntegrationListResponse,import('./v1.js').EmailIntegrationListStreamType>}
   */
  list(request) {
    return listEmailIntegrations(this, request)
  }

  /**
   * Fetches a email integration.
   *
   * @param {string} emailId
   * @returns {ResponsePromise<import('./v1.js').EmailIntegrationFetchResponse,never>}
   */
  fetch(emailId) {
    return fetchEmailIntegration(this, emailId)
  }

  /**
   * Creates a new email integration.
   *
   * @param {import('./v1.js').EmailIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').EmailIntegrationCreateResponse>}
   */
  create(request) {
    return createEmailIntegration(this, request)
  }

  /**
   * Updates a email integration.
   *
   * @param {string} emailId
   * @param {import('./v1.js').EmailIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').EmailIntegrationUpdateResponse>}
   */
  update(emailId, request) {
    return updateEmailIntegration(this, emailId, request)
  }

  /**
   * Deletes a email integration.
   *
   * @param {string} emailId
   * @returns {Promise<import('./v1.js').EmailIntegrationDeleteResponse>}
   */
  delete(emailId) {
    return deleteEmailIntegration(this, emailId)
  }

  /**
   * Setups a email integration.
   *
   * @param {string} emailId
   * @returns {Promise<import('./v1.js').EmailIntegrationSetupResponse>}
   */
  setup(emailId) {
    return setupEmailIntegration(this, emailId)
  }
}

export default EmailIntegrationClient
