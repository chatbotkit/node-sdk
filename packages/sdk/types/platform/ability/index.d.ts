/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Ability client.
 */
export class PlatformAbilityClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all platform abilities.
     *
     * @param {import('./v1.js').PlatformAbilityListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PlatformAbilityListResponse,import('./v1.js').PlatformAbilityListStreamType>}
     */
    list(request?: import("./v1.js").PlatformAbilityListRequest): ResponsePromise<import("./v1.js").PlatformAbilityListResponse, import("./v1.js").PlatformAbilityListStreamType>;
}
export default PlatformAbilityClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
