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
 * }} PortalListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listPortals']['responses']['200']['content']['application/json']} PortalListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listPortals']['responses']['200']['content']['application/jsonl']} PortalListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PortalListRequest} [request]
 * @returns {ResponsePromise<PortalListResponse,PortalListStreamType>}
 */
export function listPortals(client: ChatBotKitClient, request?: PortalListRequest): ResponsePromise<PortalListResponse, PortalListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchPortal']['responses']['200']['content']['application/json']} PortalFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @returns {ResponsePromise<PortalFetchResponse,never>}
 */
export function fetchPortal(client: ChatBotKitClient, portalId: string): ResponsePromise<PortalFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createPortal']['requestBody']['content']['application/json']} PortalCreateRequestBody
 *
 * @typedef {PortalCreateRequestBody} PortalCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createPortal']['responses']['200']['content']['application/json']} PortalCreateResponseBody
 *
 * @typedef {PortalCreateResponseBody} PortalCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PortalCreateRequest} request
 * @returns {Promise<PortalCreateResponse>}
 */
export function createPortal(client: ChatBotKitClient, request: PortalCreateRequest): Promise<PortalCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updatePortal']['requestBody']['content']['application/json']} PortalUpdateRequestBody
 *
 * @typedef {PortalUpdateRequestBody} PortalUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updatePortal']['responses']['200']['content']['application/json']} PortalUpdateResponseBody
 *
 * @typedef {PortalUpdateResponseBody} PortalUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @param {PortalUpdateRequest} request
 * @returns {Promise<PortalUpdateResponse>}
 */
export function updatePortal(client: ChatBotKitClient, portalId: string, request: PortalUpdateRequest): Promise<PortalUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deletePortal']['requestBody']['content']['application/json']} PortalDeleteRequestBody
 *
 * @typedef {PortalDeleteRequestBody} PortalDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deletePortal']['responses']['200']['content']['application/json']} PortalDeleteResponseBody
 *
 * @typedef {PortalDeleteResponseBody} PortalDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} portalId
 * @returns {Promise<PortalDeleteResponse>}
 */
export function deletePortal(client: ChatBotKitClient, portalId: string): Promise<PortalDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type PortalListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PortalListResponse = import("../types/api/v1.js").operations["listPortals"]["responses"]["200"]["content"]["application/json"];
export type PortalListStreamType = import("../types/api/v1.js").operations["listPortals"]["responses"]["200"]["content"]["application/jsonl"];
export type PortalFetchResponse = import("../types/api/v1.js").operations["fetchPortal"]["responses"]["200"]["content"]["application/json"];
export type PortalCreateRequestBody = import("../types/api/v1.js").operations["createPortal"]["requestBody"]["content"]["application/json"];
export type PortalCreateRequest = PortalCreateRequestBody;
export type PortalCreateResponseBody = import("../types/api/v1.js").operations["createPortal"]["responses"]["200"]["content"]["application/json"];
export type PortalCreateResponse = PortalCreateResponseBody;
export type PortalUpdateRequestBody = import("../types/api/v1.js").operations["updatePortal"]["requestBody"]["content"]["application/json"];
export type PortalUpdateRequest = PortalUpdateRequestBody;
export type PortalUpdateResponseBody = import("../types/api/v1.js").operations["updatePortal"]["responses"]["200"]["content"]["application/json"];
export type PortalUpdateResponse = PortalUpdateResponseBody;
export type PortalDeleteRequestBody = import("../types/api/v1.js").operations["deletePortal"]["requestBody"]["content"]["application/json"];
export type PortalDeleteRequest = PortalDeleteRequestBody;
export type PortalDeleteResponseBody = import("../types/api/v1.js").operations["deletePortal"]["responses"]["200"]["content"]["application/json"];
export type PortalDeleteResponse = PortalDeleteResponseBody;
