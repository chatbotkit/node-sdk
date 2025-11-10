import { ChatBotKitClient } from '../../../client.js'
import { fetchPlatformContentManual, listPlatformContentManuals } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform content manual client.
 */
export class PlatformContentManualClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform content manuals.
   *
   * @param {import('./v1.js').PlatformContentManualListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformContentManualListResponse,import('./v1.js').PlatformContentManualListStreamType>}
   */
  list(request) {
    return listPlatformContentManuals(this, request)
  }

  /**
   * Fetches a platform content manual.
   *
   * @param {string} manualId
   * @returns {ResponsePromise<import('./v1.js').PlatformContentManualFetchResponse,never>}
   */
  fetch(manualId) {
    return fetchPlatformContentManual(this, manualId)
  }
}

export default PlatformContentManualClient
