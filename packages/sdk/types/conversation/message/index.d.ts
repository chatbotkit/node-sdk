/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Conversation message client.
 */
export class ConversationMessageClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all messages.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationMessageListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ConversationMessageListResponse,import('./v1.js').ConversationMessageListStreamType>}
     */
    list(conversationId: string, request?: import("./v1.js").ConversationMessageListRequest | undefined): ResponsePromise<import('./v1.js').ConversationMessageListResponse, import('./v1.js').ConversationMessageListStreamType>;
    /**
     * Fetches a message.
     *
     * @param {string} conversationId
     * @param {string} messageId
     * @returns {Promise<import('./v1.js').ConversationMessageFetchResponse>}
     */
    fetch(conversationId: string, messageId: string): Promise<import('./v1.js').ConversationMessageFetchResponse>;
    /**
     * Creates a new message.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationMessageCreateRequest} request
     * @returns {Promise<import('./v1.js').ConversationMessageCreateResponse>}
     */
    create(conversationId: string, request: import('./v1.js').ConversationMessageCreateRequest): Promise<import('./v1.js').ConversationMessageCreateResponse>;
    /**
     * Updates a message.
     *
     * @param {string} conversationId
     * @param {string} messageId
     * @param {import('./v1.js').ConversationMessageUpdateRequest} request
     * @returns {Promise<import('./v1.js').ConversationMessageUpdateResponse>}
     */
    update(conversationId: string, messageId: string, request: import('./v1.js').ConversationMessageUpdateRequest): Promise<import('./v1.js').ConversationMessageUpdateResponse>;
    /**
     * Deletes the message.
     *
     * @param {string} conversationId
     * @param {string} messageId
     * @returns {Promise<import('./v1.js').ConversationMessageDeleteResponse>}
     */
    delete(conversationId: string, messageId: string): Promise<import('./v1.js').ConversationMessageDeleteResponse>;
    /**
     * @param {string} conversationId
     * @param {string} messageId
     * @param {import('./v1.js').ConversationMessageUpvoteRequest} request
     * @returns {Promise<import('./v1.js').ConversationMessageUpvoteResponse>}
     */
    upvote(conversationId: string, messageId: string, request: import('./v1.js').ConversationMessageUpvoteRequest): Promise<import('./v1.js').ConversationMessageUpvoteResponse>;
    /**
     * @param {string} conversationId
     * @param {string} messageId
     * @param {import('./v1.js').ConversationMessageDownvoteRequest} request
     * @returns {Promise<import('./v1.js').ConversationMessageDownvoteResponse>}
     */
    downvote(conversationId: string, messageId: string, request: import('./v1.js').ConversationMessageDownvoteRequest): Promise<import('./v1.js').ConversationMessageDownvoteResponse>;
}
export default ConversationMessageClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
