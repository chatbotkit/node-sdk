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
 * }} InstagramIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listInstagramIntegrations']['responses']['200']['content']['application/json']} InstagramIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listInstagramIntegrations']['responses']['200']['content']['application/jsonl']} InstagramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {InstagramIntegrationListRequest} [request]
 * @returns {ResponsePromise<InstagramIntegrationListResponse,InstagramIntegrationListStreamType>}
 */
export function listInstagramIntegrations(client: ChatBotKitClient, request?: InstagramIntegrationListRequest): ResponsePromise<InstagramIntegrationListResponse, InstagramIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {ResponsePromise<InstagramIntegrationFetchResponse,never>}
 */
export function fetchInstagramIntegration(client: ChatBotKitClient, instagramId: string): ResponsePromise<InstagramIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationCreateRequestBody
 *
 * @typedef {InstagramIntegrationCreateRequestBody} InstagramIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationCreateResponseBody
 *
 * @typedef {InstagramIntegrationCreateResponseBody} InstagramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {InstagramIntegrationCreateRequest} request
 * @returns {Promise<InstagramIntegrationCreateResponse>}
 */
export function createInstagramIntegration(client: ChatBotKitClient, request: InstagramIntegrationCreateRequest): Promise<InstagramIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationUpdateRequestBody
 *
 * @typedef {InstagramIntegrationUpdateRequestBody} InstagramIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationUpdateResponseBody
 *
 * @typedef {InstagramIntegrationUpdateResponseBody} InstagramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @param {InstagramIntegrationUpdateRequest} request
 * @returns {Promise<InstagramIntegrationUpdateResponse>}
 */
export function updateInstagramIntegration(client: ChatBotKitClient, instagramId: string, request: InstagramIntegrationUpdateRequest): Promise<InstagramIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationDeleteRequestBody
 *
 * @typedef {InstagramIntegrationDeleteRequestBody} InstagramIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationDeleteResponseBody
 *
 * @typedef {InstagramIntegrationDeleteResponseBody} InstagramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {Promise<InstagramIntegrationDeleteResponse>}
 */
export function deleteInstagramIntegration(client: ChatBotKitClient, instagramId: string): Promise<InstagramIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationSetupRequestBody
 *
 * @typedef {InstagramIntegrationSetupRequestBody} InstagramIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationSetupResponseBody
 *
 * @typedef {InstagramIntegrationSetupResponseBody} InstagramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {Promise<InstagramIntegrationSetupResponse>}
 */
export function setupInstagramIntegration(client: ChatBotKitClient, instagramId: string): Promise<InstagramIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type InstagramIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type InstagramIntegrationListResponse = import("../../types/api/v1.js").operations["listInstagramIntegrations"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationListStreamType = import("../../types/api/v1.js").operations["listInstagramIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type InstagramIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchInstagramIntegration"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createInstagramIntegration"]["requestBody"]["content"]["application/json"];
export type InstagramIntegrationCreateRequest = InstagramIntegrationCreateRequestBody;
export type InstagramIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createInstagramIntegration"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationCreateResponse = InstagramIntegrationCreateResponseBody;
export type InstagramIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateInstagramIntegration"]["requestBody"]["content"]["application/json"];
export type InstagramIntegrationUpdateRequest = InstagramIntegrationUpdateRequestBody;
export type InstagramIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateInstagramIntegration"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationUpdateResponse = InstagramIntegrationUpdateResponseBody;
export type InstagramIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteInstagramIntegration"]["requestBody"]["content"]["application/json"];
export type InstagramIntegrationDeleteRequest = InstagramIntegrationDeleteRequestBody;
export type InstagramIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteInstagramIntegration"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationDeleteResponse = InstagramIntegrationDeleteResponseBody;
export type InstagramIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupInstagramIntegration"]["requestBody"]["content"]["application/json"];
export type InstagramIntegrationSetupRequest = InstagramIntegrationSetupRequestBody;
export type InstagramIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupInstagramIntegration"]["responses"]["200"]["content"]["application/json"];
export type InstagramIntegrationSetupResponse = InstagramIntegrationSetupResponseBody;
