/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Action client.
 */
export class PlatformActionClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform actions.
     *
     * @param {import('./v1.js').PlatformActionListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformActionListResponse,import('./v1.js').PlatformActionListStreamType>}
     */
    list(request?: import("./v1.js").PlatformActionListRequest): ResponsePromise<import("./v1.js").PlatformActionListResponse, import("./v1.js").PlatformActionListStreamType>;
}
export default PlatformActionClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
