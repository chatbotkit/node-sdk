export class IntegrationClient extends ChatBotKitClient {
    /**
     * @type {WidgetIntegrationClient} widget client
     */
    widget: WidgetIntegrationClient;
    /**
     * @type {SitemapIntegrationClient} sitemap client
     */
    sitemap: SitemapIntegrationClient;
    /**
     * @type {WhatsAppIntegrationClient} whatsapp client
     */
    whatsapp: WhatsAppIntegrationClient;
}
export default IntegrationClient;
import { ChatBotKitClient } from '../client.js';
import { WidgetIntegrationClient } from './widget/index.js';
import { SitemapIntegrationClient } from './sitemap/index.js';
import { WhatsAppIntegrationClient } from './whatsapp/index.js';
