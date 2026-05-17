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
 * }} MicrosoftteamsIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMicrosoftteamsIntegrations']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMicrosoftteamsIntegrations']['responses']['200']['content']['application/jsonl']} MicrosoftteamsIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MicrosoftteamsIntegrationListRequest} [request]
 * @returns {ResponsePromise<MicrosoftteamsIntegrationListResponse,MicrosoftteamsIntegrationListStreamType>}
 */
export function listMicrosoftteamsIntegrations(client: ChatBotKitClient, request?: MicrosoftteamsIntegrationListRequest): ResponsePromise<MicrosoftteamsIntegrationListResponse, MicrosoftteamsIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @returns {ResponsePromise<MicrosoftteamsIntegrationFetchResponse,never>}
 */
export function fetchMicrosoftteamsIntegration(client: ChatBotKitClient, microsoftteamsId: string): ResponsePromise<MicrosoftteamsIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationCreateRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationCreateRequestBody} MicrosoftteamsIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationCreateResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationCreateResponseBody} MicrosoftteamsIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MicrosoftteamsIntegrationCreateRequest} request
 * @returns {Promise<MicrosoftteamsIntegrationCreateResponse>}
 */
export function createMicrosoftteamsIntegration(client: ChatBotKitClient, request: MicrosoftteamsIntegrationCreateRequest): Promise<MicrosoftteamsIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationUpdateRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationUpdateRequestBody} MicrosoftteamsIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationUpdateResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationUpdateResponseBody} MicrosoftteamsIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsIntegrationUpdateRequest} request
 * @returns {Promise<MicrosoftteamsIntegrationUpdateResponse>}
 */
export function updateMicrosoftteamsIntegration(client: ChatBotKitClient, microsoftteamsId: string, request: MicrosoftteamsIntegrationUpdateRequest): Promise<MicrosoftteamsIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationDeleteRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationDeleteRequestBody} MicrosoftteamsIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationDeleteResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationDeleteResponseBody} MicrosoftteamsIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsIntegrationDeleteRequest} [request]
 * @returns {Promise<MicrosoftteamsIntegrationDeleteResponse>}
 */
export function deleteMicrosoftteamsIntegration(client: ChatBotKitClient, microsoftteamsId: string, request?: MicrosoftteamsIntegrationDeleteRequest): Promise<MicrosoftteamsIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationSetupRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationSetupRequestBody} MicrosoftteamsIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationSetupResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationSetupResponseBody} MicrosoftteamsIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @returns {Promise<MicrosoftteamsIntegrationSetupResponse>}
 */
export function setupMicrosoftteamsIntegration(client: ChatBotKitClient, microsoftteamsId: string): Promise<MicrosoftteamsIntegrationSetupResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['initiateTeams']['requestBody']['content']['application/json']} MicrosoftteamsInitiateRequestBody
 *
 * @typedef {MicrosoftteamsInitiateRequestBody} MicrosoftteamsInitiateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['initiateTeams']['responses']['200']['content']['application/json']} MicrosoftteamsInitiateResponseBody
 *
 * @typedef {MicrosoftteamsInitiateResponseBody} MicrosoftteamsInitiateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsInitiateRequest} request
 * @returns {Promise<MicrosoftteamsInitiateResponse>}
 */
export function initiateMicrosoftteams(client: ChatBotKitClient, microsoftteamsId: string, request: MicrosoftteamsInitiateRequest): Promise<MicrosoftteamsInitiateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type MicrosoftteamsIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type MicrosoftteamsIntegrationListResponse = import("../../types/api/v1.js").operations["listMicrosoftteamsIntegrations"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationListStreamType = import("../../types/api/v1.js").operations["listMicrosoftteamsIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type MicrosoftteamsIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchMicrosoftteamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createMicrosoftteamsIntegration"]["requestBody"]["content"]["application/json"];
export type MicrosoftteamsIntegrationCreateRequest = MicrosoftteamsIntegrationCreateRequestBody;
export type MicrosoftteamsIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createMicrosoftteamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationCreateResponse = MicrosoftteamsIntegrationCreateResponseBody;
export type MicrosoftteamsIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateMicrosoftteamsIntegration"]["requestBody"]["content"]["application/json"];
export type MicrosoftteamsIntegrationUpdateRequest = MicrosoftteamsIntegrationUpdateRequestBody;
export type MicrosoftteamsIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateMicrosoftteamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationUpdateResponse = MicrosoftteamsIntegrationUpdateResponseBody;
export type MicrosoftteamsIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteMicrosoftteamsIntegration"]["requestBody"]["content"]["application/json"];
export type MicrosoftteamsIntegrationDeleteRequest = MicrosoftteamsIntegrationDeleteRequestBody;
export type MicrosoftteamsIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteMicrosoftteamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationDeleteResponse = MicrosoftteamsIntegrationDeleteResponseBody;
export type MicrosoftteamsIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupMicrosoftteamsIntegration"]["requestBody"]["content"]["application/json"];
export type MicrosoftteamsIntegrationSetupRequest = MicrosoftteamsIntegrationSetupRequestBody;
export type MicrosoftteamsIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupMicrosoftteamsIntegration"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsIntegrationSetupResponse = MicrosoftteamsIntegrationSetupResponseBody;
export type MicrosoftteamsInitiateRequestBody = import("../../types/api/v1.js").operations["initiateTeams"]["requestBody"]["content"]["application/json"];
export type MicrosoftteamsInitiateRequest = MicrosoftteamsInitiateRequestBody;
export type MicrosoftteamsInitiateResponseBody = import("../../types/api/v1.js").operations["initiateTeams"]["responses"]["200"]["content"]["application/json"];
export type MicrosoftteamsInitiateResponse = MicrosoftteamsInitiateResponseBody;
