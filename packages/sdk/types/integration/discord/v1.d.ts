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
 * }} DiscordIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/json']} DiscordIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/jsonl']} DiscordIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationListRequest} [request]
 * @returns {ResponsePromise<DiscordIntegrationListResponse,DiscordIntegrationListStreamType>}
 */
export function listDiscordIntegrations(client: ChatBotKitClient, request?: DiscordIntegrationListRequest): ResponsePromise<DiscordIntegrationListResponse, DiscordIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {ResponsePromise<DiscordIntegrationFetchResponse,never>}
 */
export function fetchDiscordIntegration(client: ChatBotKitClient, discordId: string): ResponsePromise<DiscordIntegrationFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationCreateRequest} request
 * @returns {Promise<DiscordIntegrationCreateResponse>}
 */
export function createDiscordIntegration(client: ChatBotKitClient, request: DiscordIntegrationCreateRequest): Promise<DiscordIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @param {DiscordIntegrationUpdateRequest} request
 * @returns {Promise<DiscordIntegrationUpdateResponse>}
 */
export function updateDiscordIntegration(client: ChatBotKitClient, discordId: string, request: DiscordIntegrationUpdateRequest): Promise<DiscordIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationDeleteResponse>}
 */
export function deleteDiscordIntegration(client: ChatBotKitClient, discordId: string): Promise<DiscordIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationSetupResponse>}
 */
export function setupDiscordIntegration(client: ChatBotKitClient, discordId: string): Promise<DiscordIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type DiscordIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DiscordIntegrationListResponse = import("../../types/api/v1.js").operations["listDiscordIntegrations"]["responses"]["200"]["content"]["application/json"];
export type DiscordIntegrationListStreamType = import("../../types/api/v1.js").operations["listDiscordIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type DiscordIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchDiscordIntegration"]["responses"]["200"]["content"]["application/json"];
export type DiscordIntegrationCreateRequest = {
    name?: string;
    description?: string;
    appId?: string;
    botToken?: string;
    publicKey?: string;
    handle?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type DiscordIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createDiscordIntegration"]["requestBody"]["content"]["application/json"];
export type DiscordIntegrationCreateResponse = import("../../types/api/v1.js").operations["createDiscordIntegration"]["responses"]["200"]["content"]["application/json"];
export type DiscordIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    appId?: string;
    botToken?: string;
    publicKey?: string;
    handle?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type DiscordIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateDiscordIntegration"]["requestBody"]["content"]["application/json"];
export type DiscordIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateDiscordIntegration"]["responses"]["200"]["content"]["application/json"];
export type DiscordIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteDiscordIntegration"]["requestBody"]["content"]["application/json"];
export type DiscordIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteDiscordIntegration"]["responses"]["200"]["content"]["application/json"];
export type DiscordIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupDiscordIntegration"]["requestBody"]["content"]["application/json"];
export type DiscordIntegrationSetupResponse = import("../../types/api/v1.js").operations["setupDiscordIntegration"]["responses"]["200"]["content"]["application/json"];
