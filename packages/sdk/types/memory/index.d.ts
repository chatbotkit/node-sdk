/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Memory client.
 */
export class MemoryClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all memories.
     *
     * @param {import('./v1.js').MemoryListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').MemoryListResponse,import('./v1.js').MemoryListStreamType>}
     */
    list(request?: import("./v1.js").MemoryListRequest): ResponsePromise<import("./v1.js").MemoryListResponse, import("./v1.js").MemoryListStreamType>;
    /**
     * Fetches a memory.
     *
     * @param {string} memoryId
     * @returns {ResponsePromise<import('./v1.js').MemoryFetchResponse,never>}
     */
    fetch(memoryId: string): ResponsePromise<import("./v1.js").MemoryFetchResponse, never>;
    /**
     * Creates a new memory.
     *
     * @param {import('./v1.js').MemoryCreateRequest} request
     * @returns {Promise<import('./v1.js').MemoryCreateResponse>}
     */
    create(request: import("./v1.js").MemoryCreateRequest): Promise<import("./v1.js").MemoryCreateResponse>;
    /**
     * Updates a memory.
     *
     * @param {string} memoryId
     * @param {import('./v1.js').MemoryUpdateRequest} request
     * @returns {Promise<import('./v1.js').MemoryUpdateResponse>}
     */
    update(memoryId: string, request: import("./v1.js").MemoryUpdateRequest): Promise<import("./v1.js").MemoryUpdateResponse>;
    /**
     * Deletes the memory.
     *
     * @param {string} memoryId
     * @returns {Promise<import('./v1.js').MemoryDeleteResponse>}
     */
    delete(memoryId: string): Promise<import("./v1.js").MemoryDeleteResponse>;
    /**
     * Exports memories.
     *
     * @param {import('./v1.js').MemoryExportRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').MemoryExportResponse,import('./v1.js').MemoryExportStreamType>}
     */
    export(request?: import("./v1.js").MemoryExportRequest): ResponsePromise<import("./v1.js").MemoryExportResponse, import("./v1.js").MemoryExportStreamType>;
    /**
     * Searches for memories.
     *
     * @param {import('./v1.js').MemorySearchRequest} request
     * @returns {Promise<import('./v1.js').MemorySearchResponse>}
     */
    search(request: import("./v1.js").MemorySearchRequest): Promise<import("./v1.js").MemorySearchResponse>;
}
export default MemoryClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
