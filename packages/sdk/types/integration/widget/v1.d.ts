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
 * }} WidgetIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/json']} WidgetIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/jsonl']} WidgetIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationListRequest} [request]
 * @returns {ResponsePromise<WidgetIntegrationListResponse,WidgetIntegrationListStreamType>}
 */
export function listWidgetIntegrations(client: ChatBotKitClient, request?: WidgetIntegrationListRequest): ResponsePromise<WidgetIntegrationListResponse, WidgetIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {ResponsePromise<WidgetIntegrationFetchResponse,never>}
 */
export function fetchWidgetIntegration(client: ChatBotKitClient, widgetId: string): ResponsePromise<WidgetIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationCreateRequestBody
 *
 * @typedef {WidgetIntegrationCreateRequestBody} WidgetIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationCreateResponseBody
 *
 * @typedef {WidgetIntegrationCreateResponseBody} WidgetIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationCreateRequest} request
 * @returns {Promise<WidgetIntegrationCreateResponse>}
 */
export function createWidgetIntegration(client: ChatBotKitClient, request: WidgetIntegrationCreateRequest): Promise<WidgetIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationUpdateRequestBody
 *
 * @typedef {WidgetIntegrationUpdateRequestBody} WidgetIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationUpdateResponseBody
 *
 * @typedef {WidgetIntegrationUpdateResponseBody} WidgetIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @param {WidgetIntegrationUpdateRequest} request
 * @returns {Promise<WidgetIntegrationUpdateResponse>}
 */
export function updateWidgetIntegration(client: ChatBotKitClient, widgetId: string, request: WidgetIntegrationUpdateRequest): Promise<WidgetIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationDeleteRequestBody
 *
 * @typedef {WidgetIntegrationDeleteRequestBody} WidgetIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationDeleteResponseBody
 *
 * @typedef {WidgetIntegrationDeleteResponseBody} WidgetIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationDeleteResponse>}
 */
export function deleteWidgetIntegration(client: ChatBotKitClient, widgetId: string): Promise<WidgetIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationSetupRequestBody
 *
 * @typedef {WidgetIntegrationSetupRequestBody} WidgetIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationSetupResponseBody
 *
 * @typedef {WidgetIntegrationSetupResponseBody} WidgetIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationSetupResponse>}
 */
export function setupWidgetIntegration(client: ChatBotKitClient, widgetId: string): Promise<WidgetIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type WidgetIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type WidgetIntegrationListResponse = import("../../types/api/v1.js").operations["listWidgetIntegrations"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationListStreamType = import("../../types/api/v1.js").operations["listWidgetIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type WidgetIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchWidgetIntegration"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createWidgetIntegration"]["requestBody"]["content"]["application/json"];
export type WidgetIntegrationCreateRequest = WidgetIntegrationCreateRequestBody;
export type WidgetIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createWidgetIntegration"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationCreateResponse = WidgetIntegrationCreateResponseBody;
export type WidgetIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateWidgetIntegration"]["requestBody"]["content"]["application/json"];
export type WidgetIntegrationUpdateRequest = WidgetIntegrationUpdateRequestBody;
export type WidgetIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateWidgetIntegration"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationUpdateResponse = WidgetIntegrationUpdateResponseBody;
export type WidgetIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteWidgetIntegration"]["requestBody"]["content"]["application/json"];
export type WidgetIntegrationDeleteRequest = WidgetIntegrationDeleteRequestBody;
export type WidgetIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteWidgetIntegration"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationDeleteResponse = WidgetIntegrationDeleteResponseBody;
export type WidgetIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupWidgetIntegration"]["requestBody"]["content"]["application/json"];
export type WidgetIntegrationSetupRequest = WidgetIntegrationSetupRequestBody;
export type WidgetIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupWidgetIntegration"]["responses"]["200"]["content"]["application/json"];
export type WidgetIntegrationSetupResponse = WidgetIntegrationSetupResponseBody;
