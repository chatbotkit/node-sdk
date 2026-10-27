/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class ChatIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all Chat integrations.
     *
     * @param {import('./v1.js').ChatIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ChatIntegrationListResponse,import('./v1.js').ChatIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").ChatIntegrationListRequest): ResponsePromise<import("./v1.js").ChatIntegrationListResponse, import("./v1.js").ChatIntegrationListStreamType>;
    /**
     * Fetches a Chat integration.
     *
     * @param {string} chatId
     * @returns {ResponsePromise<import('./v1.js').ChatIntegrationFetchResponse,never>}
     */
    fetch(chatId: string): ResponsePromise<import("./v1.js").ChatIntegrationFetchResponse, never>;
    /**
     * Creates a new Chat integration.
     *
     * @param {import('./v1.js').ChatIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').ChatIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").ChatIntegrationCreateRequest): Promise<import("./v1.js").ChatIntegrationCreateResponse>;
    /**
     * Updates a Chat integration.
     *
     * @param {string} chatId
     * @param {import('./v1.js').ChatIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').ChatIntegrationUpdateResponse>}
     */
    update(chatId: string, request: import("./v1.js").ChatIntegrationUpdateRequest): Promise<import("./v1.js").ChatIntegrationUpdateResponse>;
    /**
     * Deletes a Chat integration.
     *
     * @param {string} chatId
     * @returns {Promise<import('./v1.js').ChatIntegrationDeleteResponse>}
     */
    delete(chatId: string): Promise<import("./v1.js").ChatIntegrationDeleteResponse>;
    /**
     * Setups a Chat integration.
     *
     * @param {string} chatId
     * @returns {Promise<import('./v1.js').ChatIntegrationSetupResponse>}
     */
    setup(chatId: string): Promise<import("./v1.js").ChatIntegrationSetupResponse>;
    /**
     * Lets the agent of a Chat integration start a message to a group or to
     * another handle of its server.
     *
     * @param {string} chatId
     * @param {import('./v1.js').ChatInitiateRequest} request
     * @returns {Promise<import('./v1.js').ChatInitiateResponse>}
     */
    initiate(chatId: string, request: import("./v1.js").ChatInitiateRequest): Promise<import("./v1.js").ChatInitiateResponse>;
    /**
     * Lists the other members of a Chat integration's server.
     *
     * @param {string} chatId
     * @returns {ResponsePromise<import('./v1.js').ChatIntegrationMemberListResponse,never>}
     */
    listMembers(chatId: string): ResponsePromise<import("./v1.js").ChatIntegrationMemberListResponse, never>;
    /**
     * Lists the groups of a Chat integration's server.
     *
     * @param {string} chatId
     * @returns {ResponsePromise<import('./v1.js').ChatIntegrationGroupListResponse,never>}
     */
    listGroups(chatId: string): ResponsePromise<import("./v1.js").ChatIntegrationGroupListResponse, never>;
    /**
     * Creates a short-lived chat session for a contact and the destinations it
     * may send to and list.
     *
     * @param {string} chatId
     * @param {import('./v1.js').ChatIntegrationSessionCreateRequest} request
     * @returns {Promise<import('./v1.js').ChatIntegrationSessionCreateResponse>}
     */
    createSession(chatId: string, request: import("./v1.js").ChatIntegrationSessionCreateRequest): Promise<import("./v1.js").ChatIntegrationSessionCreateResponse>;
    /**
     * Sends a message from a contact to a #group or an @handle.
     *
     * @param {string} chatId
     * @param {import('./v1.js').ChatIntegrationMessageSendRequest} request
     * @returns {Promise<import('./v1.js').ChatIntegrationMessageSendResponse>}
     */
    sendMessage(chatId: string, request: import("./v1.js").ChatIntegrationMessageSendRequest): Promise<import("./v1.js").ChatIntegrationMessageSendResponse>;
    /**
     * Lists the recent public messages of a group or a direct chat, after the
     * `since` cursor when given.
     *
     * @param {string} chatId
     * @param {import('./v1.js').ChatIntegrationMessageListRequest} request
     * @returns {ResponsePromise<import('./v1.js').ChatIntegrationMessageListResponse,never>}
     */
    listMessages(chatId: string, request: import("./v1.js").ChatIntegrationMessageListRequest): ResponsePromise<import("./v1.js").ChatIntegrationMessageListResponse, never>;
}
export default ChatIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
