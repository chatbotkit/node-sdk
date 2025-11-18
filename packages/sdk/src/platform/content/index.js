import { ChatBotKitClient } from '../../client.js'
import { PlatformContentDocClient } from './doc/index.js'
import { PlatformContentManualClient } from './manual/index.js'
import { PlatformContentTutorialClient } from './tutorial/index.js'

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

    /**
     * @type {PlatformContentTutorialClient} tutorial client
     */
    this.tutorial = new PlatformContentTutorialClient(options)
  }
}

export default PlatformContentClient
