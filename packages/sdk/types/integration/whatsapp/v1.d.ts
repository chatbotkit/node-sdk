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
 * }} WhatsAppIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/json']} WhatsAppIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/jsonl']} WhatsAppIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationListRequest} [request]
 * @returns {ResponsePromise<WhatsAppIntegrationListResponse,WhatsAppIntegrationListStreamType>}
 */
export function listWhatsAppIntegrations(client: ChatBotKitClient, request?: WhatsAppIntegrationListRequest): ResponsePromise<WhatsAppIntegrationListResponse, WhatsAppIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {ResponsePromise<WhatsAppIntegrationFetchResponse,never>}
 */
export function fetchWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): ResponsePromise<WhatsAppIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationCreateRequestBody
 *
 * @typedef {WhatsAppIntegrationCreateRequestBody} WhatsAppIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationCreateResponseBody
 *
 * @typedef {WhatsAppIntegrationCreateResponseBody} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export function createWhatsAppIntegration(client: ChatBotKitClient, request: WhatsAppIntegrationCreateRequest): Promise<WhatsAppIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationUpdateRequestBody
 *
 * @typedef {WhatsAppIntegrationUpdateRequestBody} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationUpdateResponseBody
 *
 * @typedef {WhatsAppIntegrationUpdateResponseBody} WhatsAppIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsAppIntegrationUpdateRequest} request
 * @returns {Promise<WhatsAppIntegrationUpdateResponse>}
 */
export function updateWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string, request: WhatsAppIntegrationUpdateRequest): Promise<WhatsAppIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationDeleteRequestBody
 *
 * @typedef {WhatsAppIntegrationDeleteRequestBody} WhatsAppIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationDeleteResponseBody
 *
 * @typedef {WhatsAppIntegrationDeleteResponseBody} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export function deleteWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): Promise<WhatsAppIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationSetupRequestBody
 *
 * @typedef {WhatsAppIntegrationSetupRequestBody} WhatsAppIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationSetupResponseBody
 *
 * @typedef {WhatsAppIntegrationSetupResponseBody} WhatsAppIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationSetupResponse>}
 */
export function setupWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): Promise<WhatsAppIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type WhatsAppIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type WhatsAppIntegrationListResponse = import("../../types/api/v1.js").operations["listWhatsAppIntegrations"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationListStreamType = import("../../types/api/v1.js").operations["listWhatsAppIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type WhatsAppIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationCreateRequest = WhatsAppIntegrationCreateRequestBody;
export type WhatsAppIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationCreateResponse = WhatsAppIntegrationCreateResponseBody;
export type WhatsAppIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationUpdateRequest = WhatsAppIntegrationUpdateRequestBody;
export type WhatsAppIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationUpdateResponse = WhatsAppIntegrationUpdateResponseBody;
export type WhatsAppIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationDeleteRequest = WhatsAppIntegrationDeleteRequestBody;
export type WhatsAppIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationDeleteResponse = WhatsAppIntegrationDeleteResponseBody;
export type WhatsAppIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationSetupRequest = WhatsAppIntegrationSetupRequestBody;
export type WhatsAppIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationSetupResponse = WhatsAppIntegrationSetupResponseBody;
