import { ChatBotKitClient } from '../../client.js'
import {
  sitemapList,
  sitemapFetch,
  sitemapCreate,
  sitemapUpdate,
  sitemapDelete,
  sitemapSync,
} from './v1.js'

export class SitemapClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing sitemap integrations associated with this client.
   *
   * @param {string} [cursor]
   * @returns {import('../../client.js').ResponsePromise<import('./v1.js').SitemapListResponse,import('./v1.js').SitemapListStreamType>}
   */
  list(cursor) {
    return sitemapList(this, cursor)
  }

  /**
   * Fetches a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {Promise<import('./v1.js').SitemapFetchResponse>}
   */
  fetch(sitemapId) {
    return sitemapFetch(this, sitemapId)
  }

  /**
   * Creates a new sitemap integration.
   *
   * @param {import('./v1.js').SitemapCreateRequest} request
   * @returns {Promise<import('./v1.js').SitemapCreateResponse>}
   */
  create(request) {
    return sitemapCreate(this, request)
  }

  /**
   * Updates a sitemap integration.
   *
   * @param {string} sitemapId
   * @param {import('./v1.js').SitemapUpdateRequest} request
   * @returns {Promise<import('./v1.js').SitemapUpdateResponse>}
   */
  update(sitemapId, request) {
    return sitemapUpdate(this, sitemapId, request)
  }

  /**
   * Deletes a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {Promise<import('./v1.js').SitemapDeleteResponse>}
   */
  delete(sitemapId) {
    return sitemapDelete(this, sitemapId)
  }

  /**
   * Syncs a sitemap integration.
   *
   * @param {string} sitemapId
   * @returns {Promise<import('./v1.js').SitemapSyncResponse>}
   */
  sync(sitemapId) {
    return sitemapSync(this, sitemapId)
  }
}

export default SitemapClient
