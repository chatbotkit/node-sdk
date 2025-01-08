import { ChatBotKitClient } from '../../client.js'
import { listPlatformModels } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Model client.
 */
export class PlatformModelClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform models.
   *
   * @param {import('./v1.js').PlatformModelListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformModelListResponse,import('./v1.js').PlatformModelListStreamType>}
   */
  list(request) {
    return listPlatformModels(this, request)
  }
}

export default PlatformModelClient
