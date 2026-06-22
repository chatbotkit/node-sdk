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
 * }} SpaceSiteListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceSites']['responses']['200']['content']['application/json']} SpaceSiteListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceSites']['responses']['200']['content']['application/jsonl']} SpaceSiteListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceSiteListRequest} [request]
 * @returns {ResponsePromise<SpaceSiteListResponse,SpaceSiteListStreamType>}
 */
export function listSpaceSites(client: ChatBotKitClient, spaceId: string, request?: SpaceSiteListRequest): ResponsePromise<SpaceSiteListResponse, SpaceSiteListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @returns {ResponsePromise<SpaceSiteFetchResponse,never>}
 */
export function fetchSpaceSite(client: ChatBotKitClient, spaceId: string, siteId: string): ResponsePromise<SpaceSiteFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createSpaceSite']['requestBody']['content']['application/json']} SpaceSiteCreateRequestBody
 *
 * @typedef {SpaceSiteCreateRequestBody} SpaceSiteCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteCreateResponseBody
 *
 * @typedef {SpaceSiteCreateResponseBody} SpaceSiteCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceSiteCreateRequest} request
 * @returns {Promise<SpaceSiteCreateResponse>}
 */
export function createSpaceSite(client: ChatBotKitClient, spaceId: string, request: SpaceSiteCreateRequest): Promise<SpaceSiteCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateSpaceSite']['requestBody']['content']['application/json']} SpaceSiteUpdateRequestBody
 *
 * @typedef {SpaceSiteUpdateRequestBody} SpaceSiteUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteUpdateResponseBody
 *
 * @typedef {SpaceSiteUpdateResponseBody} SpaceSiteUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @param {SpaceSiteUpdateRequest} request
 * @returns {Promise<SpaceSiteUpdateResponse>}
 */
export function updateSpaceSite(client: ChatBotKitClient, spaceId: string, siteId: string, request: SpaceSiteUpdateRequest): Promise<SpaceSiteUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceSite']['requestBody']['content']['application/json']} SpaceSiteDeleteRequestBody
 *
 * @typedef {SpaceSiteDeleteRequestBody} SpaceSiteDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceSite']['responses']['200']['content']['application/json']} SpaceSiteDeleteResponseBody
 *
 * @typedef {SpaceSiteDeleteResponseBody} SpaceSiteDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} siteId
 * @param {SpaceSiteDeleteRequest} [request]
 * @returns {Promise<SpaceSiteDeleteResponse>}
 */
export function deleteSpaceSite(client: ChatBotKitClient, spaceId: string, siteId: string, request?: SpaceSiteDeleteRequest): Promise<SpaceSiteDeleteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SpaceSiteListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SpaceSiteListResponse = import("../../types/api/v1.js").operations["listSpaceSites"]["responses"]["200"]["content"]["application/json"];
export type SpaceSiteListStreamType = import("../../types/api/v1.js").operations["listSpaceSites"]["responses"]["200"]["content"]["application/jsonl"];
export type SpaceSiteFetchResponse = import("../../types/api/v1.js").operations["fetchSpaceSite"]["responses"]["200"]["content"]["application/json"];
export type SpaceSiteCreateRequestBody = import("../../types/api/v1.js").operations["createSpaceSite"]["requestBody"]["content"]["application/json"];
export type SpaceSiteCreateRequest = SpaceSiteCreateRequestBody;
export type SpaceSiteCreateResponseBody = import("../../types/api/v1.js").operations["createSpaceSite"]["responses"]["200"]["content"]["application/json"];
export type SpaceSiteCreateResponse = SpaceSiteCreateResponseBody;
export type SpaceSiteUpdateRequestBody = import("../../types/api/v1.js").operations["updateSpaceSite"]["requestBody"]["content"]["application/json"];
export type SpaceSiteUpdateRequest = SpaceSiteUpdateRequestBody;
export type SpaceSiteUpdateResponseBody = import("../../types/api/v1.js").operations["updateSpaceSite"]["responses"]["200"]["content"]["application/json"];
export type SpaceSiteUpdateResponse = SpaceSiteUpdateResponseBody;
export type SpaceSiteDeleteRequestBody = import("../../types/api/v1.js").operations["deleteSpaceSite"]["requestBody"]["content"]["application/json"];
export type SpaceSiteDeleteRequest = SpaceSiteDeleteRequestBody;
export type SpaceSiteDeleteResponseBody = import("../../types/api/v1.js").operations["deleteSpaceSite"]["responses"]["200"]["content"]["application/json"];
export type SpaceSiteDeleteResponse = SpaceSiteDeleteResponseBody;
