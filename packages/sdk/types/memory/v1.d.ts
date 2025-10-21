/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/json']} MemoryListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/jsonl']} MemoryListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryListRequest} [request]
 * @returns {ResponsePromise<MemoryListResponse,MemoryListStreamType>}
 */
export function listMemories(client: ChatBotKitClient, request?: MemoryListRequest): ResponsePromise<MemoryListResponse, MemoryListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchMemory']['responses']['200']['content']['application/json']} MemoryFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {ResponsePromise<MemoryFetchResponse,never>}
 */
export function fetchMemory(client: ChatBotKitClient, memoryId: string): ResponsePromise<MemoryFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createMemory']['requestBody']['content']['application/json']} MemoryCreateRequestBody
 *
 * @typedef {MemoryCreateRequestBody} MemoryCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createMemory']['responses']['200']['content']['application/json']} MemoryCreateResponseBody
 *
 * @typedef {MemoryCreateResponseBody} MemoryCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryCreateRequest} request
 * @returns {Promise<MemoryCreateResponse>}
 */
export function createMemory(client: ChatBotKitClient, request: MemoryCreateRequest): Promise<MemoryCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateMemory']['requestBody']['content']['application/json']} MemoryUpdateRequestBody
 *
 * @typedef {MemoryUpdateRequestBody} MemoryUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateMemory']['responses']['200']['content']['application/json']} MemoryUpdateResponseBody
 *
 * @typedef {MemoryUpdateResponseBody} MemoryUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @param {MemoryUpdateRequest} request
 * @returns {Promise<MemoryUpdateResponse>}
 */
export function updateMemory(client: ChatBotKitClient, memoryId: string, request: MemoryUpdateRequest): Promise<MemoryUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteMemory']['requestBody']['content']['application/json']} MemoryDeleteRequestBody
 *
 * @typedef {MemoryDeleteRequestBody} MemoryDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteMemory']['responses']['200']['content']['application/json']} MemoryDeleteResponseBody
 *
 * @typedef {MemoryDeleteResponseBody} MemoryDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {Promise<MemoryDeleteResponse>}
 */
export function deleteMemory(client: ChatBotKitClient, memoryId: string): Promise<MemoryDeleteResponse>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryExportRequest
 *
 * @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/json']} MemoryExportResponse
 *
 * @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/jsonl']} MemoryExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryExportRequest} [request]
 * @returns {ResponsePromise<MemoryExportResponse,MemoryExportStreamType>}
 */
export function exportMemories(client: ChatBotKitClient, request?: MemoryExportRequest): ResponsePromise<MemoryExportResponse, MemoryExportStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['searchMemory']['requestBody']['content']['application/json']} MemorySearchRequestBody
 *
 * @typedef {MemorySearchRequestBody} MemorySearchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['searchMemory']['responses']['200']['content']['application/json']} MemorySearchResponseBody
 *
 * @typedef {MemorySearchResponseBody} MemorySearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemorySearchRequest} request
 * @returns {Promise<MemorySearchResponse>}
 */
export function searchMemory(client: ChatBotKitClient, request: MemorySearchRequest): Promise<MemorySearchResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type MemoryListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    contactId?: string;
    botId?: string;
};
export type MemoryListResponse = import("../types/api/v1.js").operations["listMemories"]["responses"]["200"]["content"]["application/json"];
export type MemoryListStreamType = import("../types/api/v1.js").operations["listMemories"]["responses"]["200"]["content"]["application/jsonl"];
export type MemoryFetchResponse = import("../types/api/v1.js").operations["fetchMemory"]["responses"]["200"]["content"]["application/json"];
export type MemoryCreateRequestBody = import("../types/api/v1.js").operations["createMemory"]["requestBody"]["content"]["application/json"];
export type MemoryCreateRequest = MemoryCreateRequestBody;
export type MemoryCreateResponseBody = import("../types/api/v1.js").operations["createMemory"]["responses"]["200"]["content"]["application/json"];
export type MemoryCreateResponse = MemoryCreateResponseBody;
export type MemoryUpdateRequestBody = import("../types/api/v1.js").operations["updateMemory"]["requestBody"]["content"]["application/json"];
export type MemoryUpdateRequest = MemoryUpdateRequestBody;
export type MemoryUpdateResponseBody = import("../types/api/v1.js").operations["updateMemory"]["responses"]["200"]["content"]["application/json"];
export type MemoryUpdateResponse = MemoryUpdateResponseBody;
export type MemoryDeleteRequestBody = import("../types/api/v1.js").operations["deleteMemory"]["requestBody"]["content"]["application/json"];
export type MemoryDeleteRequest = MemoryDeleteRequestBody;
export type MemoryDeleteResponseBody = import("../types/api/v1.js").operations["deleteMemory"]["responses"]["200"]["content"]["application/json"];
export type MemoryDeleteResponse = MemoryDeleteResponseBody;
export type MemoryExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    contactId?: string;
    botId?: string;
};
export type MemoryExportResponse = import("../types/api/v1.js").operations["exportMemories"]["responses"]["200"]["content"]["application/json"];
export type MemoryExportStreamType = import("../types/api/v1.js").operations["exportMemories"]["responses"]["200"]["content"]["application/jsonl"];
export type MemorySearchRequestBody = import("../types/api/v1.js").operations["searchMemory"]["requestBody"]["content"]["application/json"];
export type MemorySearchRequest = MemorySearchRequestBody;
export type MemorySearchResponseBody = import("../types/api/v1.js").operations["searchMemory"]["responses"]["200"]["content"]["application/json"];
export type MemorySearchResponse = MemorySearchResponseBody;
