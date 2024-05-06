export class UsageSeriesClient extends ChatBotKitClient {
    /**
     * Fetches usage.
     *
     * @returns {Promise<import('./v1.js').UsageSeriesFetchResponse>}
     */
    fetch(): Promise<import('./v1.js').UsageSeriesFetchResponse>;
}
export default UsageSeriesClient;
import { ChatBotKitClient } from '../../client.js';
