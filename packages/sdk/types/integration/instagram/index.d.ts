/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class InstagramIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all instagram integrations.
     *
     * @param {import('./v1.js').InstagramIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').InstagramIntegrationListResponse,import('./v1.js').InstagramIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").InstagramIntegrationListRequest): ResponsePromise<import("./v1.js").InstagramIntegrationListResponse, import("./v1.js").InstagramIntegrationListStreamType>;
    /**
     * Fetches an instagram integration.
     *
     * @param {string} instagramId
     * @returns {ResponsePromise<import('./v1.js').InstagramIntegrationFetchResponse,never>}
     */
    fetch(instagramId: string): ResponsePromise<import("./v1.js").InstagramIntegrationFetchResponse, never>;
    /**
     * Creates a new instagram integration.
     *
     * @param {import('./v1.js').InstagramIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').InstagramIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").InstagramIntegrationCreateRequest): Promise<import("./v1.js").InstagramIntegrationCreateResponse>;
    /**
     * Updates an instagram integration.
     *
     * @param {string} instagramId
     * @param {import('./v1.js').InstagramIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').InstagramIntegrationUpdateResponse>}
     */
    update(instagramId: string, request: import("./v1.js").InstagramIntegrationUpdateRequest): Promise<import("./v1.js").InstagramIntegrationUpdateResponse>;
    /**
     * Deletes an instagram integration.
     *
     * @param {string} instagramId
     * @returns {Promise<import('./v1.js').InstagramIntegrationDeleteResponse>}
     */
    delete(instagramId: string): Promise<import("./v1.js").InstagramIntegrationDeleteResponse>;
    /**
     * Setups an instagram integration.
     *
     * @param {string} instagramId
     * @returns {Promise<import('./v1.js').InstagramIntegrationSetupResponse>}
     */
    setup(instagramId: string): Promise<import("./v1.js").InstagramIntegrationSetupResponse>;
}
export default InstagramIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
