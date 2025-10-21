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
 * }} MessengerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/json']} MessengerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/jsonl']} MessengerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationListRequest} [request]
 * @returns {ResponsePromise<MessengerIntegrationListResponse,MessengerIntegrationListStreamType>}
 */
export function listMessengerIntegrations(client: ChatBotKitClient, request?: MessengerIntegrationListRequest): ResponsePromise<MessengerIntegrationListResponse, MessengerIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {ResponsePromise<MessengerIntegrationFetchResponse,never>}
 */
export function fetchMessengerIntegration(client: ChatBotKitClient, messengerId: string): ResponsePromise<MessengerIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationCreateRequestBody
 *
 * @typedef {MessengerIntegrationCreateRequestBody} MessengerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationCreateResponseBody
 *
 * @typedef {MessengerIntegrationCreateResponseBody} MessengerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationCreateRequest} request
 * @returns {Promise<MessengerIntegrationCreateResponse>}
 */
export function createMessengerIntegration(client: ChatBotKitClient, request: MessengerIntegrationCreateRequest): Promise<MessengerIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationUpdateRequestBody
 *
 * @typedef {MessengerIntegrationUpdateRequestBody} MessengerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationUpdateResponseBody
 *
 * @typedef {MessengerIntegrationUpdateResponseBody} MessengerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @param {MessengerIntegrationUpdateRequest} request
 * @returns {Promise<MessengerIntegrationUpdateResponse>}
 */
export function updateMessengerIntegration(client: ChatBotKitClient, messengerId: string, request: MessengerIntegrationUpdateRequest): Promise<MessengerIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationDeleteRequestBody
 *
 * @typedef {MessengerIntegrationDeleteRequestBody} MessengerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationDeleteResponseBody
 *
 * @typedef {MessengerIntegrationDeleteResponseBody} MessengerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationDeleteResponse>}
 */
export function deleteMessengerIntegration(client: ChatBotKitClient, messengerId: string): Promise<MessengerIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationSetupRequestBody
 *
 * @typedef {MessengerIntegrationSetupRequestBody} MessengerIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationSetupResponseBody
 *
 * @typedef {MessengerIntegrationSetupResponseBody} MessengerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationSetupResponse>}
 */
export function setupMessengerIntegration(client: ChatBotKitClient, messengerId: string): Promise<MessengerIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type MessengerIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type MessengerIntegrationListResponse = import("../../types/api/v1.js").operations["listMessengerIntegrations"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationListStreamType = import("../../types/api/v1.js").operations["listMessengerIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type MessengerIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchMessengerIntegration"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createMessengerIntegration"]["requestBody"]["content"]["application/json"];
export type MessengerIntegrationCreateRequest = MessengerIntegrationCreateRequestBody;
export type MessengerIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createMessengerIntegration"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationCreateResponse = MessengerIntegrationCreateResponseBody;
export type MessengerIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateMessengerIntegration"]["requestBody"]["content"]["application/json"];
export type MessengerIntegrationUpdateRequest = MessengerIntegrationUpdateRequestBody;
export type MessengerIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateMessengerIntegration"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationUpdateResponse = MessengerIntegrationUpdateResponseBody;
export type MessengerIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteMessengerIntegration"]["requestBody"]["content"]["application/json"];
export type MessengerIntegrationDeleteRequest = MessengerIntegrationDeleteRequestBody;
export type MessengerIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteMessengerIntegration"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationDeleteResponse = MessengerIntegrationDeleteResponseBody;
export type MessengerIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupMessengerIntegration"]["requestBody"]["content"]["application/json"];
export type MessengerIntegrationSetupRequest = MessengerIntegrationSetupRequestBody;
export type MessengerIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupMessengerIntegration"]["responses"]["200"]["content"]["application/json"];
export type MessengerIntegrationSetupResponse = MessengerIntegrationSetupResponseBody;
