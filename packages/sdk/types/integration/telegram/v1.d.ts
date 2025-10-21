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
 * }} TelegramIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/json']} TelegramIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/jsonl']} TelegramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationListRequest} [request]
 * @returns {ResponsePromise<TelegramIntegrationListResponse,TelegramIntegrationListStreamType>}
 */
export function listTelegramIntegrations(client: ChatBotKitClient, request?: TelegramIntegrationListRequest): ResponsePromise<TelegramIntegrationListResponse, TelegramIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {ResponsePromise<TelegramIntegrationFetchResponse,never>}
 */
export function fetchTelegramIntegration(client: ChatBotKitClient, telegramId: string): ResponsePromise<TelegramIntegrationFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationCreateRequest} request
 * @returns {Promise<TelegramIntegrationCreateResponse>}
 */
export function createTelegramIntegration(client: ChatBotKitClient, request: TelegramIntegrationCreateRequest): Promise<TelegramIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @param {TelegramIntegrationUpdateRequest} request
 * @returns {Promise<TelegramIntegrationUpdateResponse>}
 */
export function updateTelegramIntegration(client: ChatBotKitClient, telegramId: string, request: TelegramIntegrationUpdateRequest): Promise<TelegramIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationDeleteResponse>}
 */
export function deleteTelegramIntegration(client: ChatBotKitClient, telegramId: string): Promise<TelegramIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationSetupResponse>}
 */
export function setupTelegramIntegration(client: ChatBotKitClient, telegramId: string): Promise<TelegramIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TelegramIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TelegramIntegrationListResponse = import("../../types/api/v1.js").operations["listTelegramIntegrations"]["responses"]["200"]["content"]["application/json"];
export type TelegramIntegrationListStreamType = import("../../types/api/v1.js").operations["listTelegramIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type TelegramIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchTelegramIntegration"]["responses"]["200"]["content"]["application/json"];
export type TelegramIntegrationCreateRequest = {
    name?: string;
    description?: string;
    botToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type TelegramIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createTelegramIntegration"]["requestBody"]["content"]["application/json"];
export type TelegramIntegrationCreateResponse = import("../../types/api/v1.js").operations["createTelegramIntegration"]["responses"]["200"]["content"]["application/json"];
export type TelegramIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    botToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type TelegramIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateTelegramIntegration"]["requestBody"]["content"]["application/json"];
export type TelegramIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateTelegramIntegration"]["responses"]["200"]["content"]["application/json"];
export type TelegramIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteTelegramIntegration"]["requestBody"]["content"]["application/json"];
export type TelegramIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteTelegramIntegration"]["responses"]["200"]["content"]["application/json"];
export type TelegramIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupTelegramIntegration"]["requestBody"]["content"]["application/json"];
export type TelegramIntegrationSetupResponse = import("../../types/api/v1.js").operations["setupTelegramIntegration"]["responses"]["200"]["content"]["application/json"];
