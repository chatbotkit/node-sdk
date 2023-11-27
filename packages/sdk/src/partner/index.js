import { PartnerUserClient } from './user/index.js'
import { ChatBotKitClient } from '../client.js'

/**
 * Partner client.
 */
export class PartnerClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {PartnerUserClient} user client
     */
    this.user = new PartnerUserClient(options)
  }
}

export default PartnerClient
