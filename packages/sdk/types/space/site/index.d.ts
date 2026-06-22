/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Space site client.
 */
export class SpaceSiteClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all sites in a space.
     *
     * @param {string} spaceId
     * @param {import('./v1.js').SpaceSiteListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SpaceSiteListResponse,import('./v1.js').SpaceSiteListStreamType>}
     */
    list(spaceId: string, request?: import("./v1.js").SpaceSiteListRequest): ResponsePromise<import("./v1.js").SpaceSiteListResponse, import("./v1.js").SpaceSiteListStreamType>;
    /**
     * Fetches a space site.
     *
     * @param {string} spaceId
     * @param {string} siteId
     * @returns {ResponsePromise<import('./v1.js').SpaceSiteFetchResponse,never>}
     */
    fetch(spaceId: string, siteId: string): ResponsePromise<import("./v1.js").SpaceSiteFetchResponse, never>;
    /**
     * Creates a new space site.
     *
     * @param {string} spaceId
     * @param {import('./v1.js').SpaceSiteCreateRequest} request
     * @returns {Promise<import('./v1.js').SpaceSiteCreateResponse>}
     */
    create(spaceId: string, request: import("./v1.js").SpaceSiteCreateRequest): Promise<import("./v1.js").SpaceSiteCreateResponse>;
    /**
     * Updates a space site.
     *
     * @param {string} spaceId
     * @param {string} siteId
     * @param {import('./v1.js').SpaceSiteUpdateRequest} request
     * @returns {Promise<import('./v1.js').SpaceSiteUpdateResponse>}
     */
    update(spaceId: string, siteId: string, request: import("./v1.js").SpaceSiteUpdateRequest): Promise<import("./v1.js").SpaceSiteUpdateResponse>;
    /**
     * Deletes a space site.
     *
     * @param {string} spaceId
     * @param {string} siteId
     * @returns {Promise<import('./v1.js').SpaceSiteDeleteResponse>}
     */
    delete(spaceId: string, siteId: string): Promise<import("./v1.js").SpaceSiteDeleteResponse>;
}
export default SpaceSiteClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
