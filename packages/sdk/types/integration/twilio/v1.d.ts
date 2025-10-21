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
 * }} TwilioIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/json']} TwilioIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/jsonl']} TwilioIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationListRequest} [request]
 * @returns {ResponsePromise<TwilioIntegrationListResponse,TwilioIntegrationListStreamType>}
 */
export function listTwilioIntegrations(client: ChatBotKitClient, request?: TwilioIntegrationListRequest): ResponsePromise<TwilioIntegrationListResponse, TwilioIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {ResponsePromise<TwilioIntegrationFetchResponse,never>}
 */
export function fetchTwilioIntegration(client: ChatBotKitClient, twilioId: string): ResponsePromise<TwilioIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationCreateRequestBody
 *
 * @typedef {TwilioIntegrationCreateRequestBody} TwilioIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationCreateResponseBody
 *
 * @typedef {TwilioIntegrationCreateResponseBody} TwilioIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationCreateRequest} request
 * @returns {Promise<TwilioIntegrationCreateResponse>}
 */
export function createTwilioIntegration(client: ChatBotKitClient, request: TwilioIntegrationCreateRequest): Promise<TwilioIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationUpdateRequestBody
 *
 * @typedef {TwilioIntegrationUpdateRequestBody} TwilioIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationUpdateResponseBody
 *
 * @typedef {TwilioIntegrationUpdateResponseBody} TwilioIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @param {TwilioIntegrationUpdateRequest} request
 * @returns {Promise<TwilioIntegrationUpdateResponse>}
 */
export function updateTwilioIntegration(client: ChatBotKitClient, twilioId: string, request: TwilioIntegrationUpdateRequest): Promise<TwilioIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationDeleteRequestBody
 *
 * @typedef {TwilioIntegrationDeleteRequestBody} TwilioIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationDeleteResponseBody
 *
 * @typedef {TwilioIntegrationDeleteResponseBody} TwilioIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationDeleteResponse>}
 */
export function deleteTwilioIntegration(client: ChatBotKitClient, twilioId: string): Promise<TwilioIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationSetupRequestBody
 *
 * @typedef {TwilioIntegrationSetupRequestBody} TwilioIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationSetupResponseBody
 *
 * @typedef {TwilioIntegrationSetupResponseBody} TwilioIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationSetupResponse>}
 */
export function setupTwilioIntegration(client: ChatBotKitClient, twilioId: string): Promise<TwilioIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TwilioIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TwilioIntegrationListResponse = import("../../types/api/v1.js").operations["listTwilioIntegrations"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationListStreamType = import("../../types/api/v1.js").operations["listTwilioIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type TwilioIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationCreateRequest = TwilioIntegrationCreateRequestBody;
export type TwilioIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationCreateResponse = TwilioIntegrationCreateResponseBody;
export type TwilioIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationUpdateRequest = TwilioIntegrationUpdateRequestBody;
export type TwilioIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationUpdateResponse = TwilioIntegrationUpdateResponseBody;
export type TwilioIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationDeleteRequest = TwilioIntegrationDeleteRequestBody;
export type TwilioIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationDeleteResponse = TwilioIntegrationDeleteResponseBody;
export type TwilioIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationSetupRequest = TwilioIntegrationSetupRequestBody;
export type TwilioIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationSetupResponse = TwilioIntegrationSetupResponseBody;
