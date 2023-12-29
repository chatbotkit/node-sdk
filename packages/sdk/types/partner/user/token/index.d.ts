/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Partner user token client.
 */
export class PartnerUserTokenClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all user tokens.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserTokenListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PartnerUserTokenListResponse,import('./v1.js').PartnerUserTokenListStreamType>}
     */
    list(userId: string, request?: import("./v1.js").PartnerUserTokenListRequest | undefined): ResponsePromise<import('./v1.js').PartnerUserTokenListResponse, import('./v1.js').PartnerUserTokenListStreamType>;
    /**
     * Creates a new user token.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserTokenCreateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserTokenCreateResponse>}
     */
    create(userId: string, request: import('./v1.js').PartnerUserTokenCreateRequest): Promise<import('./v1.js').PartnerUserTokenCreateResponse>;
    /**
     * Deletes the user token.
     *
     * @param {string} userId
     * @param {string} tokenId
     * @returns {Promise<import('./v1.js').PartnerUserTokenDeleteResponse>}
     */
    delete(userId: string, tokenId: string): Promise<import('./v1.js').PartnerUserTokenDeleteResponse>;
}
export default PartnerUserTokenClient;
export type ResponsePromise<T, U> = import('../../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
