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
 *   meta?: Record<string,string>,
 *   blueprintId?: string,
 *   botId?: string,
 *   datasetId?: string,
 *   skillsetId?: string
 * }} UserContextListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserContexts']['responses']['200']['content']['application/json']} UserContextListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserContexts']['responses']['200']['content']['application/jsonl']} UserContextListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserContextListRequest} [request]
 * @returns {ResponsePromise<UserContextListResponse,UserContextListStreamType>}
 */
export function listUserContexts(client: ChatBotKitClient, userId: string, request?: UserContextListRequest): ResponsePromise<UserContextListResponse, UserContextListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchUserContext']['responses']['200']['content']['application/json']} UserContextFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @returns {ResponsePromise<UserContextFetchResponse,never>}
 */
export function fetchUserContext(client: ChatBotKitClient, userId: string, contextId: string): ResponsePromise<UserContextFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createUserContext']['requestBody']['content']['application/json']} UserContextCreateRequestBody
 *
 * @typedef {UserContextCreateRequestBody} UserContextCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createUserContext']['responses']['200']['content']['application/json']} UserContextCreateResponseBody
 *
 * @typedef {UserContextCreateResponseBody} UserContextCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserContextCreateRequest} request
 * @returns {Promise<UserContextCreateResponse>}
 */
export function createUserContext(client: ChatBotKitClient, userId: string, request: UserContextCreateRequest): Promise<UserContextCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateUserContext']['requestBody']['content']['application/json']} UserContextUpdateRequestBody
 *
 * @typedef {UserContextUpdateRequestBody} UserContextUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateUserContext']['responses']['200']['content']['application/json']} UserContextUpdateResponseBody
 *
 * @typedef {UserContextUpdateResponseBody} UserContextUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {UserContextUpdateRequest} request
 * @returns {Promise<UserContextUpdateResponse>}
 */
export function updateUserContext(client: ChatBotKitClient, userId: string, contextId: string, request: UserContextUpdateRequest): Promise<UserContextUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteUserContext']['requestBody']['content']['application/json']} UserContextDeleteRequestBody
 *
 * @typedef {UserContextDeleteRequestBody} UserContextDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteUserContext']['responses']['200']['content']['application/json']} UserContextDeleteResponseBody
 *
 * @typedef {UserContextDeleteResponseBody} UserContextDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {UserContextDeleteRequest} [request]
 * @returns {Promise<UserContextDeleteResponse>}
 */
export function deleteUserContext(client: ChatBotKitClient, userId: string, contextId: string, request?: UserContextDeleteRequest): Promise<UserContextDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type UserContextListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    blueprintId?: string;
    botId?: string;
    datasetId?: string;
    skillsetId?: string;
};
export type UserContextListResponse = import("../../types/api/v1.js").operations["listUserContexts"]["responses"]["200"]["content"]["application/json"];
export type UserContextListStreamType = import("../../types/api/v1.js").operations["listUserContexts"]["responses"]["200"]["content"]["application/jsonl"];
export type UserContextFetchResponse = import("../../types/api/v1.js").operations["fetchUserContext"]["responses"]["200"]["content"]["application/json"];
export type UserContextCreateRequestBody = import("../../types/api/v1.js").operations["createUserContext"]["requestBody"]["content"]["application/json"];
export type UserContextCreateRequest = UserContextCreateRequestBody;
export type UserContextCreateResponseBody = import("../../types/api/v1.js").operations["createUserContext"]["responses"]["200"]["content"]["application/json"];
export type UserContextCreateResponse = UserContextCreateResponseBody;
export type UserContextUpdateRequestBody = import("../../types/api/v1.js").operations["updateUserContext"]["requestBody"]["content"]["application/json"];
export type UserContextUpdateRequest = UserContextUpdateRequestBody;
export type UserContextUpdateResponseBody = import("../../types/api/v1.js").operations["updateUserContext"]["responses"]["200"]["content"]["application/json"];
export type UserContextUpdateResponse = UserContextUpdateResponseBody;
export type UserContextDeleteRequestBody = import("../../types/api/v1.js").operations["deleteUserContext"]["requestBody"]["content"]["application/json"];
export type UserContextDeleteRequest = UserContextDeleteRequestBody;
export type UserContextDeleteResponseBody = import("../../types/api/v1.js").operations["deleteUserContext"]["responses"]["200"]["content"]["application/json"];
export type UserContextDeleteResponse = UserContextDeleteResponseBody;
