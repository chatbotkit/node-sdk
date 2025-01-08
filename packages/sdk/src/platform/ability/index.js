import { ChatBotKitClient } from '../../client.js'
import { listPlatformAbilities } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Ability client.
 */
export class PlatformAbilityClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform abilities.
   *
   * @param {import('./v1.js').PlatformAbilityListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformAbilityListResponse,import('./v1.js').PlatformAbilityListStreamType>}
   */
  list(request) {
    return listPlatformAbilities(this, request)
  }
}

export default PlatformAbilityClient
