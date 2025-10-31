/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Partner user client.
 */
export class PartnerUserClient extends ChatBotKitClient {
    /**
     * @type {PartnerUserTokenClient} token client
     */
    token: PartnerUserTokenClient;
    /**
     * Retrieves a list of all users.
     *
     * @param {import('./v1.js').PartnerUserListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PartnerUserListResponse,import('./v1.js').PartnerUserListStreamType>}
     */
    list(request?: import("./v1.js").PartnerUserListRequest): ResponsePromise<import("./v1.js").PartnerUserListResponse, import("./v1.js").PartnerUserListStreamType>;
    /**
     * Fetches a user.
     *
     * @param {string} userId
     * @returns {ResponsePromise<import('./v1.js').PartnerUserFetchResponse,never>}
     */
    fetch(userId: string): ResponsePromise<import("./v1.js").PartnerUserFetchResponse, never>;
    /**
     * Creates a new user.
     *
     * @param {import('./v1.js').PartnerUserCreateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserCreateResponse>}
     */
    create(request: import("./v1.js").PartnerUserCreateRequest): Promise<import("./v1.js").PartnerUserCreateResponse>;
    /**
     * Updates the user.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserUpdateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserUpdateResponse>}
     */
    update(userId: string, request: import("./v1.js").PartnerUserUpdateRequest): Promise<import("./v1.js").PartnerUserUpdateResponse>;
    /**
     * Deletes the user.
     *
     * @param {string} userId
     * @returns {Promise<import('./v1.js').PartnerUserDeleteResponse>}
     */
    delete(userId: string): Promise<import("./v1.js").PartnerUserDeleteResponse>;
}
export default PartnerUserClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
import { PartnerUserTokenClient } from './token/index.js';
