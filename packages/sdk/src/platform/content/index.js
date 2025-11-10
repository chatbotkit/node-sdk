import { ChatBotKitClient } from '../../client.js'
import { PlatformContentDocClient } from './doc/index.js'
import { PlatformContentManualClient } from './manual/index.js'

/**
 * Platform content client.
 */
export class PlatformContentClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {PlatformContentDocClient} doc client
     */
    this.doc = new PlatformContentDocClient(options)

    /**
     * @type {PlatformContentManualClient} manual client
     */
    this.manual = new PlatformContentManualClient(options)
  }
}

export default PlatformContentClient
