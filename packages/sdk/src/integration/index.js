import { ChatBotKitClient } from '../client.js'
import { SitemapClient } from './sitemap/index.js'

export class IntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.sitemap = new SitemapClient(options)
  }
}

export default IntegrationClient
