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
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationCreateRequestBody
 *
 * @typedef {NotionIntegrationCreateRequestBody} NotionIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationCreateResponseBody
 *
 * @typedef {NotionIntegrationCreateResponseBody} NotionIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationCreateRequest} request
 * @returns {Promise<NotionIntegrationCreateResponse>}
 */
export function createNotionIntegration(client: ChatBotKitClient, request: NotionIntegrationCreateRequest): Promise<NotionIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationUpdateRequestBody
 *
 * @typedef {NotionIntegrationUpdateRequestBody} NotionIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationUpdateResponseBody
 *
 * @typedef {NotionIntegrationUpdateResponseBody} NotionIntegrationUpdateResponse
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
 * @typedef {NotionIntegrationDeleteRequestBody} NotionIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationDeleteResponseBody
 *
 * @typedef {NotionIntegrationDeleteResponseBody} NotionIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationDeleteResponse>}
 */
export function deleteNotionIntegration(client: ChatBotKitClient, notionId: string): Promise<NotionIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationSyncRequestBody
 *
 * @typedef {NotionIntegrationSyncRequestBody} NotionIntegrationSyncRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationSyncResponseBody
 *
 * @typedef {NotionIntegrationSyncResponseBody} NotionIntegrationSyncResponse
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
export type NotionIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationCreateRequest = NotionIntegrationCreateRequestBody;
export type NotionIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationCreateResponse = NotionIntegrationCreateResponseBody;
export type NotionIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationUpdateRequest = NotionIntegrationUpdateRequestBody;
export type NotionIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationUpdateResponse = NotionIntegrationUpdateResponseBody;
export type NotionIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationDeleteRequest = NotionIntegrationDeleteRequestBody;
export type NotionIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationDeleteResponse = NotionIntegrationDeleteResponseBody;
export type NotionIntegrationSyncRequestBody = import("../../types/api/v1.js").operations["syncNotionIntegration"]["requestBody"]["content"]["application/json"];
export type NotionIntegrationSyncRequest = NotionIntegrationSyncRequestBody;
export type NotionIntegrationSyncResponseBody = import("../../types/api/v1.js").operations["syncNotionIntegration"]["responses"]["200"]["content"]["application/json"];
export type NotionIntegrationSyncResponse = NotionIntegrationSyncResponseBody;
