/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} McpServerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/json']} McpServerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/jsonl']} McpServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<McpServerIntegrationListResponse,McpServerIntegrationListStreamType>}
 */
export function listMcpServerIntegrations(client: ChatBotKitClient, request?: McpServerIntegrationListRequest): ResponsePromise<McpServerIntegrationListResponse, McpServerIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {ResponsePromise<McpServerIntegrationFetchResponse,never>}
 */
export function fetchMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string): ResponsePromise<McpServerIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationCreateRequestBody
 *
 * @typedef {McpServerIntegrationCreateRequestBody} McpServerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationCreateResponseBody
 *
 * @typedef {McpServerIntegrationCreateResponseBody} McpServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationCreateRequest} request
 * @returns {Promise<McpServerIntegrationCreateResponse>}
 */
export function createMcpServerIntegration(client: ChatBotKitClient, request: McpServerIntegrationCreateRequest): Promise<McpServerIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationUpdateRequestBody
 *
 * @typedef {McpServerIntegrationUpdateRequestBody} McpServerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationUpdateResponseBody
 *
 * @typedef {McpServerIntegrationUpdateResponseBody} McpServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @param {McpServerIntegrationUpdateRequest} request
 * @returns {Promise<McpServerIntegrationUpdateResponse>}
 */
export function updateMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string, request: McpServerIntegrationUpdateRequest): Promise<McpServerIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationDeleteRequestBody
 *
 * @typedef {McpServerIntegrationDeleteRequestBody} McpServerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationDeleteResponseBody
 *
 * @typedef {McpServerIntegrationDeleteResponseBody} McpServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {Promise<McpServerIntegrationDeleteResponse>}
 */
export function deleteMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string): Promise<McpServerIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type McpServerIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type McpServerIntegrationListResponse = import("../../types/api/v1.js").operations["listMcpServerIntegrations"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationListStreamType = import("../../types/api/v1.js").operations["listMcpServerIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type McpServerIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationCreateRequest = McpServerIntegrationCreateRequestBody;
export type McpServerIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationCreateResponse = McpServerIntegrationCreateResponseBody;
export type McpServerIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationUpdateRequest = McpServerIntegrationUpdateRequestBody;
export type McpServerIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationUpdateResponse = McpServerIntegrationUpdateResponseBody;
export type McpServerIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationDeleteRequest = McpServerIntegrationDeleteRequestBody;
export type McpServerIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationDeleteResponse = McpServerIntegrationDeleteResponseBody;
