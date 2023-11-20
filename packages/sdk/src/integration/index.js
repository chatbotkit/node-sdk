import { ChatBotKitClient } from '../client.js'
import { SitemapIntegrationClient } from './sitemap/index.js'
import { WhatsAppIntegrationClient } from './whatsapp/index.js'

export class IntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.sitemap = new SitemapIntegrationClient(options)
    this.whatsapp = new WhatsAppIntegrationClient(options)
  }
}

export default IntegrationClient
