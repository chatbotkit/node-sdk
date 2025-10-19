/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Platform example client.
 */
export class PlatformExampleClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform examples.
     *
     * @param {import('./v1.js').PlatformExampleListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformExampleListResponse,import('./v1.js').PlatformExampleListStreamType>}
     */
    list(request?: import("./v1.js").PlatformExampleListRequest): ResponsePromise<import("./v1.js").PlatformExampleListResponse, import("./v1.js").PlatformExampleListStreamType>;
}
export default PlatformExampleClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
