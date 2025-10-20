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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   blueprintId?: string,
 *   skillsetId?: string
 * }} McpServerIntegrationOptions
 *
 * @typedef {McpServerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} McpServerIntegrationInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} McpServerIntegrationListRequest
 *
 * @typedef {{items: McpServerIntegrationInstance[]}} McpServerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: McpServerIntegrationInstance
 * }} McpServerIntegrationListStreamItem
 *
 * @typedef {McpServerIntegrationListStreamItem} McpServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<McpServerIntegrationListResponse,McpServerIntegrationListStreamType>}
 */
export function listMcpServerIntegrations(client: ChatBotKitClient, request?: McpServerIntegrationListRequest): ResponsePromise<McpServerIntegrationListResponse, McpServerIntegrationListStreamType>;
/**
 * @typedef {McpServerIntegrationInstance & {
 * }} McpServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {ResponsePromise<McpServerIntegrationFetchResponse,never>}
 */
export function fetchMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string): ResponsePromise<McpServerIntegrationFetchResponse, never>;
/**
 * @typedef {McpServerIntegrationOptions & {
 * }} McpServerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationCreateRequest} request
 * @returns {Promise<McpServerIntegrationCreateResponse>}
 */
export function createMcpServerIntegration(client: ChatBotKitClient, request: McpServerIntegrationCreateRequest): Promise<McpServerIntegrationCreateResponse>;
/**
 * @typedef {McpServerIntegrationOptions & {
 * }} McpServerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @param {McpServerIntegrationUpdateRequest} request
 * @returns {Promise<McpServerIntegrationUpdateResponse>}
 */
export function updateMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string, request: McpServerIntegrationUpdateRequest): Promise<McpServerIntegrationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {Promise<McpServerIntegrationDeleteResponse>}
 */
export function deleteMcpServerIntegration(client: ChatBotKitClient, mcpserverId: string): Promise<McpServerIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type McpServerIntegrationOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
    blueprintId?: string;
    skillsetId?: string;
};
export type McpServerIntegrationInstance = McpServerIntegrationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type McpServerIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type McpServerIntegrationListResponse = {
    items: McpServerIntegrationInstance[];
};
export type McpServerIntegrationListStreamItem = {
    type: "item";
    data: McpServerIntegrationInstance;
};
export type McpServerIntegrationListStreamType = McpServerIntegrationListStreamItem;
export type McpServerIntegrationFetchResponse = McpServerIntegrationInstance & {};
export type McpServerIntegrationCreateRequest = McpServerIntegrationOptions & {};
export type McpServerIntegrationCreateResponse = {
    id: string;
};
export type McpServerIntegrationUpdateRequest = McpServerIntegrationOptions & {};
export type McpServerIntegrationUpdateResponse = {
    id: string;
};
export type McpServerIntegrationDeleteResponse = {
    id: string;
};
