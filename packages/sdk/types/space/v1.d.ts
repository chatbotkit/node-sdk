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
 * }} SpaceListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSpaces']['responses']['200']['content']['application/json']} SpaceListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSpaces']['responses']['200']['content']['application/jsonl']} SpaceListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SpaceListRequest} [request]
 * @returns {ResponsePromise<SpaceListResponse,SpaceListStreamType>}
 */
export function listSpaces(client: ChatBotKitClient, request?: SpaceListRequest): ResponsePromise<SpaceListResponse, SpaceListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchSpace']['responses']['200']['content']['application/json']} SpaceFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @returns {ResponsePromise<SpaceFetchResponse,never>}
 */
export function fetchSpace(client: ChatBotKitClient, spaceId: string): ResponsePromise<SpaceFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createSpace']['requestBody']['content']['application/json']} SpaceCreateRequestBody
 *
 * @typedef {SpaceCreateRequestBody} SpaceCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSpace']['responses']['200']['content']['application/json']} SpaceCreateResponseBody
 *
 * @typedef {SpaceCreateResponseBody} SpaceCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SpaceCreateRequest} request
 * @returns {Promise<SpaceCreateResponse>}
 */
export function createSpace(client: ChatBotKitClient, request: SpaceCreateRequest): Promise<SpaceCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateSpace']['requestBody']['content']['application/json']} SpaceUpdateRequestBody
 *
 * @typedef {SpaceUpdateRequestBody} SpaceUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSpace']['responses']['200']['content']['application/json']} SpaceUpdateResponseBody
 *
 * @typedef {SpaceUpdateResponseBody} SpaceUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {SpaceUpdateRequest} request
 * @returns {Promise<SpaceUpdateResponse>}
 */
export function updateSpace(client: ChatBotKitClient, spaceId: string, request: SpaceUpdateRequest): Promise<SpaceUpdateResponse>;
/**
 * @typedef {{}} SpaceDeleteRequest
 *
 * @typedef {{ id: string }} SpaceDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @returns {Promise<SpaceDeleteResponse>}
 */
export function deleteSpace(client: ChatBotKitClient, spaceId: string): Promise<SpaceDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type SpaceListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SpaceListResponse = import("../types/api/v1.js").operations["listSpaces"]["responses"]["200"]["content"]["application/json"];
export type SpaceListStreamType = import("../types/api/v1.js").operations["listSpaces"]["responses"]["200"]["content"]["application/jsonl"];
export type SpaceFetchResponse = import("../types/api/v1.js").operations["fetchSpace"]["responses"]["200"]["content"]["application/json"];
export type SpaceCreateRequestBody = import("../types/api/v1.js").operations["createSpace"]["requestBody"]["content"]["application/json"];
export type SpaceCreateRequest = SpaceCreateRequestBody;
export type SpaceCreateResponseBody = import("../types/api/v1.js").operations["createSpace"]["responses"]["200"]["content"]["application/json"];
export type SpaceCreateResponse = SpaceCreateResponseBody;
export type SpaceUpdateRequestBody = import("../types/api/v1.js").operations["updateSpace"]["requestBody"]["content"]["application/json"];
export type SpaceUpdateRequest = SpaceUpdateRequestBody;
export type SpaceUpdateResponseBody = import("../types/api/v1.js").operations["updateSpace"]["responses"]["200"]["content"]["application/json"];
export type SpaceUpdateResponse = SpaceUpdateResponseBody;
export type SpaceDeleteRequest = {};
export type SpaceDeleteResponse = {
    id: string;
};
