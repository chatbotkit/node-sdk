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
 * }} GooglechatIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listGooglechatIntegrations']['responses']['200']['content']['application/json']} GooglechatIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listGooglechatIntegrations']['responses']['200']['content']['application/jsonl']} GooglechatIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {GooglechatIntegrationListRequest} [request]
 * @returns {ResponsePromise<GooglechatIntegrationListResponse,GooglechatIntegrationListStreamType>}
 */
export function listGooglechatIntegrations(client: ChatBotKitClient, request?: GooglechatIntegrationListRequest): ResponsePromise<GooglechatIntegrationListResponse, GooglechatIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @returns {ResponsePromise<GooglechatIntegrationFetchResponse,never>}
 */
export function fetchGooglechatIntegration(client: ChatBotKitClient, googlechatId: string): ResponsePromise<GooglechatIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationCreateRequestBody
 * @typedef {GooglechatIntegrationCreateRequestBody} GooglechatIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationCreateResponseBody
 * @typedef {GooglechatIntegrationCreateResponseBody} GooglechatIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {GooglechatIntegrationCreateRequest} request
 * @returns {Promise<GooglechatIntegrationCreateResponse>}
 */
export function createGooglechatIntegration(client: ChatBotKitClient, request: GooglechatIntegrationCreateRequest): Promise<GooglechatIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationUpdateRequestBody
 * @typedef {GooglechatIntegrationUpdateRequestBody} GooglechatIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationUpdateResponseBody
 * @typedef {GooglechatIntegrationUpdateResponseBody} GooglechatIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @param {GooglechatIntegrationUpdateRequest} request
 * @returns {Promise<GooglechatIntegrationUpdateResponse>}
 */
export function updateGooglechatIntegration(client: ChatBotKitClient, googlechatId: string, request: GooglechatIntegrationUpdateRequest): Promise<GooglechatIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationDeleteRequestBody
 * @typedef {GooglechatIntegrationDeleteRequestBody} GooglechatIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationDeleteResponseBody
 * @typedef {GooglechatIntegrationDeleteResponseBody} GooglechatIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @param {GooglechatIntegrationDeleteRequest} [request]
 * @returns {Promise<GooglechatIntegrationDeleteResponse>}
 */
export function deleteGooglechatIntegration(client: ChatBotKitClient, googlechatId: string, request?: GooglechatIntegrationDeleteRequest): Promise<GooglechatIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationSetupRequestBody
 * @typedef {GooglechatIntegrationSetupRequestBody} GooglechatIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationSetupResponseBody
 * @typedef {GooglechatIntegrationSetupResponseBody} GooglechatIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @returns {Promise<GooglechatIntegrationSetupResponse>}
 */
export function setupGooglechatIntegration(client: ChatBotKitClient, googlechatId: string): Promise<GooglechatIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type GooglechatIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type GooglechatIntegrationListResponse = import("../../types/api/v1.js").operations["listGooglechatIntegrations"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationListStreamType = import("../../types/api/v1.js").operations["listGooglechatIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type GooglechatIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchGooglechatIntegration"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createGooglechatIntegration"]["requestBody"]["content"]["application/json"];
export type GooglechatIntegrationCreateRequest = GooglechatIntegrationCreateRequestBody;
export type GooglechatIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createGooglechatIntegration"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationCreateResponse = GooglechatIntegrationCreateResponseBody;
export type GooglechatIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateGooglechatIntegration"]["requestBody"]["content"]["application/json"];
export type GooglechatIntegrationUpdateRequest = GooglechatIntegrationUpdateRequestBody;
export type GooglechatIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateGooglechatIntegration"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationUpdateResponse = GooglechatIntegrationUpdateResponseBody;
export type GooglechatIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteGooglechatIntegration"]["requestBody"]["content"]["application/json"];
export type GooglechatIntegrationDeleteRequest = GooglechatIntegrationDeleteRequestBody;
export type GooglechatIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteGooglechatIntegration"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationDeleteResponse = GooglechatIntegrationDeleteResponseBody;
export type GooglechatIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupGooglechatIntegration"]["requestBody"]["content"]["application/json"];
export type GooglechatIntegrationSetupRequest = GooglechatIntegrationSetupRequestBody;
export type GooglechatIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupGooglechatIntegration"]["responses"]["200"]["content"]["application/json"];
export type GooglechatIntegrationSetupResponse = GooglechatIntegrationSetupResponseBody;
