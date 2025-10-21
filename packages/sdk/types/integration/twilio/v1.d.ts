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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   accountSid?: string,
 *   authToken?: string,
 *   phoneNumber?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationCreateRequest} request
 * @returns {Promise<TwilioIntegrationCreateResponse>}
 */
export function createTwilioIntegration(client: ChatBotKitClient, request: TwilioIntegrationCreateRequest): Promise<TwilioIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   accountSid?: string,
 *   authToken?: string,
 *   phoneNumber?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationUpdateResponse
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
 * @typedef {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationDeleteResponse>}
 */
export function deleteTwilioIntegration(client: ChatBotKitClient, twilioId: string): Promise<TwilioIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationSetupResponse
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
export type TwilioIntegrationCreateRequest = {
    name?: string;
    description?: string;
    accountSid?: string;
    authToken?: string;
    phoneNumber?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type TwilioIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationCreateResponse = import("../../types/api/v1.js").operations["createTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    accountSid?: string;
    authToken?: string;
    phoneNumber?: string;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type TwilioIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
export type TwilioIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupTwilioIntegration"]["requestBody"]["content"]["application/json"];
export type TwilioIntegrationSetupResponse = import("../../types/api/v1.js").operations["setupTwilioIntegration"]["responses"]["200"]["content"]["application/json"];
