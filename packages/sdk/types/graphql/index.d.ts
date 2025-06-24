/**
 * GraphQL client.
 */
export class GraphqlClient extends ChatBotKitClient {
    /**
     * Executes a GraphQL query.
     *
     * @param {import('./v1.js').GraphqlRequest} input
     * @returns {Promise<import('./v1.js').GraphqlResponse>}
     */
    call(input: import('./v1.js').GraphqlRequest): Promise<import('./v1.js').GraphqlResponse>;
}
export default GraphqlClient;
import { ChatBotKitClient } from '../client.js';
