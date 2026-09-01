/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * User token client.
 */
export class UserTokenClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all user tokens.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserTokenListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').UserTokenListResponse,import('./v1.js').UserTokenListStreamType>}
     */
    list(userId: string, request?: import("./v1.js").UserTokenListRequest): ResponsePromise<import("./v1.js").UserTokenListResponse, import("./v1.js").UserTokenListStreamType>;
    /**
     * Creates a new user token.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserTokenCreateRequest} request
     * @returns {Promise<import('./v1.js').UserTokenCreateResponse>}
     */
    create(userId: string, request: import("./v1.js").UserTokenCreateRequest): Promise<import("./v1.js").UserTokenCreateResponse>;
    /**
     * Updates the user token.
     *
     * @param {string} userId
     * @param {string} tokenId
     * @param {import('./v1.js').UserTokenUpdateRequest} request
     * @returns {Promise<import('./v1.js').UserTokenUpdateResponse>}
     */
    update(userId: string, tokenId: string, request: import("./v1.js").UserTokenUpdateRequest): Promise<import("./v1.js").UserTokenUpdateResponse>;
    /**
     * Deletes the user token.
     *
     * @param {string} userId
     * @param {string} tokenId
     * @returns {Promise<import('./v1.js').UserTokenDeleteResponse>}
     */
    delete(userId: string, tokenId: string): Promise<import("./v1.js").UserTokenDeleteResponse>;
}
export default UserTokenClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
