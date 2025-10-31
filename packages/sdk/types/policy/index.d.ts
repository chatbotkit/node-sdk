/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Policy client.
 */
export class PolicyClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all policies.
     *
     * @param {import('./v1.js').PolicyListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PolicyListResponse,import('./v1.js').PolicyListStreamType>}
     */
    list(request?: import("./v1.js").PolicyListRequest): ResponsePromise<import("./v1.js").PolicyListResponse, import("./v1.js").PolicyListStreamType>;
    /**
     * Fetches a policy.
     *
     * @param {string} policyId
     * @returns {ResponsePromise<import('./v1.js').PolicyFetchResponse,never>}
     */
    fetch(policyId: string): ResponsePromise<import("./v1.js").PolicyFetchResponse, never>;
    /**
     * Creates a new policy.
     *
     * @param {import('./v1.js').PolicyCreateRequest} request
     * @returns {Promise<import('./v1.js').PolicyCreateResponse>}
     */
    create(request: import("./v1.js").PolicyCreateRequest): Promise<import("./v1.js").PolicyCreateResponse>;
    /**
     * Updates a policy.
     *
     * @param {string} policyId
     * @param {import('./v1.js').PolicyUpdateRequest} request
     * @returns {Promise<import('./v1.js').PolicyUpdateResponse>}
     */
    update(policyId: string, request: import("./v1.js").PolicyUpdateRequest): Promise<import("./v1.js").PolicyUpdateResponse>;
    /**
     * Deletes the policy.
     *
     * @param {string} policyId
     * @returns {Promise<import('./v1.js').PolicyDeleteResponse>}
     */
    delete(policyId: string): Promise<import("./v1.js").PolicyDeleteResponse>;
}
export default PolicyClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
