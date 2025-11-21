/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform content doc client.
 */
export class PlatformDocClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform content docs.
     *
     * @param {import('./v1.js').PlatformDocListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformDocListResponse,import('./v1.js').PlatformDocListStreamType>}
     */
    list(request?: import("./v1.js").PlatformDocListRequest): ResponsePromise<import("./v1.js").PlatformDocListResponse, import("./v1.js").PlatformDocListStreamType>;
    /**
     * Searches platform content docs.
     *
     * @param {import('./v1.js').PlatformDocSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformDocSearchResponse>}
     */
    search(request: import("./v1.js").PlatformDocSearchRequest): Promise<import("./v1.js").PlatformDocSearchResponse>;
    /**
     * Fetches a platform content doc.
     *
     * @param {string} docId
     * @returns {ResponsePromise<import('./v1.js').PlatformDocFetchResponse,never>}
     */
    fetch(docId: string): ResponsePromise<import("./v1.js").PlatformDocFetchResponse, never>;
}
export default PlatformDocClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
