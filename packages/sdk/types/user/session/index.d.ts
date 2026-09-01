/**
 * User session client.
 */
export class UserSessionClient extends ChatBotKitClient {
    /**
     * Creates a new user session.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserSessionCreateRequest} request
     * @returns {Promise<import('./v1.js').UserSessionCreateResponse>}
     */
    create(userId: string, request: import("./v1.js").UserSessionCreateRequest): Promise<import("./v1.js").UserSessionCreateResponse>;
}
export default UserSessionClient;
import { ChatBotKitClient } from '../../client.js';
