/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class GooglechatIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all Google Chat integrations.
     *
     * @param {import('./v1.js').GooglechatIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').GooglechatIntegrationListResponse,import('./v1.js').GooglechatIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").GooglechatIntegrationListRequest): ResponsePromise<import("./v1.js").GooglechatIntegrationListResponse, import("./v1.js").GooglechatIntegrationListStreamType>;
    /**
     * Fetches a Google Chat integration.
     *
     * @param {string} googlechatId
     * @returns {ResponsePromise<import('./v1.js').GooglechatIntegrationFetchResponse,never>}
     */
    fetch(googlechatId: string): ResponsePromise<import("./v1.js").GooglechatIntegrationFetchResponse, never>;
    /**
     * Creates a new Google Chat integration.
     *
     * @param {import('./v1.js').GooglechatIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').GooglechatIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").GooglechatIntegrationCreateRequest): Promise<import("./v1.js").GooglechatIntegrationCreateResponse>;
    /**
     * Updates a Google Chat integration.
     *
     * @param {string} googlechatId
     * @param {import('./v1.js').GooglechatIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').GooglechatIntegrationUpdateResponse>}
     */
    update(googlechatId: string, request: import("./v1.js").GooglechatIntegrationUpdateRequest): Promise<import("./v1.js").GooglechatIntegrationUpdateResponse>;
    /**
     * Deletes a Google Chat integration.
     *
     * @param {string} googlechatId
     * @returns {Promise<import('./v1.js').GooglechatIntegrationDeleteResponse>}
     */
    delete(googlechatId: string): Promise<import("./v1.js").GooglechatIntegrationDeleteResponse>;
    /**
     * Setups a Google Chat integration.
     *
     * @param {string} googlechatId
     * @returns {Promise<import('./v1.js').GooglechatIntegrationSetupResponse>}
     */
    setup(googlechatId: string): Promise<import("./v1.js").GooglechatIntegrationSetupResponse>;
}
export default GooglechatIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
