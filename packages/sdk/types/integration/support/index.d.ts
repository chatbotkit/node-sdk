/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class SupportIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all support integrations.
     *
     * @param {import('./v1.js').SupportIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SupportIntegrationListResponse,import('./v1.js').SupportIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").SupportIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').SupportIntegrationListResponse, import('./v1.js').SupportIntegrationListStreamType>;
    /**
     * Fetches a support integration.
     *
     * @param {string} supportId
     * @returns {ResponsePromise<import('./v1.js').SupportIntegrationFetchResponse,never>}
     */
    fetch(supportId: string): ResponsePromise<import('./v1.js').SupportIntegrationFetchResponse, never>;
    /**
     * Creates a new support integration.
     *
     * @param {import('./v1.js').SupportIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').SupportIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').SupportIntegrationCreateRequest): Promise<import('./v1.js').SupportIntegrationCreateResponse>;
    /**
     * Updates a support integration.
     *
     * @param {string} supportId
     * @param {import('./v1.js').SupportIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').SupportIntegrationUpdateResponse>}
     */
    update(supportId: string, request: import('./v1.js').SupportIntegrationUpdateRequest): Promise<import('./v1.js').SupportIntegrationUpdateResponse>;
    /**
     * Deletes a support integration.
     *
     * @param {string} supportId
     * @returns {Promise<import('./v1.js').SupportIntegrationDeleteResponse>}
     */
    delete(supportId: string): Promise<import('./v1.js').SupportIntegrationDeleteResponse>;
}
export default SupportIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
