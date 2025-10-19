/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Contact conversation client.
 */
export class ConversationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all contact conversations.
     *
     * @param {string} contactId
     * @param {import('./v1.js').ConversationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
     */
    list(contactId: string, request?: import("./v1.js").ConversationListRequest): ResponsePromise<import("./v1.js").ConversationListResponse, import("./v1.js").ConversationListStreamType>;
}
export default ConversationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
