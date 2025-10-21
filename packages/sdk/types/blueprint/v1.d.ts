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
 * }} BlueprintListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/json']} BlueprintListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprints']['responses']['200']['content']['application/jsonl']} BlueprintListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintListRequest} [request]
 * @returns {ResponsePromise<BlueprintListResponse,BlueprintListStreamType>}
 */
export function listBlueprints(client: ChatBotKitClient, request?: BlueprintListRequest): ResponsePromise<BlueprintListResponse, BlueprintListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchBlueprint']['responses']['200']['content']['application/json']} BlueprintFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {ResponsePromise<BlueprintFetchResponse,never>}
 */
export function fetchBlueprint(client: ChatBotKitClient, blueprintId: string): ResponsePromise<BlueprintFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} BlueprintCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['requestBody']['content']['application/json']} BlueprintCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['responses']['200']['content']['application/json']} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export function createBlueprint(client: ChatBotKitClient, request: BlueprintCreateRequest): Promise<BlueprintCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} BlueprintUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['requestBody']['content']['application/json']} BlueprintUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['responses']['200']['content']['application/json']} BlueprintUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintUpdateRequest} request
 * @returns {Promise<BlueprintUpdateResponse>}
 */
export function updateBlueprint(client: ChatBotKitClient, blueprintId: string, request: BlueprintUpdateRequest): Promise<BlueprintUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['requestBody']['content']['application/json']} BlueprintDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['responses']['200']['content']['application/json']} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export function deleteBlueprint(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['requestBody']['content']['application/json']} BlueprintCloneRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['responses']['200']['content']['application/json']} BlueprintCloneResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintCloneResponse>}
 */
export function cloneBlueprint(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintCloneResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['listBlueprintResources']['responses']['200']['content']['application/json']} BlueprintListResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @returns {Promise<BlueprintListResourcesResponse>}
 */
export function listBlueprintResources(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintListResourcesResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type BlueprintListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type BlueprintListResponse = import("../types/api/v1.js").operations["listBlueprints"]["responses"]["200"]["content"]["application/json"];
export type BlueprintListStreamType = import("../types/api/v1.js").operations["listBlueprints"]["responses"]["200"]["content"]["application/jsonl"];
export type BlueprintFetchResponse = import("../types/api/v1.js").operations["fetchBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintCreateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type BlueprintCreateRequestBody = import("../types/api/v1.js").operations["createBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintCreateResponse = import("../types/api/v1.js").operations["createBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintUpdateRequest = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type BlueprintUpdateRequestBody = import("../types/api/v1.js").operations["updateBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintUpdateResponse = import("../types/api/v1.js").operations["updateBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintDeleteRequestBody = import("../types/api/v1.js").operations["deleteBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintDeleteResponse = import("../types/api/v1.js").operations["deleteBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintCloneRequestBody = import("../types/api/v1.js").operations["cloneBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintCloneResponse = import("../types/api/v1.js").operations["cloneBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintListResourcesResponse = import("../types/api/v1.js").operations["listBlueprintResources"]["responses"]["200"]["content"]["application/json"];
