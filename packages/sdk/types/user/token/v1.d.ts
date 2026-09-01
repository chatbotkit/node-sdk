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
 * }} UserTokenListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserTokens']['responses']['200']['content']['application/json']} UserTokenListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listUserTokens']['responses']['200']['content']['application/jsonl']} UserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserTokenListRequest} [request]
 * @returns {ResponsePromise<UserTokenListResponse,UserTokenListStreamType>}
 */
export function listUserTokens(client: ChatBotKitClient, userId: string, request?: UserTokenListRequest): ResponsePromise<UserTokenListResponse, UserTokenListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createUserToken']['requestBody']['content']['application/json']} UserTokenCreateRequestBody
 *
 * @typedef {UserTokenCreateRequestBody} UserTokenCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createUserToken']['responses']['200']['content']['application/json']} UserTokenCreateResponseBody
 *
 * @typedef {UserTokenCreateResponseBody} UserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserTokenCreateRequest} request
 * @returns {Promise<UserTokenCreateResponse>}
 */
export function createUserToken(client: ChatBotKitClient, userId: string, request: UserTokenCreateRequest): Promise<UserTokenCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateUserToken']['requestBody']['content']['application/json']} UserTokenUpdateRequestBody
 *
 * @typedef {UserTokenUpdateRequestBody} UserTokenUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateUserToken']['responses']['200']['content']['application/json']} UserTokenUpdateResponseBody
 *
 * @typedef {UserTokenUpdateResponseBody} UserTokenUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @param {UserTokenUpdateRequest} request
 * @returns {Promise<UserTokenUpdateResponse>}
 */
export function updateUserToken(client: ChatBotKitClient, userId: string, tokenId: string, request: UserTokenUpdateRequest): Promise<UserTokenUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteUserToken']['requestBody']['content']['application/json']} UserTokenDeleteRequestBody
 *
 * @typedef {UserTokenDeleteRequestBody} UserTokenDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteUserToken']['responses']['200']['content']['application/json']} UserTokenDeleteResponseBody
 *
 * @typedef {UserTokenDeleteResponseBody} UserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @param {UserTokenDeleteRequest} [request]
 * @returns {Promise<UserTokenDeleteResponse>}
 */
export function deleteUserToken(client: ChatBotKitClient, userId: string, tokenId: string, request?: UserTokenDeleteRequest): Promise<UserTokenDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type UserTokenListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type UserTokenListResponse = import("../../types/api/v1.js").operations["listUserTokens"]["responses"]["200"]["content"]["application/json"];
export type UserTokenListStreamType = import("../../types/api/v1.js").operations["listUserTokens"]["responses"]["200"]["content"]["application/jsonl"];
export type UserTokenCreateRequestBody = import("../../types/api/v1.js").operations["createUserToken"]["requestBody"]["content"]["application/json"];
export type UserTokenCreateRequest = UserTokenCreateRequestBody;
export type UserTokenCreateResponseBody = import("../../types/api/v1.js").operations["createUserToken"]["responses"]["200"]["content"]["application/json"];
export type UserTokenCreateResponse = UserTokenCreateResponseBody;
export type UserTokenUpdateRequestBody = import("../../types/api/v1.js").operations["updateUserToken"]["requestBody"]["content"]["application/json"];
export type UserTokenUpdateRequest = UserTokenUpdateRequestBody;
export type UserTokenUpdateResponseBody = import("../../types/api/v1.js").operations["updateUserToken"]["responses"]["200"]["content"]["application/json"];
export type UserTokenUpdateResponse = UserTokenUpdateResponseBody;
export type UserTokenDeleteRequestBody = import("../../types/api/v1.js").operations["deleteUserToken"]["requestBody"]["content"]["application/json"];
export type UserTokenDeleteRequest = UserTokenDeleteRequestBody;
export type UserTokenDeleteResponseBody = import("../../types/api/v1.js").operations["deleteUserToken"]["responses"]["200"]["content"]["application/json"];
export type UserTokenDeleteResponse = UserTokenDeleteResponseBody;
