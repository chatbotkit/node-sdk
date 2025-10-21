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
 * }} ExtractIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/json']} ExtractIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/jsonl']} ExtractIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationListRequest} [request]
 * @returns {ResponsePromise<ExtractIntegrationListResponse,ExtractIntegrationListStreamType>}
 */
export function listExtractIntegrations(client: ChatBotKitClient, request?: ExtractIntegrationListRequest): ResponsePromise<ExtractIntegrationListResponse, ExtractIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {ResponsePromise<ExtractIntegrationFetchResponse,never>}
 */
export function fetchExtractIntegration(client: ChatBotKitClient, extractId: string): ResponsePromise<ExtractIntegrationFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botId: string,
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} ExtractIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationCreateRequest} request
 * @returns {Promise<ExtractIntegrationCreateResponse>}
 */
export function createExtractIntegration(client: ChatBotKitClient, request: ExtractIntegrationCreateRequest): Promise<ExtractIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botId?: string,
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} ExtractIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @param {ExtractIntegrationUpdateRequest} request
 * @returns {Promise<ExtractIntegrationUpdateResponse>}
 */
export function updateExtractIntegration(client: ChatBotKitClient, extractId: string, request: ExtractIntegrationUpdateRequest): Promise<ExtractIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {Promise<ExtractIntegrationDeleteResponse>}
 */
export function deleteExtractIntegration(client: ChatBotKitClient, extractId: string): Promise<ExtractIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ExtractIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ExtractIntegrationListResponse = import("../../types/api/v1.js").operations["listExtractIntegrations"]["responses"]["200"]["content"]["application/json"];
export type ExtractIntegrationListStreamType = import("../../types/api/v1.js").operations["listExtractIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type ExtractIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchExtractIntegration"]["responses"]["200"]["content"]["application/json"];
export type ExtractIntegrationCreateRequest = {
    name?: string;
    description?: string;
    botId: string;
    schema?: Record<string, any>;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type ExtractIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createExtractIntegration"]["requestBody"]["content"]["application/json"];
export type ExtractIntegrationCreateResponse = import("../../types/api/v1.js").operations["createExtractIntegration"]["responses"]["200"]["content"]["application/json"];
export type ExtractIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    botId?: string;
    schema?: Record<string, any>;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type ExtractIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateExtractIntegration"]["requestBody"]["content"]["application/json"];
export type ExtractIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateExtractIntegration"]["responses"]["200"]["content"]["application/json"];
export type ExtractIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteExtractIntegration"]["requestBody"]["content"]["application/json"];
export type ExtractIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteExtractIntegration"]["responses"]["200"]["content"]["application/json"];
