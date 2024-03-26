import { ChatBotKitClient } from '../client.js'
import { PartnerUserClient } from './user/index.js'

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
