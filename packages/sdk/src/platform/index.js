import { ChatBotKitClient } from '../client.js'
import { PlatformAbilityClient } from './ability/index.js'
import { PlatformModelClient } from './model/index.js'
import { PlatformSecretClient } from './secret/index.js'

/**
 * Platform client.
 */
export class PlatformClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {PlatformModelClient} model client
     */
    this.user = new PlatformModelClient(options)

    /**
     * @type {PlatformAbilityClient} ability client
     */
    this.ability = new PlatformAbilityClient(options)

    /**
     * @note overlapping name with the `secret` property
     * @type {PlatformSecretClient} secret client
     */
    this.secrets = new PlatformSecretClient(options)
  }
}

export default PlatformClient
