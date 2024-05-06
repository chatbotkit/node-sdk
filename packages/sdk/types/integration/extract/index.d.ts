/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class ExtractIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all extract integrations.
     *
     * @param {import('./v1.js').ExtractIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ExtractIntegrationListResponse,import('./v1.js').ExtractIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").ExtractIntegrationListRequest | undefined): ResponsePromise<import('./v1.js').ExtractIntegrationListResponse, import('./v1.js').ExtractIntegrationListStreamType>;
    /**
     * Fetches a extract integration.
     *
     * @param {string} extractId
     * @returns {Promise<import('./v1.js').ExtractIntegrationFetchResponse>}
     */
    fetch(extractId: string): Promise<import('./v1.js').ExtractIntegrationFetchResponse>;
    /**
     * Creates a new extract integration.
     *
     * @param {import('./v1.js').ExtractIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').ExtractIntegrationCreateResponse>}
     */
    create(request: import('./v1.js').ExtractIntegrationCreateRequest): Promise<import('./v1.js').ExtractIntegrationCreateResponse>;
    /**
     * Updates a extract integration.
     *
     * @param {string} extractId
     * @param {import('./v1.js').ExtractIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').ExtractIntegrationUpdateResponse>}
     */
    update(extractId: string, request: import('./v1.js').ExtractIntegrationUpdateRequest): Promise<import('./v1.js').ExtractIntegrationUpdateResponse>;
    /**
     * Deletes a extract integration.
     *
     * @param {string} extractId
     * @returns {Promise<import('./v1.js').ExtractIntegrationDeleteResponse>}
     */
    delete(extractId: string): Promise<import('./v1.js').ExtractIntegrationDeleteResponse>;
}
export default ExtractIntegrationClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
