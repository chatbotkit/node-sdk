/**
 * Computer file client.
 */
export class ComputerFileClient extends ChatBotKitClient {
    /**
     * Reads a text file from the computer.
     *
     * @param {string} computerId
     * @param {import('./v1.js').ComputerFileReadRequest} request
     * @returns {Promise<import('./v1.js').ComputerFileReadResponse>}
     */
    read(computerId: string, request: import("./v1.js").ComputerFileReadRequest): Promise<import("./v1.js").ComputerFileReadResponse>;
    /**
     * Writes a text file to the computer.
     *
     * @param {string} computerId
     * @param {import('./v1.js').ComputerFileWriteRequest} request
     * @returns {Promise<import('./v1.js').ComputerFileWriteResponse>}
     */
    write(computerId: string, request: import("./v1.js").ComputerFileWriteRequest): Promise<import("./v1.js").ComputerFileWriteResponse>;
}
export default ComputerFileClient;
import { ChatBotKitClient } from '../../client.js';
