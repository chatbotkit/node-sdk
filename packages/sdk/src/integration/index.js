import { ChatBotKitClient } from '../client.js'
import { DiscordIntegrationClient } from './discord/index.js'
import { EmailIntegrationClient } from './email/index.js'
import { ExtractIntegrationClient } from './extract/index.js'
import { InstagramIntegrationClient } from './instagram/index.js'
import { McpServerIntegrationClient } from './mcpserver/index.js'
import { MessengerIntegrationClient } from './messenger/index.js'
import { NotionIntegrationClient } from './notion/index.js'
import { SitemapIntegrationClient } from './sitemap/index.js'
import { SlackIntegrationClient } from './slack/index.js'
import { SupportIntegrationClient } from './support/index.js'
import { TelegramIntegrationClient } from './telegram/index.js'
import { TriggerIntegrationClient } from './trigger/index.js'
import { TwilioIntegrationClient } from './twilio/index.js'
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
     * @type {DiscordIntegrationClient} discord client
     */
    this.discord = new DiscordIntegrationClient(options)

    /**
     * @type {WhatsAppIntegrationClient} whatsapp client
     */
    this.whatsapp = new WhatsAppIntegrationClient(options)

    /**
     * @type {MessengerIntegrationClient} messenger client
     */
    this.messenger = new MessengerIntegrationClient(options)

    /**
     * @type {InstagramIntegrationClient} instagram client
     */
    this.instagram = new InstagramIntegrationClient(options)

    /**
     * @type {TelegramIntegrationClient} telegram client
     */
    this.telegram = new TelegramIntegrationClient(options)

    /**
     * @type {TriggerIntegrationClient} trigger client
     */
    this.trigger = new TriggerIntegrationClient(options)

    /**
     * @type {EmailIntegrationClient} email client
     */
    this.email = new EmailIntegrationClient(options)

    /**
     * @type {SitemapIntegrationClient} sitemap client
     */
    this.sitemap = new SitemapIntegrationClient(options)

    /**
     * @type {NotionIntegrationClient} notion client
     */
    this.notion = new NotionIntegrationClient(options)

    /**
     * @type {SupportIntegrationClient} support client
     */
    this.support = new SupportIntegrationClient(options)

    /**
     * @type {ExtractIntegrationClient} extract client
     */
    this.extract = new ExtractIntegrationClient(options)

    /**
     * @type {McpServerIntegrationClient} mcpserver client
     */
    this.mcpserver = new McpServerIntegrationClient(options)

    /**
     * @type {TwilioIntegrationClient} twilio client
     */
    this.twilio = new TwilioIntegrationClient(options)
  }
}

export default IntegrationClient
