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
   * Retrieves a list of all existing sitemaps associated with this client.
   * @returns {import('../../client.js').ResponsePromise<import('./v1.js').SitemapListResponse,import('./v1.js').SitemapListStreamType>}
   */
  list() {
    return sitemapList(this)
  }

  /**
   * Fetches a sitemap.
   *
   * @param {string} sitemapId
   */
  fetch(sitemapId) {
    return sitemapFetch(this, sitemapId)
  }

  /**
   * Creates a new sitemap.
   *
   * @param {import('./v1.js').SitemapCreateRequest} request
   */
  create(request) {
    return sitemapCreate(this, request)
  }

  /**
   * Updates a new sitemap.
   *
   * @param {string} sitemapId
   * @param {import('./v1.js').SitemapUpdateRequest} request
   */
  update(sitemapId, request) {
    return sitemapUpdate(this, sitemapId, request)
  }

  /**
   * Deletes the sitemap.
   *
   * @param {string} sitemapId
   */
  delete(sitemapId) {
    return sitemapDelete(this, sitemapId)
  }

  /**
   * Syncs the sitemap.
   *
   * @param {string} sitemapId
   */
  sync(sitemapId) {
    return sitemapSync(this, sitemapId)
  }
}

export default SitemapClient
