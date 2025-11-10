/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform content doc client.
 */
export class PlatformContentDocClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform content docs.
     *
     * @param {import('./v1.js').PlatformContentDocListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformContentDocListResponse,import('./v1.js').PlatformContentDocListStreamType>}
     */
    list(request?: import("./v1.js").PlatformContentDocListRequest): ResponsePromise<import("./v1.js").PlatformContentDocListResponse, import("./v1.js").PlatformContentDocListStreamType>;
    /**
     * Fetches a platform content doc.
     *
     * @param {string} docId
     * @returns {ResponsePromise<import('./v1.js').PlatformContentDocFetchResponse,never>}
     */
    fetch(docId: string): ResponsePromise<import("./v1.js").PlatformContentDocFetchResponse, never>;
}
export default PlatformContentDocClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
