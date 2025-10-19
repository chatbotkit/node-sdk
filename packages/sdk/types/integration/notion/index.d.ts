/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class NotionIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all notion integrations.
     *
     * @param {import('./v1.js').NotionIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').NotionIntegrationListResponse,import('./v1.js').NotionIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").NotionIntegrationListRequest): ResponsePromise<import("./v1.js").NotionIntegrationListResponse, import("./v1.js").NotionIntegrationListStreamType>;
    /**
     * Fetches a notion integration.
     *
     * @param {string} notionId
     * @returns {ResponsePromise<import('./v1.js').NotionIntegrationFetchResponse,never>}
     */
    fetch(notionId: string): ResponsePromise<import("./v1.js").NotionIntegrationFetchResponse, never>;
    /**
     * Creates a new notion integration.
     *
     * @param {import('./v1.js').NotionIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').NotionIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").NotionIntegrationCreateRequest): Promise<import("./v1.js").NotionIntegrationCreateResponse>;
    /**
     * Updates a notion integration.
     *
     * @param {string} notionId
     * @param {import('./v1.js').NotionIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').NotionIntegrationUpdateResponse>}
     */
    update(notionId: string, request: import("./v1.js").NotionIntegrationUpdateRequest): Promise<import("./v1.js").NotionIntegrationUpdateResponse>;
    /**
     * Deletes a notion integration.
     *
     * @param {string} notionId
     * @returns {Promise<import('./v1.js').NotionIntegrationDeleteResponse>}
     */
    delete(notionId: string): Promise<import("./v1.js").NotionIntegrationDeleteResponse>;
    /**
     * Syncs a notion integration.
     *
     * @param {string} notionId
     * @returns {Promise<import('./v1.js').NotionIntegrationSyncResponse>}
     */
    sync(notionId: string): Promise<import("./v1.js").NotionIntegrationSyncResponse>;
}
export default NotionIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
