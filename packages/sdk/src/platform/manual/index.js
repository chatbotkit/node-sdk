import { ChatBotKitClient } from '../../client.js'
import {
  fetchPlatformManual,
  listPlatformManuals,
  searchPlatformManuals,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform manual client.
 */
export class PlatformManualClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform manuals.
   *
   * @param {import('./v1.js').PlatformManualListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformManualListResponse,import('./v1.js').PlatformManualListStreamType>}
   */
  list(request) {
    return listPlatformManuals(this, request)
  }

  /**
   * Searches platform manuals.
   *
   * @param {import('./v1.js').PlatformManualSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformManualSearchResponse>}
   */
  search(request) {
    return searchPlatformManuals(this, request)
  }

  /**
   * Fetches a platform manual.
   *
   * @param {string} manualId
   * @returns {ResponsePromise<import('./v1.js').PlatformManualFetchResponse,never>}
   */
  fetch(manualId) {
    return fetchPlatformManual(this, manualId)
  }
}

export default PlatformManualClient
