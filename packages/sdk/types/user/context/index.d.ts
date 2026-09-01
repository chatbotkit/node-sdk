/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * User context client.
 */
export class UserContextClient extends ChatBotKitClient {
    /**
     * Retrieves a list of user contexts.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserContextListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').UserContextListResponse,import('./v1.js').UserContextListStreamType>}
     */
    list(userId: string, request?: import("./v1.js").UserContextListRequest): ResponsePromise<import("./v1.js").UserContextListResponse, import("./v1.js").UserContextListStreamType>;
    /**
     * Fetches a user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @returns {ResponsePromise<import('./v1.js').UserContextFetchResponse,never>}
     */
    fetch(userId: string, contextId: string): ResponsePromise<import("./v1.js").UserContextFetchResponse, never>;
    /**
     * Creates a user context.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserContextCreateRequest} request
     * @returns {Promise<import('./v1.js').UserContextCreateResponse>}
     */
    create(userId: string, request: import("./v1.js").UserContextCreateRequest): Promise<import("./v1.js").UserContextCreateResponse>;
    /**
     * Updates a user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @param {import('./v1.js').UserContextUpdateRequest} request
     * @returns {Promise<import('./v1.js').UserContextUpdateResponse>}
     */
    update(userId: string, contextId: string, request: import("./v1.js").UserContextUpdateRequest): Promise<import("./v1.js").UserContextUpdateResponse>;
    /**
     * Deletes a user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @returns {Promise<import('./v1.js').UserContextDeleteResponse>}
     */
    delete(userId: string, contextId: string): Promise<import("./v1.js").UserContextDeleteResponse>;
}
export default UserContextClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
