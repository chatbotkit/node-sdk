/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PartnerUserTokenListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/json']} PartnerUserTokenListResponse
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserTokens']['responses']['200']['content']['application/jsonl']} PartnerUserTokenListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenListRequest} [request]
 * @returns {ResponsePromise<PartnerUserTokenListResponse,PartnerUserTokenListStreamType>}
 */
export function listPartnerUserTokens(client: ChatBotKitClient, userId: string, request?: PartnerUserTokenListRequest): ResponsePromise<PartnerUserTokenListResponse, PartnerUserTokenListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserToken']['requestBody']['content']['application/json']} PartnerUserTokenCreateRequestBody
 *
 * @typedef {PartnerUserTokenCreateRequestBody} PartnerUserTokenCreateRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserToken']['responses']['200']['content']['application/json']} PartnerUserTokenCreateResponseBody
 *
 * @typedef {PartnerUserTokenCreateResponseBody} PartnerUserTokenCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserTokenCreateRequest} request
 * @returns {Promise<PartnerUserTokenCreateResponse>}
 */
export function createPartnerUserToken(client: ChatBotKitClient, userId: string, request: PartnerUserTokenCreateRequest): Promise<PartnerUserTokenCreateResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['requestBody']['content']['application/json']} PartnerUserTokenDeleteRequestBody
 *
 * @typedef {PartnerUserTokenDeleteRequestBody} PartnerUserTokenDeleteRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserToken']['responses']['200']['content']['application/json']} PartnerUserTokenDeleteResponseBody
 *
 * @typedef {PartnerUserTokenDeleteResponseBody} PartnerUserTokenDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} tokenId
 * @returns {Promise<PartnerUserTokenDeleteResponse>}
 */
export function deletePartnerUserToken(client: ChatBotKitClient, userId: string, tokenId: string): Promise<PartnerUserTokenDeleteResponse>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PartnerUserTokenListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PartnerUserTokenListResponse = import("../../../types/api/v1.js").operations["listPartnerUserTokens"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserTokenListStreamType = import("../../../types/api/v1.js").operations["listPartnerUserTokens"]["responses"]["200"]["content"]["application/jsonl"];
export type PartnerUserTokenCreateRequestBody = import("../../../types/api/v1.js").operations["createPartnerUserToken"]["requestBody"]["content"]["application/json"];
export type PartnerUserTokenCreateRequest = PartnerUserTokenCreateRequestBody;
export type PartnerUserTokenCreateResponseBody = import("../../../types/api/v1.js").operations["createPartnerUserToken"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserTokenCreateResponse = PartnerUserTokenCreateResponseBody;
export type PartnerUserTokenDeleteRequestBody = import("../../../types/api/v1.js").operations["deletePartnerUserToken"]["requestBody"]["content"]["application/json"];
export type PartnerUserTokenDeleteRequest = PartnerUserTokenDeleteRequestBody;
export type PartnerUserTokenDeleteResponseBody = import("../../../types/api/v1.js").operations["deletePartnerUserToken"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserTokenDeleteResponse = PartnerUserTokenDeleteResponseBody;
