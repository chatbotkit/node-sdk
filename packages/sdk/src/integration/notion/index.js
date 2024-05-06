import { ChatBotKitClient } from '../../client.js'
import {
  createNotionIntegration,
  deleteNotionIntegration,
  fetchNotionIntegration,
  listNotionIntegrations,
  syncNotionIntegration,
  updateNotionIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class NotionIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all notion integrations.
   *
   * @param {import('./v1.js').NotionIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').NotionIntegrationListResponse,import('./v1.js').NotionIntegrationListStreamType>}
   */
  list(request) {
    return listNotionIntegrations(this, request)
  }

  /**
   * Fetches a notion integration.
   *
   * @param {string} notionId
   * @returns {Promise<import('./v1.js').NotionIntegrationFetchResponse>}
   */
  fetch(notionId) {
    return fetchNotionIntegration(this, notionId)
  }

  /**
   * Creates a new notion integration.
   *
   * @param {import('./v1.js').NotionIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').NotionIntegrationCreateResponse>}
   */
  create(request) {
    return createNotionIntegration(this, request)
  }

  /**
   * Updates a notion integration.
   *
   * @param {string} notionId
   * @param {import('./v1.js').NotionIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').NotionIntegrationUpdateResponse>}
   */
  update(notionId, request) {
    return updateNotionIntegration(this, notionId, request)
  }

  /**
   * Deletes a notion integration.
   *
   * @param {string} notionId
   * @returns {Promise<import('./v1.js').NotionIntegrationDeleteResponse>}
   */
  delete(notionId) {
    return deleteNotionIntegration(this, notionId)
  }

  /**
   * Syncs a notion integration.
   *
   * @param {string} notionId
   * @returns {Promise<import('./v1.js').NotionIntegrationSyncResponse>}
   */
  sync(notionId) {
    return syncNotionIntegration(this, notionId)
  }
}

export default NotionIntegrationClient
