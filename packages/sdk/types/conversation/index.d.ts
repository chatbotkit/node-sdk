/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Conversation client.
 */
export class ConversationClient extends ChatBotKitClient {
    /**
     * @type {ConversationMessageClient} message client
     */
    message: ConversationMessageClient;
    /**
     * @type {ConversationSessionClient} session client
     */
    session: ConversationSessionClient;
    /**
     * @type {ConversationAttachmentClient} attachment client
     */
    attachment: ConversationAttachmentClient;
    /**
     * Retrieves a list of all conversations.
     *
     * @param {import('./v1.js').ConversationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
     */
    list(request?: import("./v1.js").ConversationListRequest | undefined): ResponsePromise<import('./v1.js').ConversationListResponse, import('./v1.js').ConversationListStreamType>;
    /**
     * Fetches a conversation.
     *
     * @param {string} conversationId
     * @returns {Promise<import('./v1.js').ConversationFetchResponse>}
     */
    fetch(conversationId: string): Promise<import('./v1.js').ConversationFetchResponse>;
    /**
     * Creates a new conversation.
     *
     * @param {import('./v1.js').ConversationCreateRequest} request
     * @returns {Promise<import('./v1.js').ConversationCreateResponse>}
     */
    create(request: import('./v1.js').ConversationCreateRequest): Promise<import('./v1.js').ConversationCreateResponse>;
    /**
     * Updates a conversation.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationUpdateRequest} request
     * @returns {Promise<import('./v1.js').ConversationUpdateResponse>}
     */
    update(conversationId: string, request: import('./v1.js').ConversationUpdateRequest): Promise<import('./v1.js').ConversationUpdateResponse>;
    /**
     * Deletes the conversation.
     *
     * @param {string} conversationId
     * @returns {Promise<import('./v1.js').ConversationDeleteResponse>}
     */
    delete(conversationId: string): Promise<import('./v1.js').ConversationDeleteResponse>;
    /**
     * @overload
     * @param {null} conversationId
     * @param {import('./v1.js').ConversationCompleteRequest} request
     * @returns {ResponsePromise<import('./v1.js').ConversationCompleteResponse,import('./v1.js').ConversationCompleteStreamType>}
     */
    complete(conversationId: null, request: import('./v1.js').ConversationCompleteRequest): ResponsePromise<import('./v1.js').ConversationCompleteResponse, import('./v1.js').ConversationCompleteStreamType>;
    /**
     * @overload
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationCompleteMessageRequest} request
     * @returns {ResponsePromise<import('./v1.js').ConversationCompleteMessageResponse,import('./v1.js').ConversationCompleteMessageStreamType>}
     */
    complete(conversationId: string, request: import('./v1.js').ConversationCompleteMessageRequest): ResponsePromise<import('./v1.js').ConversationCompleteMessageResponse, import('./v1.js').ConversationCompleteMessageStreamType>;
    /**
     * Sends a message to the conversation.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationSendMessageRequest} request
     * @returns {ResponsePromise<import('./v1.js').ConversationSendMessageResponse,import('./v1.js').ConversationSendMessageStreamType>}
     */
    send(conversationId: string, request: import('./v1.js').ConversationSendMessageRequest): ResponsePromise<import('./v1.js').ConversationSendMessageResponse, import('./v1.js').ConversationSendMessageStreamType>;
    /**
     * Receives a message from the conversation.
     *
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationReceiveMessageRequest} request
     * @returns {ResponsePromise<import('./v1.js').ConversationReceiveMessageResponse,import('./v1.js').ConversationReceiveMessageStreamType>}
     */
    receive(conversationId: string, request: import('./v1.js').ConversationReceiveMessageRequest): ResponsePromise<import('./v1.js').ConversationReceiveMessageResponse, import('./v1.js').ConversationReceiveMessageStreamType>;
    /**
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationUpvoteRequest} request
     * @returns {Promise<import('./v1.js').ConversationUpvoteResponse>}
     */
    upvote(conversationId: string, request: import('./v1.js').ConversationUpvoteRequest): Promise<import('./v1.js').ConversationUpvoteResponse>;
    /**
     * @param {string} conversationId
     * @param {import('./v1.js').ConversationDownvoteRequest} request
     * @returns {Promise<import('./v1.js').ConversationDownvoteResponse>}
     */
    downvote(conversationId: string, request: import('./v1.js').ConversationDownvoteRequest): Promise<import('./v1.js').ConversationDownvoteResponse>;
}
export default ConversationClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { ConversationMessageClient } from './message/index.js';
import { ConversationSessionClient } from './session/index.js';
import { ConversationAttachmentClient } from './attachment/index.js';
