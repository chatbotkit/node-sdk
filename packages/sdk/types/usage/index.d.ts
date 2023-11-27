export class UsageClient extends ChatBotKitClient {
    /**
     * Fetches usage.
     *
     * @returns {Promise<import('./v1.js').UsageFetchResponse>}
     */
    fetch(): Promise<import('./v1.js').UsageFetchResponse>;
}
export default UsageClient;
import { ChatBotKitClient } from '../client.js';
