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
 * }} SupportIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/json']} SupportIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/jsonl']} SupportIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationListRequest} [request]
 * @returns {ResponsePromise<SupportIntegrationListResponse,SupportIntegrationListStreamType>}
 */
export function listSupportIntegrations(client: ChatBotKitClient, request?: SupportIntegrationListRequest): ResponsePromise<SupportIntegrationListResponse, SupportIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {ResponsePromise<SupportIntegrationFetchResponse,never>}
 */
export function fetchSupportIntegration(client: ChatBotKitClient, supportId: string): ResponsePromise<SupportIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationCreateRequestBody
 *
 * @typedef {SupportIntegrationCreateRequestBody} SupportIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationCreateResponseBody
 *
 * @typedef {SupportIntegrationCreateResponseBody} SupportIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationCreateRequest} request
 * @returns {Promise<SupportIntegrationCreateResponse>}
 */
export function createSupportIntegration(client: ChatBotKitClient, request: SupportIntegrationCreateRequest): Promise<SupportIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationUpdateRequestBody
 *
 * @typedef {SupportIntegrationUpdateRequestBody} SupportIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationUpdateResponseBody
 *
 * @typedef {SupportIntegrationUpdateResponseBody} SupportIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @param {SupportIntegrationUpdateRequest} request
 * @returns {Promise<SupportIntegrationUpdateResponse>}
 */
export function updateSupportIntegration(client: ChatBotKitClient, supportId: string, request: SupportIntegrationUpdateRequest): Promise<SupportIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationDeleteRequestBody
 *
 * @typedef {SupportIntegrationDeleteRequestBody} SupportIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationDeleteResponseBody
 *
 * @typedef {SupportIntegrationDeleteResponseBody} SupportIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {Promise<SupportIntegrationDeleteResponse>}
 */
export function deleteSupportIntegration(client: ChatBotKitClient, supportId: string): Promise<SupportIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SupportIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SupportIntegrationListResponse = import("../../types/api/v1.js").operations["listSupportIntegrations"]["responses"]["200"]["content"]["application/json"];
export type SupportIntegrationListStreamType = import("../../types/api/v1.js").operations["listSupportIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type SupportIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchSupportIntegration"]["responses"]["200"]["content"]["application/json"];
export type SupportIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createSupportIntegration"]["requestBody"]["content"]["application/json"];
export type SupportIntegrationCreateRequest = SupportIntegrationCreateRequestBody;
export type SupportIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createSupportIntegration"]["responses"]["200"]["content"]["application/json"];
export type SupportIntegrationCreateResponse = SupportIntegrationCreateResponseBody;
export type SupportIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateSupportIntegration"]["requestBody"]["content"]["application/json"];
export type SupportIntegrationUpdateRequest = SupportIntegrationUpdateRequestBody;
export type SupportIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateSupportIntegration"]["responses"]["200"]["content"]["application/json"];
export type SupportIntegrationUpdateResponse = SupportIntegrationUpdateResponseBody;
export type SupportIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSupportIntegration"]["requestBody"]["content"]["application/json"];
export type SupportIntegrationDeleteRequest = SupportIntegrationDeleteRequestBody;
export type SupportIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteSupportIntegration"]["responses"]["200"]["content"]["application/json"];
export type SupportIntegrationDeleteResponse = SupportIntegrationDeleteResponseBody;
