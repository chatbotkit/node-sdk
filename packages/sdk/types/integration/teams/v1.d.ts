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
 * }} TeamsIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTeamsIntegrations']['responses']['200']['content']['application/json']} TeamsIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTeamsIntegrations']['responses']['200']['content']['application/jsonl']} TeamsIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamsIntegrationListRequest} [request]
 * @returns {ResponsePromise<TeamsIntegrationListResponse,TeamsIntegrationListStreamType>}
 */
export function listTeamsIntegrations(client: ChatBotKitClient, request?: TeamsIntegrationListRequest): ResponsePromise<TeamsIntegrationListResponse, TeamsIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @returns {ResponsePromise<TeamsIntegrationFetchResponse,never>}
 */
export function fetchTeamsIntegration(client: ChatBotKitClient, teamsId: string): ResponsePromise<TeamsIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationCreateRequestBody
 *
 * @typedef {TeamsIntegrationCreateRequestBody} TeamsIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationCreateResponseBody
 *
 * @typedef {TeamsIntegrationCreateResponseBody} TeamsIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TeamsIntegrationCreateRequest} request
 * @returns {Promise<TeamsIntegrationCreateResponse>}
 */
export function createTeamsIntegration(client: ChatBotKitClient, request: TeamsIntegrationCreateRequest): Promise<TeamsIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationUpdateRequestBody
 *
 * @typedef {TeamsIntegrationUpdateRequestBody} TeamsIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationUpdateResponseBody
 *
 * @typedef {TeamsIntegrationUpdateResponseBody} TeamsIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @param {TeamsIntegrationUpdateRequest} request
 * @returns {Promise<TeamsIntegrationUpdateResponse>}
 */
export function updateTeamsIntegration(client: ChatBotKitClient, teamsId: string, request: TeamsIntegrationUpdateRequest): Promise<TeamsIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationDeleteRequestBody
 *
 * @typedef {TeamsIntegrationDeleteRequestBody} TeamsIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationDeleteResponseBody
 *
 * @typedef {TeamsIntegrationDeleteResponseBody} TeamsIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @returns {Promise<TeamsIntegrationDeleteResponse>}
 */
export function deleteTeamsIntegration(client: ChatBotKitClient, teamsId: string): Promise<TeamsIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationSetupRequestBody
 *
 * @typedef {TeamsIntegrationSetupRequestBody} TeamsIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationSetupResponseBody
 *
 * @typedef {TeamsIntegrationSetupResponseBody} TeamsIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @returns {Promise<TeamsIntegrationSetupResponse>}
 */
export function setupTeamsIntegration(client: ChatBotKitClient, teamsId: string): Promise<TeamsIntegrationSetupResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type TeamsIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TeamsIntegrationListResponse = import("../../types/api/v1.js").operations["listTeamsIntegrations"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationListStreamType = import("../../types/api/v1.js").operations["listTeamsIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type TeamsIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchTeamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createTeamsIntegration"]["requestBody"]["content"]["application/json"];
export type TeamsIntegrationCreateRequest = TeamsIntegrationCreateRequestBody;
export type TeamsIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createTeamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationCreateResponse = TeamsIntegrationCreateResponseBody;
export type TeamsIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateTeamsIntegration"]["requestBody"]["content"]["application/json"];
export type TeamsIntegrationUpdateRequest = TeamsIntegrationUpdateRequestBody;
export type TeamsIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateTeamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationUpdateResponse = TeamsIntegrationUpdateResponseBody;
export type TeamsIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteTeamsIntegration"]["requestBody"]["content"]["application/json"];
export type TeamsIntegrationDeleteRequest = TeamsIntegrationDeleteRequestBody;
export type TeamsIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteTeamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationDeleteResponse = TeamsIntegrationDeleteResponseBody;
export type TeamsIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupTeamsIntegration"]["requestBody"]["content"]["application/json"];
export type TeamsIntegrationSetupRequest = TeamsIntegrationSetupRequestBody;
export type TeamsIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupTeamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type TeamsIntegrationSetupResponse = TeamsIntegrationSetupResponseBody;
