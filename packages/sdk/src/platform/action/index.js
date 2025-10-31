import { ChatBotKitClient } from '../../client.js'
import { listPlatformActions } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Action client.
 */
export class PlatformActionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform actions.
   *
   * @param {import('./v1.js').PlatformActionListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformActionListResponse,import('./v1.js').PlatformActionListStreamType>}
   */
  list(request) {
    return listPlatformActions(this, request)
  }
}

export default PlatformActionClient
