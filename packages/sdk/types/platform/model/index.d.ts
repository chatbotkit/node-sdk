/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Model client.
 */
export class PlatformModelClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform models.
     *
     * @param {import('./v1.js').PlatformModelListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformModelListResponse,import('./v1.js').PlatformModelListStreamType>}
     */
    list(request?: import("./v1.js").PlatformModelListRequest | undefined): ResponsePromise<import('./v1.js').PlatformModelListResponse, import('./v1.js').PlatformModelListStreamType>;
}
export default PlatformModelClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
