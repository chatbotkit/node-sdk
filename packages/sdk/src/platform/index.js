import { ChatBotKitClient } from '../client.js'
import { PlatformAbilityClient } from './ability/index.js'
import { PlatformActionClient } from './action/index.js'
import { PlatformContentClient } from './content/index.js'
import { PlatformExampleClient } from './example/index.js'
import { PlatformModelClient } from './model/index.js'
import { PlatformReportClient } from './report/index.js'
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
    this.model = new PlatformModelClient(options)

    /**
     * @type {PlatformAbilityClient} ability client
     */
    this.ability = new PlatformAbilityClient(options)

    /**
     * @type {PlatformActionClient} action client
     */
    this.action = new PlatformActionClient(options)

    /**
     * @type {PlatformContentClient} content client
     */
    this.content = new PlatformContentClient(options)

    /**
     * @type {PlatformSecretClient} secret client
     */
    this.secret = new PlatformSecretClient(options)

    /**
     * @type {PlatformExampleClient} example client
     */
    this.example = new PlatformExampleClient(options)

    /**
     * @type {PlatformReportClient} report client
     */
    this.report = new PlatformReportClient(options)
  }
}

export default PlatformClient
