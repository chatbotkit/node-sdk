/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform content tutorial client.
 */
export class PlatformContentTutorialClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform content tutorials.
     *
     * @param {import('./v1.js').PlatformContentTutorialListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformContentTutorialListResponse,import('./v1.js').PlatformContentTutorialListStreamType>}
     */
    list(request?: import("./v1.js").PlatformContentTutorialListRequest): ResponsePromise<import("./v1.js").PlatformContentTutorialListResponse, import("./v1.js").PlatformContentTutorialListStreamType>;
    /**
     * Searches platform content tutorials.
     *
     * @param {import('./v1.js').PlatformContentTutorialSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformContentTutorialSearchResponse>}
     */
    search(request: import("./v1.js").PlatformContentTutorialSearchRequest): Promise<import("./v1.js").PlatformContentTutorialSearchResponse>;
    /**
     * Fetches a platform content tutorial.
     *
     * @param {string} tutorialId
     * @returns {ResponsePromise<import('./v1.js').PlatformContentTutorialFetchResponse,never>}
     */
    fetch(tutorialId: string): ResponsePromise<import("./v1.js").PlatformContentTutorialFetchResponse, never>;
}
export default PlatformContentTutorialClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
