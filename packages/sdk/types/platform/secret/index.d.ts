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
    list(request?: import("./v1.js").PlatformSecretListRequest | undefined): ResponsePromise<import('./v1.js').PlatformSecretListResponse, import('./v1.js').PlatformSecretListStreamType>;
}
export default PlatformSecretClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
