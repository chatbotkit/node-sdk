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
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['requestBody']['content']['application/json']} BlueprintCreateRequestBody
 *
 * @typedef {BlueprintCreateRequestBody} BlueprintCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprint']['responses']['200']['content']['application/json']} BlueprintCreateResponseBody
 *
 * @typedef {BlueprintCreateResponseBody} BlueprintCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BlueprintCreateRequest} request
 * @returns {Promise<BlueprintCreateResponse>}
 */
export function createBlueprint(client: ChatBotKitClient, request: BlueprintCreateRequest): Promise<BlueprintCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['requestBody']['content']['application/json']} BlueprintUpdateRequestBody
 *
 * @typedef {BlueprintUpdateRequestBody} BlueprintUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBlueprint']['responses']['200']['content']['application/json']} BlueprintUpdateResponseBody
 *
 * @typedef {BlueprintUpdateResponseBody} BlueprintUpdateResponse
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
 * @typedef {BlueprintDeleteRequestBody} BlueprintDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteBlueprint']['responses']['200']['content']['application/json']} BlueprintDeleteResponseBody
 *
 * @typedef {BlueprintDeleteResponseBody} BlueprintDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintDeleteRequest} [request]
 * @returns {Promise<BlueprintDeleteResponse>}
 */
export function deleteBlueprint(client: ChatBotKitClient, blueprintId: string, request?: BlueprintDeleteRequest): Promise<BlueprintDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['requestBody']['content']['application/json']} BlueprintCloneRequestBody
 *
 * @typedef {BlueprintCloneRequestBody} BlueprintCloneRequest
 *
 * @typedef {import('../types/api/v1.js').operations['cloneBlueprint']['responses']['200']['content']['application/json']} BlueprintCloneResponseBody
 *
 * @typedef {BlueprintCloneResponseBody} BlueprintCloneResponse
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
/**
 * @typedef {{
 *   ensure?: boolean,
 *   resources: Record<string, Array<Record<string, any>>>
 * }} BlueprintImportResourcesRequest
 *
 * @typedef {{
 *   id: string,
 *   resources: Record<string, Array<{ id: string, name?: string, description?: string }>>
 * }} BlueprintImportResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId can be a blueprint id or `@alias` (with `ensure` to create on miss)
 * @param {BlueprintImportResourcesRequest} request
 * @returns {Promise<BlueprintImportResourcesResponse>}
 */
export function importBlueprintResources(client: ChatBotKitClient, blueprintId: string, request: BlueprintImportResourcesRequest): Promise<BlueprintImportResourcesResponse>;
/**
 * @typedef {{
 *   id?: string,
 *   name?: string,
 *   config?: Record<string, any>,
 *   meta?: Record<string, any>,
 *   resources: Record<string, { type: string, data: Record<string, any> }>
 * }} BlueprintExportResourcesResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId can be a blueprint id or `@alias`
 * @returns {Promise<BlueprintExportResourcesResponse>}
 */
export function exportBlueprintResources(client: ChatBotKitClient, blueprintId: string): Promise<BlueprintExportResourcesResponse>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number
 * }} BlueprintBulletinListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprintBulletins']['responses']['200']['content']['application/json']} BlueprintListBulletinsResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBlueprintBulletins']['responses']['200']['content']['application/jsonl']} BlueprintListBulletinsStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintBulletinListRequest} [request]
 * @returns {ResponsePromise<BlueprintListBulletinsResponse,BlueprintListBulletinsStreamType>}
 */
export function listBlueprintBulletins(client: ChatBotKitClient, blueprintId: string, request?: BlueprintBulletinListRequest): ResponsePromise<BlueprintListBulletinsResponse, BlueprintListBulletinsStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['createBlueprintBulletin']['requestBody']['content']['application/json']} BlueprintCreateBulletinRequestBody
 *
 * @typedef {BlueprintCreateBulletinRequestBody} BlueprintCreateBulletinRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBlueprintBulletin']['responses']['200']['content']['application/json']} BlueprintCreateBulletinResponseBody
 *
 * @typedef {BlueprintCreateBulletinResponseBody} BlueprintCreateBulletinResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} blueprintId
 * @param {BlueprintCreateBulletinRequest} request
 * @returns {Promise<BlueprintCreateBulletinResponse>}
 */
export function createBlueprintBulletin(client: ChatBotKitClient, blueprintId: string, request: BlueprintCreateBulletinRequest): Promise<BlueprintCreateBulletinResponse>;
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
export type BlueprintCreateRequestBody = import("../types/api/v1.js").operations["createBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintCreateRequest = BlueprintCreateRequestBody;
export type BlueprintCreateResponseBody = import("../types/api/v1.js").operations["createBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintCreateResponse = BlueprintCreateResponseBody;
export type BlueprintUpdateRequestBody = import("../types/api/v1.js").operations["updateBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintUpdateRequest = BlueprintUpdateRequestBody;
export type BlueprintUpdateResponseBody = import("../types/api/v1.js").operations["updateBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintUpdateResponse = BlueprintUpdateResponseBody;
export type BlueprintDeleteRequestBody = import("../types/api/v1.js").operations["deleteBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintDeleteRequest = BlueprintDeleteRequestBody;
export type BlueprintDeleteResponseBody = import("../types/api/v1.js").operations["deleteBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintDeleteResponse = BlueprintDeleteResponseBody;
export type BlueprintCloneRequestBody = import("../types/api/v1.js").operations["cloneBlueprint"]["requestBody"]["content"]["application/json"];
export type BlueprintCloneRequest = BlueprintCloneRequestBody;
export type BlueprintCloneResponseBody = import("../types/api/v1.js").operations["cloneBlueprint"]["responses"]["200"]["content"]["application/json"];
export type BlueprintCloneResponse = BlueprintCloneResponseBody;
export type BlueprintListResourcesResponse = import("../types/api/v1.js").operations["listBlueprintResources"]["responses"]["200"]["content"]["application/json"];
export type BlueprintImportResourcesRequest = {
    ensure?: boolean;
    resources: Record<string, Array<Record<string, any>>>;
};
export type BlueprintImportResourcesResponse = {
    id: string;
    resources: Record<string, Array<{
        id: string;
        name?: string;
        description?: string;
    }>>;
};
export type BlueprintExportResourcesResponse = {
    id?: string;
    name?: string;
    config?: Record<string, any>;
    meta?: Record<string, any>;
    resources: Record<string, {
        type: string;
        data: Record<string, any>;
    }>;
};
export type BlueprintBulletinListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type BlueprintListBulletinsResponse = import("../types/api/v1.js").operations["listBlueprintBulletins"]["responses"]["200"]["content"]["application/json"];
export type BlueprintListBulletinsStreamType = import("../types/api/v1.js").operations["listBlueprintBulletins"]["responses"]["200"]["content"]["application/jsonl"];
export type BlueprintCreateBulletinRequestBody = import("../types/api/v1.js").operations["createBlueprintBulletin"]["requestBody"]["content"]["application/json"];
export type BlueprintCreateBulletinRequest = BlueprintCreateBulletinRequestBody;
export type BlueprintCreateBulletinResponseBody = import("../types/api/v1.js").operations["createBlueprintBulletin"]["responses"]["200"]["content"]["application/json"];
export type BlueprintCreateBulletinResponse = BlueprintCreateBulletinResponseBody;
