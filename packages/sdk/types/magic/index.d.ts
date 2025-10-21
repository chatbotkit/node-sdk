/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Magic client.
 */
export class MagicClient extends ChatBotKitClient {
    /**
     * Generates magic.
     *
     * @param {string} magicId
     * @param {import('./v1.js').MagicGenerateRequest} request
     * @param {import('./v1.js').MagicGenerateRequest|import('./v1.js').MagicGenerateStreamType} request
     */
    generate(magicId: string, request: import("./v1.js").MagicGenerateRequest): import("../client.js").ResponsePromise<{
        text: string;
        usage: {
            token: number;
        };
    }, {
        type: "result";
        data: {
            text: string;
            usage: {
                token: number;
            };
        };
    }>;
}
export default MagicClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
