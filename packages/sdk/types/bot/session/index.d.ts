/**
 * Bot session client.
 */
export class BotSessionClient extends ChatBotKitClient {
    /**
     * Creates a new session.
     *
     * @param {string} botId
     * @param {import('./v1.js').BotSessionCreateRequest} request
     * @returns {Promise<import('./v1.js').BotSessionCreateResponse>}
     */
    create(botId: string, request: import("./v1.js").BotSessionCreateRequest): Promise<import("./v1.js").BotSessionCreateResponse>;
}
import { ChatBotKitClient } from '../../client.js';
