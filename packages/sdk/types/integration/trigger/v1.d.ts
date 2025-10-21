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
 * }} TriggerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/json']} TriggerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/jsonl']} TriggerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationListResponse,TriggerIntegrationListStreamType>}
 */
export function listTriggerIntegrations(client: ChatBotKitClient, request?: TriggerIntegrationListRequest): ResponsePromise<TriggerIntegrationListResponse, TriggerIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {ResponsePromise<TriggerIntegrationFetchResponse,never>}
 */
export function fetchTriggerIntegration(client: ChatBotKitClient, triggerId: string): ResponsePromise<TriggerIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationCreateRequestBody
 *
 * @typedef {TriggerIntegrationCreateRequestBody} TriggerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationCreateResponseBody
 *
 * @typedef {TriggerIntegrationCreateResponseBody} TriggerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationCreateRequest} request
 * @returns {Promise<TriggerIntegrationCreateResponse>}
 */
export function createTriggerIntegration(client: ChatBotKitClient, request: TriggerIntegrationCreateRequest): Promise<TriggerIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationUpdateRequestBody
 *
 * @typedef {TriggerIntegrationUpdateRequestBody} TriggerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationUpdateResponseBody
 *
 * @typedef {TriggerIntegrationUpdateResponseBody} TriggerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationUpdateRequest} request
 * @returns {Promise<TriggerIntegrationUpdateResponse>}
 */
export function updateTriggerIntegration(client: ChatBotKitClient, triggerId: string, request: TriggerIntegrationUpdateRequest): Promise<TriggerIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationDeleteRequestBody
 *
 * @typedef {TriggerIntegrationDeleteRequestBody} TriggerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationDeleteResponseBody
 *
 * @typedef {TriggerIntegrationDeleteResponseBody} TriggerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationDeleteResponse>}
 */
export function deleteTriggerIntegration(client: ChatBotKitClient, triggerId: string): Promise<TriggerIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationSetupRequestBody
 *
 * @typedef {TriggerIntegrationSetupRequestBody} TriggerIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationSetupResponseBody
 *
 * @typedef {TriggerIntegrationSetupResponseBody} TriggerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationSetupResponse>}
 */
export function setupTriggerIntegration(client: ChatBotKitClient, triggerId: string): Promise<TriggerIntegrationSetupResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationInvokeRequestBody
 *
 * @typedef {TriggerIntegrationInvokeRequestBody} TriggerIntegrationInvokeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationInvokeResponseBody
 *
 * @typedef {TriggerIntegrationInvokeResponseBody} TriggerIntegrationInvokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationInvokeRequest} request
 * @returns {Promise<TriggerIntegrationInvokeResponse>}
 */
export function invokeTriggerIntegration(client: ChatBotKitClient, triggerId: string, request: TriggerIntegrationInvokeRequest): Promise<TriggerIntegrationInvokeResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TriggerIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TriggerIntegrationListResponse = import("../../types/api/v1.js").operations["listTriggerIntegrations"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationListStreamType = import("../../types/api/v1.js").operations["listTriggerIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type TriggerIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createTriggerIntegration"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationCreateRequest = TriggerIntegrationCreateRequestBody;
export type TriggerIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationCreateResponse = TriggerIntegrationCreateResponseBody;
export type TriggerIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateTriggerIntegration"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationUpdateRequest = TriggerIntegrationUpdateRequestBody;
export type TriggerIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationUpdateResponse = TriggerIntegrationUpdateResponseBody;
export type TriggerIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteTriggerIntegration"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationDeleteRequest = TriggerIntegrationDeleteRequestBody;
export type TriggerIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationDeleteResponse = TriggerIntegrationDeleteResponseBody;
export type TriggerIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupTriggerIntegration"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationSetupRequest = TriggerIntegrationSetupRequestBody;
export type TriggerIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationSetupResponse = TriggerIntegrationSetupResponseBody;
export type TriggerIntegrationInvokeRequestBody = import("../../types/api/v1.js").operations["invokeTriggerIntegration"]["requestBody"]["content"]["application/json"];
export type TriggerIntegrationInvokeRequest = TriggerIntegrationInvokeRequestBody;
export type TriggerIntegrationInvokeResponseBody = import("../../types/api/v1.js").operations["invokeTriggerIntegration"]["responses"]["200"]["content"]["application/json"];
export type TriggerIntegrationInvokeResponse = TriggerIntegrationInvokeResponseBody;
