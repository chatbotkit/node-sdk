/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform content manual client.
 */
export class PlatformContentManualClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform content manuals.
     *
     * @param {import('./v1.js').PlatformContentManualListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformContentManualListResponse,import('./v1.js').PlatformContentManualListStreamType>}
     */
    list(request?: import("./v1.js").PlatformContentManualListRequest): ResponsePromise<import("./v1.js").PlatformContentManualListResponse, import("./v1.js").PlatformContentManualListStreamType>;
    /**
     * Searches platform content manuals.
     *
     * @param {import('./v1.js').PlatformContentManualSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformContentManualSearchResponse>}
     */
    search(request: import("./v1.js").PlatformContentManualSearchRequest): Promise<import("./v1.js").PlatformContentManualSearchResponse>;
    /**
     * Fetches a platform content manual.
     *
     * @param {string} manualId
     * @returns {ResponsePromise<import('./v1.js').PlatformContentManualFetchResponse,never>}
     */
    fetch(manualId: string): ResponsePromise<import("./v1.js").PlatformContentManualFetchResponse, never>;
}
export default PlatformContentManualClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
