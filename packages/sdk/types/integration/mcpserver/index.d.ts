/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class McpServerIntegrationClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all mcpserver integrations.
     *
     * @param {import('./v1.js').McpServerIntegrationListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').McpServerIntegrationListResponse,import('./v1.js').McpServerIntegrationListStreamType>}
     */
    list(request?: import("./v1.js").McpServerIntegrationListRequest): ResponsePromise<import("./v1.js").McpServerIntegrationListResponse, import("./v1.js").McpServerIntegrationListStreamType>;
    /**
     * Fetches a mcpserver integration.
     *
     * @param {string} mcpserverId
     * @returns {ResponsePromise<import('./v1.js').McpServerIntegrationFetchResponse,never>}
     */
    fetch(mcpserverId: string): ResponsePromise<import("./v1.js").McpServerIntegrationFetchResponse, never>;
    /**
     * Creates a new mcpserver integration.
     *
     * @param {import('./v1.js').McpServerIntegrationCreateRequest} request
     * @returns {Promise<import('./v1.js').McpServerIntegrationCreateResponse>}
     */
    create(request: import("./v1.js").McpServerIntegrationCreateRequest): Promise<import("./v1.js").McpServerIntegrationCreateResponse>;
    /**
     * Updates a mcpserver integration.
     *
     * @param {string} mcpserverId
     * @param {import('./v1.js').McpServerIntegrationUpdateRequest} request
     * @returns {Promise<import('./v1.js').McpServerIntegrationUpdateResponse>}
     */
    update(mcpserverId: string, request: import("./v1.js").McpServerIntegrationUpdateRequest): Promise<import("./v1.js").McpServerIntegrationUpdateResponse>;
    /**
     * Deletes a mcpserver integration.
     *
     * @param {string} mcpserverId
     * @returns {Promise<import('./v1.js').McpServerIntegrationDeleteResponse>}
     */
    delete(mcpserverId: string): Promise<import("./v1.js").McpServerIntegrationDeleteResponse>;
}
export default McpServerIntegrationClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
