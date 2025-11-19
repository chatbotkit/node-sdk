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
 *   email?: string
 * }} PartnerUserListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/json']} PartnerUserListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPartnerUsers']['responses']['200']['content']['application/jsonl']} PartnerUserListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserListRequest} [request]
 * @returns {ResponsePromise<PartnerUserListResponse,PartnerUserListStreamType>}
 */
export function listPartnerUsers(client: ChatBotKitClient, request?: PartnerUserListRequest): ResponsePromise<PartnerUserListResponse, PartnerUserListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchPartnerUser']['responses']['200']['content']['application/json']} PartnerUserFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {ResponsePromise<PartnerUserFetchResponse,never>}
 */
export function fetchPartnerUser(client: ChatBotKitClient, userId: string): ResponsePromise<PartnerUserFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createPartnerUser']['requestBody']['content']['application/json']} PartnerUserCreateRequestBody
 *
 * @typedef {PartnerUserCreateRequestBody} PartnerUserCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createPartnerUser']['responses']['200']['content']['application/json']} PartnerUserCreateResponseBody
 *
 * @typedef {PartnerUserCreateResponseBody} PartnerUserCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PartnerUserCreateRequest} request
 * @returns {Promise<PartnerUserCreateResponse>}
 */
export function createPartnerUser(client: ChatBotKitClient, request: PartnerUserCreateRequest): Promise<PartnerUserCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updatePartnerUser']['requestBody']['content']['application/json']} PartnerUserUpdateRequestBody
 *
 * @typedef {PartnerUserUpdateRequestBody} PartnerUserUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updatePartnerUser']['responses']['200']['content']['application/json']} PartnerUserUpdateResponseBody
 *
 * @typedef {PartnerUserUpdateResponseBody} PartnerUserUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserUpdateRequest} request
 * @returns {Promise<PartnerUserUpdateResponse>}
 */
export function updatePartnerUser(client: ChatBotKitClient, userId: string, request: PartnerUserUpdateRequest): Promise<PartnerUserUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deletePartnerUser']['requestBody']['content']['application/json']} PartnerUserDeleteRequestBody
 *
 * @typedef {PartnerUserDeleteRequestBody} PartnerUserDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deletePartnerUser']['responses']['200']['content']['application/json']} PartnerUserDeleteResponseBody
 *
 * @typedef {PartnerUserDeleteResponseBody} PartnerUserDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @returns {Promise<PartnerUserDeleteResponse>}
 */
export function deletePartnerUser(client: ChatBotKitClient, userId: string): Promise<PartnerUserDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PartnerUserListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    email?: string;
};
export type PartnerUserListResponse = import("../../types/api/v1.js").operations["listPartnerUsers"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserListStreamType = import("../../types/api/v1.js").operations["listPartnerUsers"]["responses"]["200"]["content"]["application/jsonl"];
export type PartnerUserFetchResponse = import("../../types/api/v1.js").operations["fetchPartnerUser"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserCreateRequestBody = import("../../types/api/v1.js").operations["createPartnerUser"]["requestBody"]["content"]["application/json"];
export type PartnerUserCreateRequest = PartnerUserCreateRequestBody;
export type PartnerUserCreateResponseBody = import("../../types/api/v1.js").operations["createPartnerUser"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserCreateResponse = PartnerUserCreateResponseBody;
export type PartnerUserUpdateRequestBody = import("../../types/api/v1.js").operations["updatePartnerUser"]["requestBody"]["content"]["application/json"];
export type PartnerUserUpdateRequest = PartnerUserUpdateRequestBody;
export type PartnerUserUpdateResponseBody = import("../../types/api/v1.js").operations["updatePartnerUser"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserUpdateResponse = PartnerUserUpdateResponseBody;
export type PartnerUserDeleteRequestBody = import("../../types/api/v1.js").operations["deletePartnerUser"]["requestBody"]["content"]["application/json"];
export type PartnerUserDeleteRequest = PartnerUserDeleteRequestBody;
export type PartnerUserDeleteResponseBody = import("../../types/api/v1.js").operations["deletePartnerUser"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserDeleteResponse = PartnerUserDeleteResponseBody;
