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
 * }} NotionIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/json']} NotionIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/jsonl']} NotionIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationListRequest} [request]
 * @returns {ResponsePromise<NotionIntegrationListResponse,NotionIntegrationListStreamType>}
 */
export function listNotionIntegrations(client: ChatBotKitClient, request?: NotionIntegrationListRequest): ResponsePromise<NotionIntegrationListResponse, NotionIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {ResponsePromise<NotionIntegrationFetchResponse,never>}
 */
export function fetchNotionIntegration(client: ChatBotKitClient, notionId: string): ResponsePromise<NotionIntegrationFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   datasetId: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} NotionIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationCreateRequest} request
 * @returns {Promise<NotionIntegrationCreateResponse>}
 */
export function createNotionIntegration(client: ChatBotKitClient, request: NotionIntegrationCreateRequest): Promise<NotionIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   datasetId?: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} NotionIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @param {NotionIntegrationUpdateRequest} request
 * @returns {Promise<NotionIntegrationUpdateResponse>}
 */
export function updateNotionIntegration(client: ChatBotKitClient, notionId: string, request: NotionIntegrationUpdateRequest): Promise<NotionIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationDeleteResponse>}
 */
export function deleteNotionIntegration(client: ChatBotKitClient, notionId: string): Promise<NotionIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationSyncRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationSyncResponse>}
 */
export function syncNotionIntegration(client: ChatBotKitClient, notionId: string): Promise<NotionIntegrationSyncResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type NotionIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type NotionIntegrationListResponse = import("../../types/api/v1.js").operations["listNotionIntegrations"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationListStreamType = import("../../types/api/v1.js").operations["listNotionIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type NotionIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationCreateRequest = {
    name?: string;
    description?: string;
    datasetId: string;
    token?: string;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type NotionIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationCreateResponse = import("../../types/api/v1.js").operations["createNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    datasetId?: string;
    token?: string;
    syncSchedule?: string;
    expiresIn?: number;
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type NotionIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationSyncRequestBody = import("../../types/api/v1.js").operations["syncNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationSyncResponse = import("../../types/api/v1.js").operations["syncNotionIntegration"]["responses"]["200"]["content"]["application/json"];
