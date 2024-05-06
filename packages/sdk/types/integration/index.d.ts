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
     * @type {WhatsAppIntegrationClient} whatsapp client
     */
    whatsapp: WhatsAppIntegrationClient;
    /**
     * @type {MessengerIntegrationClient} messenger client
     */
    messenger: MessengerIntegrationClient;
    /**
     * @type {SitemapIntegrationClient} sitemap client
     */
    sitemap: SitemapIntegrationClient;
}
export default IntegrationClient;
import { ChatBotKitClient } from '../client.js';
import { WidgetIntegrationClient } from './widget/index.js';
import { SlackIntegrationClient } from './slack/index.js';
import { WhatsAppIntegrationClient } from './whatsapp/index.js';
import { MessengerIntegrationClient } from './messenger/index.js';
import { SitemapIntegrationClient } from './sitemap/index.js';
