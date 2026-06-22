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
 * }} SkillServerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillServerIntegrations']['responses']['200']['content']['application/json']} SkillServerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillServerIntegrations']['responses']['200']['content']['application/jsonl']} SkillServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<SkillServerIntegrationListResponse,SkillServerIntegrationListStreamType>}
 */
export function listSkillServerIntegrations(client: ChatBotKitClient, request?: SkillServerIntegrationListRequest): ResponsePromise<SkillServerIntegrationListResponse, SkillServerIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @returns {ResponsePromise<SkillServerIntegrationFetchResponse,never>}
 */
export function fetchSkillServerIntegration(client: ChatBotKitClient, skillserverId: string): ResponsePromise<SkillServerIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationCreateRequestBody
 *
 * @typedef {SkillServerIntegrationCreateRequestBody} SkillServerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationCreateResponseBody
 *
 * @typedef {SkillServerIntegrationCreateResponseBody} SkillServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillServerIntegrationCreateRequest} request
 * @returns {Promise<SkillServerIntegrationCreateResponse>}
 */
export function createSkillServerIntegration(client: ChatBotKitClient, request: SkillServerIntegrationCreateRequest): Promise<SkillServerIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationUpdateRequestBody
 *
 * @typedef {SkillServerIntegrationUpdateRequestBody} SkillServerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationUpdateResponseBody
 *
 * @typedef {SkillServerIntegrationUpdateResponseBody} SkillServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @param {SkillServerIntegrationUpdateRequest} request
 * @returns {Promise<SkillServerIntegrationUpdateResponse>}
 */
export function updateSkillServerIntegration(client: ChatBotKitClient, skillserverId: string, request: SkillServerIntegrationUpdateRequest): Promise<SkillServerIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationDeleteRequestBody
 *
 * @typedef {SkillServerIntegrationDeleteRequestBody} SkillServerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationDeleteResponseBody
 *
 * @typedef {SkillServerIntegrationDeleteResponseBody} SkillServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @param {SkillServerIntegrationDeleteRequest} [request]
 * @returns {Promise<SkillServerIntegrationDeleteResponse>}
 */
export function deleteSkillServerIntegration(client: ChatBotKitClient, skillserverId: string, request?: SkillServerIntegrationDeleteRequest): Promise<SkillServerIntegrationDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SkillServerIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SkillServerIntegrationListResponse = import("../../types/api/v1.js").operations["listSkillServerIntegrations"]["responses"]["200"]["content"]["application/json"];
export type SkillServerIntegrationListStreamType = import("../../types/api/v1.js").operations["listSkillServerIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type SkillServerIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchSkillServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type SkillServerIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createSkillServerIntegration"]["requestBody"]["content"]["application/json"];
export type SkillServerIntegrationCreateRequest = SkillServerIntegrationCreateRequestBody;
export type SkillServerIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createSkillServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type SkillServerIntegrationCreateResponse = SkillServerIntegrationCreateResponseBody;
export type SkillServerIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateSkillServerIntegration"]["requestBody"]["content"]["application/json"];
export type SkillServerIntegrationUpdateRequest = SkillServerIntegrationUpdateRequestBody;
export type SkillServerIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateSkillServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type SkillServerIntegrationUpdateResponse = SkillServerIntegrationUpdateResponseBody;
export type SkillServerIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSkillServerIntegration"]["requestBody"]["content"]["application/json"];
export type SkillServerIntegrationDeleteRequest = SkillServerIntegrationDeleteRequestBody;
export type SkillServerIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteSkillServerIntegration"]["responses"]["200"]["content"]["application/json"];
export type SkillServerIntegrationDeleteResponse = SkillServerIntegrationDeleteResponseBody;
