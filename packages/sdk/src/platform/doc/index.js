import { ChatBotKitClient } from '../../client.js'
import { fetchPlatformDoc, listPlatformDocs, searchPlatformDocs } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform doc client.
 */
export class PlatformDocClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform docs.
   *
   * @param {import('./v1.js').PlatformDocListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformDocListResponse,import('./v1.js').PlatformDocListStreamType>}
   */
  list(request) {
    return listPlatformDocs(this, request)
  }

  /**
   * Searches platform docs.
   *
   * @param {import('./v1.js').PlatformDocSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformDocSearchResponse>}
   */
  search(request) {
    return searchPlatformDocs(this, request)
  }

  /**
   * Fetches a platform doc.
   *
   * @param {string} docId
   * @returns {ResponsePromise<import('./v1.js').PlatformDocFetchResponse,never>}
   */
  fetch(docId) {
    return fetchPlatformDoc(this, docId)
  }
}

export default PlatformDocClient
