/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Portal client.
 */
export class PortalClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all portals.
     *
     * @param {import('./v1.js').PortalListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PortalListResponse,import('./v1.js').PortalListStreamType>}
     */
    list(request?: import("./v1.js").PortalListRequest): ResponsePromise<import("./v1.js").PortalListResponse, import("./v1.js").PortalListStreamType>;
    /**
     * Fetches a portal.
     *
     * @param {string} portalId
     * @returns {ResponsePromise<import('./v1.js').PortalFetchResponse,never>}
     */
    fetch(portalId: string): ResponsePromise<import("./v1.js").PortalFetchResponse, never>;
    /**
     * Creates a new portal.
     *
     * @param {import('./v1.js').PortalCreateRequest} request
     * @returns {Promise<import('./v1.js').PortalCreateResponse>}
     */
    create(request: import("./v1.js").PortalCreateRequest): Promise<import("./v1.js").PortalCreateResponse>;
    /**
     * Updates a portal.
     *
     * @param {string} portalId
     * @param {import('./v1.js').PortalUpdateRequest} request
     * @returns {Promise<import('./v1.js').PortalUpdateResponse>}
     */
    update(portalId: string, request: import("./v1.js").PortalUpdateRequest): Promise<import("./v1.js").PortalUpdateResponse>;
    /**
     * Deletes the portal.
     *
     * @param {string} portalId
     * @returns {Promise<import('./v1.js').PortalDeleteResponse>}
     */
    delete(portalId: string): Promise<import("./v1.js").PortalDeleteResponse>;
}
export default PortalClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
