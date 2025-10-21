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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   blueprintId?: string,
 *   skillsetId?: string
 * }} McpServerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationCreateRequest} request
 * @returns {Promise<McpServerIntegrationCreateResponse>}
 */
export function createMcpServerIntegration(client: ChatBotKitClient, request: McpServerIntegrationCreateRequest): Promise<McpServerIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   blueprintId?: string,
 *   skillsetId?: string
 * }} McpServerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationUpdateResponse
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
 * @typedef {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationDeleteResponse
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
export type McpServerIntegrationCreateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    blueprintId?: string;
    skillsetId?: string;
};
export type McpServerIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationCreateResponse = import("../../types/api/v1.js").operations["createMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    blueprintId?: string;
    skillsetId?: string;
};
export type McpServerIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type McpServerIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteMcpServerIntegration"]["requestBody"]["content"]["application/json"];
export type McpServerIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteMcpServerIntegration"]["responses"]["200"]["content"]["application/json"];
