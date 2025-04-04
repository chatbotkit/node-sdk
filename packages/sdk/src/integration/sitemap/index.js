import { ChatBotKitClient } from '../../client.js'
import {
  createSitemapIntegration,
  deleteSitemapIntegration,
  fetchSitemapIntegration,
  listSitemapIntegrations,
  syncSitemapIntegration,
  updateSitemapIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class SitemapIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all sitemap integrations.
   *
   * @param {import('./v1.js').SitemapIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SitemapIntegrationListResponse,import('./v1.js').SitemapIntegrationListStreamType>}
   */
  list(request) {
    return listSitemapIntegrations(this, request)
  }

  /**
   * Fetches a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {ResponsePromise<import('./v1.js').SitemapIntegrationFetchResponse,never>}
   */
  fetch(sitemapId) {
    return fetchSitemapIntegration(this, sitemapId)
  }

  /**
   * Creates a new sitemap integration.
   *
   * @param {import('./v1.js').SitemapIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').SitemapIntegrationCreateResponse>}
   */
  create(request) {
    return createSitemapIntegration(this, request)
  }

  /**
   * Updates a sitemap integration.
   *
   * @param {string} sitemapId
   * @param {import('./v1.js').SitemapIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').SitemapIntegrationUpdateResponse>}
   */
  update(sitemapId, request) {
    return updateSitemapIntegration(this, sitemapId, request)
  }

  /**
   * Deletes a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {Promise<import('./v1.js').SitemapIntegrationDeleteResponse>}
   */
  delete(sitemapId) {
    return deleteSitemapIntegration(this, sitemapId)
  }

  /**
   * Syncs a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {Promise<import('./v1.js').SitemapIntegrationSyncResponse>}
   */
  sync(sitemapId) {
    return syncSitemapIntegration(this, sitemapId)
  }
}

export default SitemapIntegrationClient
