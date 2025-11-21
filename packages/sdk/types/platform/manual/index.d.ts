/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform manual client.
 */
export class PlatformManualClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform manuals.
     *
     * @param {import('./v1.js').PlatformManualListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformManualListResponse,import('./v1.js').PlatformManualListStreamType>}
     */
    list(request?: import("./v1.js").PlatformManualListRequest): ResponsePromise<import("./v1.js").PlatformManualListResponse, import("./v1.js").PlatformManualListStreamType>;
    /**
     * Searches platform manuals.
     *
     * @param {import('./v1.js').PlatformManualSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformManualSearchResponse>}
     */
    search(request: import("./v1.js").PlatformManualSearchRequest): Promise<import("./v1.js").PlatformManualSearchResponse>;
    /**
     * Fetches a platform manual.
     *
     * @param {string} manualId
     * @returns {ResponsePromise<import('./v1.js').PlatformManualFetchResponse,never>}
     */
    fetch(manualId: string): ResponsePromise<import("./v1.js").PlatformManualFetchResponse, never>;
}
export default PlatformManualClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
