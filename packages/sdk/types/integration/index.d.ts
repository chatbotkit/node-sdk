export class IntegrationClient extends ChatBotKitClient {
    /**
     * @type {WidgetIntegrationClient} widget client
     */
    widget: WidgetIntegrationClient;
    /**
     * @type {SlackIntegrationClient} slack client
     */
    slack: SlackIntegrationClient;
    /**
     * @type {DiscordIntegrationClient} discord client
     */
    discord: DiscordIntegrationClient;
    /**
     * @type {WhatsAppIntegrationClient} whatsapp client
     */
    whatsapp: WhatsAppIntegrationClient;
    /**
     * @type {MessengerIntegrationClient} messenger client
     */
    messenger: MessengerIntegrationClient;
    /**
     * @type {InstagramIntegrationClient} instagram client
     */
    instagram: InstagramIntegrationClient;
    /**
     * @type {TelegramIntegrationClient} telegram client
     */
    telegram: TelegramIntegrationClient;
    /**
     * @type {TriggerIntegrationClient} trigger client
     */
    trigger: TriggerIntegrationClient;
    /**
     * @type {EmailIntegrationClient} email client
     */
    email: EmailIntegrationClient;
    /**
     * @type {SitemapIntegrationClient} sitemap client
     */
    sitemap: SitemapIntegrationClient;
    /**
     * @type {NotionIntegrationClient} notion client
     */
    notion: NotionIntegrationClient;
    /**
     * @type {SupportIntegrationClient} support client
     */
    support: SupportIntegrationClient;
    /**
     * @type {ExtractIntegrationClient} extract client
     */
    extract: ExtractIntegrationClient;
    /**
     * @type {McpServerIntegrationClient} mcpserver client
     */
    mcpserver: McpServerIntegrationClient;
    /**
     * @type {TwilioIntegrationClient} twilio client
     */
    twilio: TwilioIntegrationClient;
}
export default IntegrationClient;
import { ChatBotKitClient } from '../client.js';
import { WidgetIntegrationClient } from './widget/index.js';
import { SlackIntegrationClient } from './slack/index.js';
import { DiscordIntegrationClient } from './discord/index.js';
import { WhatsAppIntegrationClient } from './whatsapp/index.js';
import { MessengerIntegrationClient } from './messenger/index.js';
import { InstagramIntegrationClient } from './instagram/index.js';
import { TelegramIntegrationClient } from './telegram/index.js';
import { TriggerIntegrationClient } from './trigger/index.js';
import { EmailIntegrationClient } from './email/index.js';
import { SitemapIntegrationClient } from './sitemap/index.js';
import { NotionIntegrationClient } from './notion/index.js';
import { SupportIntegrationClient } from './support/index.js';
import { ExtractIntegrationClient } from './extract/index.js';
import { McpServerIntegrationClient } from './mcpserver/index.js';
import { TwilioIntegrationClient } from './twilio/index.js';
