/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Secret client.
 */
export class PlatformSecretClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform secrets.
     *
     * @param {import('./v1.js').PlatformSecretListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformSecretListResponse,import('./v1.js').PlatformSecretListStreamType>}
     */
    list(request?: import("./v1.js").PlatformSecretListRequest): ResponsePromise<import("./v1.js").PlatformSecretListResponse, import("./v1.js").PlatformSecretListStreamType>;
    /**
     * Searches platform secrets.
     *
     * @param {import('./v1.js').PlatformSecretSearchRequest} request
     * @returns {Promise<import('./v1.js').PlatformSecretSearchResponse>}
     */
    search(request: import("./v1.js").PlatformSecretSearchRequest): Promise<import("./v1.js").PlatformSecretSearchResponse>;
}
export default PlatformSecretClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
