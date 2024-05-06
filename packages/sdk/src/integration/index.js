import { ChatBotKitClient } from '../client.js'
import { MessengerIntegrationClient } from './messenger/index.js'
import { SitemapIntegrationClient } from './sitemap/index.js'
import { SlackIntegrationClient } from './slack/index.js'
import { TelegramIntegrationClient } from './telegram/index.js'
import { WhatsAppIntegrationClient } from './whatsapp/index.js'
import { WidgetIntegrationClient } from './widget/index.js'

export class IntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {WidgetIntegrationClient} widget client
     */
    this.widget = new WidgetIntegrationClient(options)

    /**
     * @type {SlackIntegrationClient} slack client
     */
    this.slack = new SlackIntegrationClient(options)

    /**
     * @type {WhatsAppIntegrationClient} whatsapp client
     */
    this.whatsapp = new WhatsAppIntegrationClient(options)

    /**
     * @type {MessengerIntegrationClient} messenger client
     */
    this.messenger = new MessengerIntegrationClient(options)

    /**
     * @type {TelegramIntegrationClient} telegram client
     */
    this.telegram = new TelegramIntegrationClient(options)

    /**
     * @type {SitemapIntegrationClient} sitemap client
     */
    this.sitemap = new SitemapIntegrationClient(options)
  }
}

export default IntegrationClient
