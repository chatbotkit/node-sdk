/**
 * Conversation session client.
 */
export class ConversationSessionClient extends ChatBotKitClient {
    /**
     * Creates a new session.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationSessionCreateRequest} request
     * @returns {Promise<import('./v1.js').ConversationSessionCreateResponse>}
     */
    create(conversationId: string, request: import("./v1.js").ConversationSessionCreateRequest): Promise<import("./v1.js").ConversationSessionCreateResponse>;
}
export default ConversationSessionClient;
import { ChatBotKitClient } from '../../client.js';
