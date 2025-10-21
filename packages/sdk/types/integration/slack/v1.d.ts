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
 * }} SlackIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/json']} SlackIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/jsonl']} SlackIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationListRequest} [request]
 * @returns {ResponsePromise<SlackIntegrationListResponse,SlackIntegrationListStreamType>}
 */
export function listSlackIntegrations(client: ChatBotKitClient, request?: SlackIntegrationListRequest): ResponsePromise<SlackIntegrationListResponse, SlackIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {ResponsePromise<SlackIntegrationFetchResponse,never>}
 */
export function fetchSlackIntegration(client: ChatBotKitClient, slackId: string): ResponsePromise<SlackIntegrationFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   signingSecret?: string,
 *   botToken?: string,
 *   visibleMessages?: number,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationCreateRequest} request
 * @returns {Promise<SlackIntegrationCreateResponse>}
 */
export function createSlackIntegration(client: ChatBotKitClient, request: SlackIntegrationCreateRequest): Promise<SlackIntegrationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   signingSecret?: string,
 *   botToken?: string,
 *   visibleMessages?: number,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @param {SlackIntegrationUpdateRequest} request
 * @returns {Promise<SlackIntegrationUpdateResponse>}
 */
export function updateSlackIntegration(client: ChatBotKitClient, slackId: string, request: SlackIntegrationUpdateRequest): Promise<SlackIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationDeleteResponse>}
 */
export function deleteSlackIntegration(client: ChatBotKitClient, slackId: string): Promise<SlackIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationSetupResponse>}
 */
export function setupSlackIntegration(client: ChatBotKitClient, slackId: string): Promise<SlackIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SlackIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SlackIntegrationListResponse = import("../../types/api/v1.js").operations["listSlackIntegrations"]["responses"]["200"]["content"]["application/json"];
export type SlackIntegrationListStreamType = import("../../types/api/v1.js").operations["listSlackIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type SlackIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchSlackIntegration"]["responses"]["200"]["content"]["application/json"];
export type SlackIntegrationCreateRequest = {
    name?: string;
    description?: string;
    signingSecret?: string;
    botToken?: string;
    visibleMessages?: number;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type SlackIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createSlackIntegration"]["requestBody"]["content"]["application/json"];
export type SlackIntegrationCreateResponse = import("../../types/api/v1.js").operations["createSlackIntegration"]["responses"]["200"]["content"]["application/json"];
export type SlackIntegrationUpdateRequest = {
    name?: string;
    description?: string;
    signingSecret?: string;
    botToken?: string;
    visibleMessages?: number;
    contactCollection?: boolean;
    sessionDuration?: number;
    meta?: Record<string, any>;
    botId?: string;
    blueprintId?: string;
    model?: import("../../model/v1.js").Model;
};
export type SlackIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateSlackIntegration"]["requestBody"]["content"]["application/json"];
export type SlackIntegrationUpdateResponse = import("../../types/api/v1.js").operations["updateSlackIntegration"]["responses"]["200"]["content"]["application/json"];
export type SlackIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSlackIntegration"]["requestBody"]["content"]["application/json"];
export type SlackIntegrationDeleteResponse = import("../../types/api/v1.js").operations["deleteSlackIntegration"]["responses"]["200"]["content"]["application/json"];
export type SlackIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupSlackIntegration"]["requestBody"]["content"]["application/json"];
export type SlackIntegrationSetupResponse = import("../../types/api/v1.js").operations["setupSlackIntegration"]["responses"]["200"]["content"]["application/json"];
