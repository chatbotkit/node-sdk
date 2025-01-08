import { ChatBotKitClient } from '../../client.js'
import { listPlatformSecrets } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Secret client.
 */
export class PlatformSecretClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform secrets.
   *
   * @param {import('./v1.js').PlatformSecretListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformSecretListResponse,import('./v1.js').PlatformSecretListStreamType>}
   */
  list(request) {
    return listPlatformSecrets(this, request)
  }
}

export default PlatformSecretClient
