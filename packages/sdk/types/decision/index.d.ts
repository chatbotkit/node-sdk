/**
 * Decision client.
 */
export class DecisionClient extends ChatBotKitClient {
    /**
     * Answers typed questions about a state.
     *
     * @param {import('./v1.js').DecisionCreateRequest} request
     * @returns {Promise<import('./v1.js').DecisionCreateResponse>}
     */
    create(request: import("./v1.js").DecisionCreateRequest): Promise<import("./v1.js").DecisionCreateResponse>;
}
export default DecisionClient;
import { ChatBotKitClient } from '../client.js';
