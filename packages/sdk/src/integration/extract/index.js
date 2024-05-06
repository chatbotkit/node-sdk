import { ChatBotKitClient } from '../../client.js'
import {
  createExtractIntegration,
  deleteExtractIntegration,
  fetchExtractIntegration,
  listExtractIntegrations,
  updateExtractIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class ExtractIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all extract integrations.
   *
   * @param {import('./v1.js').ExtractIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ExtractIntegrationListResponse,import('./v1.js').ExtractIntegrationListStreamType>}
   */
  list(request) {
    return listExtractIntegrations(this, request)
  }

  /**
   * Fetches a extract integration.
   *
   * @param {string} extractId
   * @returns {Promise<import('./v1.js').ExtractIntegrationFetchResponse>}
   */
  fetch(extractId) {
    return fetchExtractIntegration(this, extractId)
  }

  /**
   * Creates a new extract integration.
   *
   * @param {import('./v1.js').ExtractIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').ExtractIntegrationCreateResponse>}
   */
  create(request) {
    return createExtractIntegration(this, request)
  }

  /**
   * Updates a extract integration.
   *
   * @param {string} extractId
   * @param {import('./v1.js').ExtractIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').ExtractIntegrationUpdateResponse>}
   */
  update(extractId, request) {
    return updateExtractIntegration(this, extractId, request)
  }

  /**
   * Deletes a extract integration.
   *
   * @param {string} extractId
   * @returns {Promise<import('./v1.js').ExtractIntegrationDeleteResponse>}
   */
  delete(extractId) {
    return deleteExtractIntegration(this, extractId)
  }
}

export default ExtractIntegrationClient
