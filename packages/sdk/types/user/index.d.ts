/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * User client.
 */
export class UserClient extends ChatBotKitClient {
    /**
     * @type {UserContextClient} context client
     */
    context: UserContextClient;
    /**
     * @type {UserSessionClient} session client
     */
    session: UserSessionClient;
    /**
     * @type {UserTokenClient} token client
     */
    token: UserTokenClient;
    /**
     * Retrieves a list of all users.
     *
     * @param {import('./v1.js').UserListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').UserListResponse,import('./v1.js').UserListStreamType>}
     */
    list(request?: import("./v1.js").UserListRequest): ResponsePromise<import("./v1.js").UserListResponse, import("./v1.js").UserListStreamType>;
    /**
     * Fetches a user.
     *
     * @param {string} userId
     * @returns {ResponsePromise<import('./v1.js').UserFetchResponse,never>}
     */
    fetch(userId: string): ResponsePromise<import("./v1.js").UserFetchResponse, never>;
    /**
     * Creates a new user.
     *
     * @param {import('./v1.js').UserCreateRequest} request
     * @returns {Promise<import('./v1.js').UserCreateResponse>}
     */
    create(request: import("./v1.js").UserCreateRequest): Promise<import("./v1.js").UserCreateResponse>;
    /**
     * Updates the user.
     *
     * @param {string} userId
     * @param {import('./v1.js').UserUpdateRequest} request
     * @returns {Promise<import('./v1.js').UserUpdateResponse>}
     */
    update(userId: string, request: import("./v1.js").UserUpdateRequest): Promise<import("./v1.js").UserUpdateResponse>;
    /**
     * Deletes the user.
     *
     * @param {string} userId
     * @returns {Promise<import('./v1.js').UserDeleteResponse>}
     */
    delete(userId: string): Promise<import("./v1.js").UserDeleteResponse>;
}
export default UserClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { UserContextClient } from './context/index.js';
import { UserSessionClient } from './session/index.js';
import { UserTokenClient } from './token/index.js';
