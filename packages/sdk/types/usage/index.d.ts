export class UsageClient extends ChatBotKitClient {
    /**
     * @type {UsageSeriesClient} series client
     */
    series: UsageSeriesClient;
    /**
     * Fetches usage.
     *
     * @returns {Promise<import('./v1.js').UsageFetchResponse>}
     */
    fetch(): Promise<import('./v1.js').UsageFetchResponse>;
}
export default UsageClient;
import { ChatBotKitClient } from '../client.js';
import { UsageSeriesClient } from './series/index.js';
