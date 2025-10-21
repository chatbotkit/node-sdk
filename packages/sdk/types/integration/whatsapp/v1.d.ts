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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export function createWhatsAppIntegration(client: ChatBotKitClient, request: WhatsAppIntegrationCreateRequest): Promise<WhatsAppIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationUpdateResponse
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
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export function deleteWhatsAppIntegration(client: ChatBotKitClient, whatsappId: string): Promise<WhatsAppIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationSetupResponse
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
export type WhatsAppIntegrationCreateRequest = {
    name?: string;
    description?: string;
    phoneNumberId?: string;
    accessToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type WhatsAppIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationCreateResponse = import("../../types/api/v1.js").operations["createWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    phoneNumberId?: string;
    accessToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type WhatsAppIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
export type WhatsAppIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupWhatsAppIntegration"]["requestBody"]["content"]["application/json"];
export type WhatsAppIntegrationSetupResponse = import("../../types/api/v1.js").operations["setupWhatsAppIntegration"]["responses"]["200"]["content"]["application/json"];
