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
 * }} SitemapIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/json']} SitemapIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/jsonl']} SitemapIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationListRequest} [request]
 * @returns {ResponsePromise<SitemapIntegrationListResponse,SitemapIntegrationListStreamType>}
 */
export function listSitemapIntegrations(client: ChatBotKitClient, request?: SitemapIntegrationListRequest): ResponsePromise<SitemapIntegrationListResponse, SitemapIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {ResponsePromise<SitemapIntegrationFetchResponse,never>}
 */
export function fetchSitemapIntegration(client: ChatBotKitClient, sitemapId: string): ResponsePromise<SitemapIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationCreateRequestBody
 *
 * @typedef {SitemapIntegrationCreateRequestBody} SitemapIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationCreateResponseBody
 *
 * @typedef {SitemapIntegrationCreateResponseBody} SitemapIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationCreateRequest} request
 * @returns {Promise<SitemapIntegrationCreateResponse>}
 */
export function createSitemapIntegration(client: ChatBotKitClient, request: SitemapIntegrationCreateRequest): Promise<SitemapIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationUpdateRequestBody
 *
 * @typedef {SitemapIntegrationUpdateRequestBody} SitemapIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationUpdateResponseBody
 *
 * @typedef {SitemapIntegrationUpdateResponseBody} SitemapIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @param {SitemapIntegrationUpdateRequest} request
 * @returns {Promise<SitemapIntegrationUpdateResponse>}
 */
export function updateSitemapIntegration(client: ChatBotKitClient, sitemapId: string, request: SitemapIntegrationUpdateRequest): Promise<SitemapIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationDeleteRequestBody
 *
 * @typedef {SitemapIntegrationDeleteRequestBody} SitemapIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationDeleteResponseBody
 *
 * @typedef {SitemapIntegrationDeleteResponseBody} SitemapIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationDeleteResponse>}
 */
export function deleteSitemapIntegration(client: ChatBotKitClient, sitemapId: string): Promise<SitemapIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['syncSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationSyncRequestBody
 *
 * @typedef {SitemapIntegrationSyncRequestBody} SitemapIntegrationSyncRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['syncSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationSyncResponseBody
 *
 * @typedef {SitemapIntegrationSyncResponseBody} SitemapIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationSyncResponse>}
 */
export function syncSitemapIntegration(client: ChatBotKitClient, sitemapId: string): Promise<SitemapIntegrationSyncResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SitemapIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SitemapIntegrationListResponse = import("../../types/api/v1.js").operations["listSitemapIntegrations"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationListStreamType = import("../../types/api/v1.js").operations["listSitemapIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type SitemapIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchSitemapIntegration"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createSitemapIntegration"]["requestBody"]["content"]["application/json"];
export type SitemapIntegrationCreateRequest = SitemapIntegrationCreateRequestBody;
export type SitemapIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createSitemapIntegration"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationCreateResponse = SitemapIntegrationCreateResponseBody;
export type SitemapIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateSitemapIntegration"]["requestBody"]["content"]["application/json"];
export type SitemapIntegrationUpdateRequest = SitemapIntegrationUpdateRequestBody;
export type SitemapIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateSitemapIntegration"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationUpdateResponse = SitemapIntegrationUpdateResponseBody;
export type SitemapIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSitemapIntegration"]["requestBody"]["content"]["application/json"];
export type SitemapIntegrationDeleteRequest = SitemapIntegrationDeleteRequestBody;
export type SitemapIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteSitemapIntegration"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationDeleteResponse = SitemapIntegrationDeleteResponseBody;
export type SitemapIntegrationSyncRequestBody = import("../../types/api/v1.js").operations["syncSitemapIntegration"]["requestBody"]["content"]["application/json"];
export type SitemapIntegrationSyncRequest = SitemapIntegrationSyncRequestBody;
export type SitemapIntegrationSyncResponseBody = import("../../types/api/v1.js").operations["syncSitemapIntegration"]["responses"]["200"]["content"]["application/json"];
export type SitemapIntegrationSyncResponse = SitemapIntegrationSyncResponseBody;
