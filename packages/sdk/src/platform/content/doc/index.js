import { ChatBotKitClient } from '../../../client.js'
import {
  fetchPlatformContentDoc,
  listPlatformContentDocs,
  searchPlatformContentDocs,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform content doc client.
 */
export class PlatformContentDocClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform content docs.
   *
   * @param {import('./v1.js').PlatformContentDocListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformContentDocListResponse,import('./v1.js').PlatformContentDocListStreamType>}
   */
  list(request) {
    return listPlatformContentDocs(this, request)
  }

  /**
   * Searches platform content docs.
   *
   * @param {import('./v1.js').PlatformContentDocSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformContentDocSearchResponse>}
   */
  search(request) {
    return searchPlatformContentDocs(this, request)
  }

  /**
   * Fetches a platform content doc.
   *
   * @param {string} docId
   * @returns {ResponsePromise<import('./v1.js').PlatformContentDocFetchResponse,never>}
   */
  fetch(docId) {
    return fetchPlatformContentDoc(this, docId)
  }
}

export default PlatformContentDocClient
