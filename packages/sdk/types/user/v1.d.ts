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
 *   meta?: Record<string,string>,
 *   email?: string
 * }} UserListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listUsers']['responses']['200']['content']['application/json']} UserListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listUsers']['responses']['200']['content']['application/jsonl']} UserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {UserListRequest} [request]
 * @returns {ResponsePromise<UserListResponse,UserListStreamType>}
 */
export function listUsers(client: ChatBotKitClient, request?: UserListRequest): ResponsePromise<UserListResponse, UserListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchUser']['responses']['200']['content']['application/json']} UserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<UserFetchResponse,never>}
 */
export function fetchUser(client: ChatBotKitClient, userId: string): ResponsePromise<UserFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createUser']['requestBody']['content']['application/json']} UserCreateRequestBody
 *
 * @typedef {UserCreateRequestBody} UserCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createUser']['responses']['200']['content']['application/json']} UserCreateResponseBody
 *
 * @typedef {UserCreateResponseBody} UserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {UserCreateRequest} request
 * @returns {Promise<UserCreateResponse>}
 */
export function createUser(client: ChatBotKitClient, request: UserCreateRequest): Promise<UserCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateUser']['requestBody']['content']['application/json']} UserUpdateRequestBody
 *
 * @typedef {UserUpdateRequestBody} UserUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateUser']['responses']['200']['content']['application/json']} UserUpdateResponseBody
 *
 * @typedef {UserUpdateResponseBody} UserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserUpdateRequest} request
 * @returns {Promise<UserUpdateResponse>}
 */
export function updateUser(client: ChatBotKitClient, userId: string, request: UserUpdateRequest): Promise<UserUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteUser']['requestBody']['content']['application/json']} UserDeleteRequestBody
 *
 * @typedef {UserDeleteRequestBody} UserDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteUser']['responses']['200']['content']['application/json']} UserDeleteResponseBody
 *
 * @typedef {UserDeleteResponseBody} UserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserDeleteRequest} [request]
 * @returns {Promise<UserDeleteResponse>}
 */
export function deleteUser(client: ChatBotKitClient, userId: string, request?: UserDeleteRequest): Promise<UserDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type UserListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    email?: string;
};
export type UserListResponse = import("../types/api/v1.js").operations["listUsers"]["responses"]["200"]["content"]["application/json"];
export type UserListStreamType = import("../types/api/v1.js").operations["listUsers"]["responses"]["200"]["content"]["application/jsonl"];
export type UserFetchResponse = import("../types/api/v1.js").operations["fetchUser"]["responses"]["200"]["content"]["application/json"];
export type UserCreateRequestBody = import("../types/api/v1.js").operations["createUser"]["requestBody"]["content"]["application/json"];
export type UserCreateRequest = UserCreateRequestBody;
export type UserCreateResponseBody = import("../types/api/v1.js").operations["createUser"]["responses"]["200"]["content"]["application/json"];
export type UserCreateResponse = UserCreateResponseBody;
export type UserUpdateRequestBody = import("../types/api/v1.js").operations["updateUser"]["requestBody"]["content"]["application/json"];
export type UserUpdateRequest = UserUpdateRequestBody;
export type UserUpdateResponseBody = import("../types/api/v1.js").operations["updateUser"]["responses"]["200"]["content"]["application/json"];
export type UserUpdateResponse = UserUpdateResponseBody;
export type UserDeleteRequestBody = import("../types/api/v1.js").operations["deleteUser"]["requestBody"]["content"]["application/json"];
export type UserDeleteRequest = UserDeleteRequestBody;
export type UserDeleteResponseBody = import("../types/api/v1.js").operations["deleteUser"]["responses"]["200"]["content"]["application/json"];
export type UserDeleteResponse = UserDeleteResponseBody;
