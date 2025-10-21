/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/json']} SkillsetListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/jsonl']} SkillsetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetListRequest} [request]
 * @returns {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function listSkillsets(client: ChatBotKitClient, request?: SkillsetListRequest): ResponsePromise<SkillsetListResponse, SkillsetListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchSkillset']['responses']['200']['content']['application/json']} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {ResponsePromise<SkillsetFetchResponse,never>}
 */
export function fetchSkillset(client: ChatBotKitClient, skillsetId: string): ResponsePromise<SkillsetFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createSkillset']['requestBody']['content']['application/json']} SkillsetCreateRequestBody
 *
 * @typedef {SkillsetCreateRequestBody} SkillsetCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSkillset']['responses']['200']['content']['application/json']} SkillsetCreateResponseBody
 *
 * @typedef {SkillsetCreateResponseBody} SkillsetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetCreateRequest} request
 * @returns {Promise<SkillsetCreateResponse>}
 */
export function createSkillset(client: ChatBotKitClient, request: SkillsetCreateRequest): Promise<SkillsetCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateSkillset']['requestBody']['content']['application/json']} SkillsetUpdateRequestBody
 *
 * @typedef {SkillsetUpdateRequestBody} SkillsetUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSkillset']['responses']['200']['content']['application/json']} SkillsetUpdateResponseBody
 *
 * @typedef {SkillsetUpdateResponseBody} SkillsetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetUpdateRequest} request
 * @returns {Promise<SkillsetUpdateResponse>}
 */
export function updateSkillset(client: ChatBotKitClient, skillsetId: string, request: SkillsetUpdateRequest): Promise<SkillsetUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteSkillset']['requestBody']['content']['application/json']} SkillsetDeleteRequestBody
 *
 * @typedef {SkillsetDeleteRequestBody} SkillsetDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSkillset']['responses']['200']['content']['application/json']} SkillsetDeleteResponseBody
 *
 * @typedef {SkillsetDeleteResponseBody} SkillsetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetDeleteResponse>}
 */
export function deleteSkillset(client: ChatBotKitClient, skillsetId: string): Promise<SkillsetDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type SkillsetListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SkillsetListResponse = import("../types/api/v1.js").operations["listSkillsets"]["responses"]["200"]["content"]["application/json"];
export type SkillsetListStreamType = import("../types/api/v1.js").operations["listSkillsets"]["responses"]["200"]["content"]["application/jsonl"];
export type SkillsetFetchResponse = import("../types/api/v1.js").operations["fetchSkillset"]["responses"]["200"]["content"]["application/json"];
export type SkillsetCreateRequestBody = import("../types/api/v1.js").operations["createSkillset"]["requestBody"]["content"]["application/json"];
export type SkillsetCreateRequest = SkillsetCreateRequestBody;
export type SkillsetCreateResponseBody = import("../types/api/v1.js").operations["createSkillset"]["responses"]["200"]["content"]["application/json"];
export type SkillsetCreateResponse = SkillsetCreateResponseBody;
export type SkillsetUpdateRequestBody = import("../types/api/v1.js").operations["updateSkillset"]["requestBody"]["content"]["application/json"];
export type SkillsetUpdateRequest = SkillsetUpdateRequestBody;
export type SkillsetUpdateResponseBody = import("../types/api/v1.js").operations["updateSkillset"]["responses"]["200"]["content"]["application/json"];
export type SkillsetUpdateResponse = SkillsetUpdateResponseBody;
export type SkillsetDeleteRequestBody = import("../types/api/v1.js").operations["deleteSkillset"]["requestBody"]["content"]["application/json"];
export type SkillsetDeleteRequest = SkillsetDeleteRequestBody;
export type SkillsetDeleteResponseBody = import("../types/api/v1.js").operations["deleteSkillset"]["responses"]["200"]["content"]["application/json"];
export type SkillsetDeleteResponse = SkillsetDeleteResponseBody;
