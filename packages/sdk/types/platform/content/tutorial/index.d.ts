/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform content tutorial client.
 */
export class PlatformTutorialClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform content tutorials.
     *
     * @param {import('./v1.js').PlatformTutorialListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformTutorialListResponse,import('./v1.js').PlatformTutorialListStreamType>}
     */
    list(request?: import("./v1.js").PlatformTutorialListRequest): ResponsePromise<import("./v1.js").PlatformTutorialListResponse, import("./v1.js").PlatformTutorialListStreamType>;
    /**
     * Searches platform content tutorials.
     *
     * @param {import('./v1.js').PlatformTutorialSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformTutorialSearchResponse>}
     */
    search(request: import("./v1.js").PlatformTutorialSearchRequest): Promise<import("./v1.js").PlatformTutorialSearchResponse>;
    /**
     * Fetches a platform content tutorial.
     *
     * @param {string} tutorialId
     * @returns {ResponsePromise<import('./v1.js').PlatformTutorialFetchResponse,never>}
     */
    fetch(tutorialId: string): ResponsePromise<import("./v1.js").PlatformTutorialFetchResponse, never>;
}
export default PlatformTutorialClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
