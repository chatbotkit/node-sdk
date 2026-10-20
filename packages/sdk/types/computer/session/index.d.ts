/**
 * Computer session client.
 */
export class ComputerSessionClient extends ChatBotKitClient {
    /**
     * Creates a short-lived remote access link to a desktop computer.
     *
     * @param {string} computerId
     * @param {import('./v1.js').ComputerSessionCreateRequest} [request]
     * @returns {Promise<import('./v1.js').ComputerSessionCreateResponse>}
     */
    create(computerId: string, request?: import("./v1.js").ComputerSessionCreateRequest): Promise<import("./v1.js").ComputerSessionCreateResponse>;
}
export default ComputerSessionClient;
import { ChatBotKitClient } from '../../client.js';
