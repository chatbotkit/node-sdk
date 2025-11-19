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
 * }} PlatformManualListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformManuals']['responses']['200']['content']['application/json']} PlatformManualListResponse
 *
 * @typedef {PlatformManualListResponse['items'][number]} PlatformManualListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformManuals']['responses']['200']['content']['application/jsonl']} PlatformManualListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformManualListRequest} [request]
 * @returns {ResponsePromise<PlatformManualListResponse,PlatformManualListStreamType>}
 */
export function listPlatformManuals(client: ChatBotKitClient, request?: PlatformManualListRequest): ResponsePromise<PlatformManualListResponse, PlatformManualListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformManuals']['requestBody']['content']['application/json']} PlatformManualSearchRequestBody
 *
 * @typedef {PlatformManualSearchRequestBody} PlatformManualSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformManuals']['responses']['200']['content']['application/json']} PlatformManualSearchResponseBody
 *
 * @typedef {PlatformManualSearchResponseBody} PlatformManualSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformManualSearchRequest} request
 * @returns {Promise<PlatformManualSearchResponse>}
 */
export function searchPlatformManuals(client: ChatBotKitClient, request: PlatformManualSearchRequest): Promise<PlatformManualSearchResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformManual']['responses']['200']['content']['application/json']} PlatformManualFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} manualId
 * @returns {ResponsePromise<PlatformManualFetchResponse,never>}
 */
export function fetchPlatformManual(client: ChatBotKitClient, manualId: string): ResponsePromise<PlatformManualFetchResponse, never>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PlatformManualListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformManualListResponse = import("../../../types/api/v1.js").operations["listPlatformManuals"]["responses"]["200"]["content"]["application/json"];
export type PlatformManualListItem = PlatformManualListResponse["items"][number];
export type PlatformManualListStreamType = import("../../../types/api/v1.js").operations["listPlatformManuals"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformManualSearchRequestBody = import("../../../types/api/v1.js").operations["searchPlatformManuals"]["requestBody"]["content"]["application/json"];
export type PlatformManualSearchRequest = PlatformManualSearchRequestBody;
export type PlatformManualSearchResponseBody = import("../../../types/api/v1.js").operations["searchPlatformManuals"]["responses"]["200"]["content"]["application/json"];
export type PlatformManualSearchResponse = PlatformManualSearchResponseBody;
export type PlatformManualFetchResponse = import("../../../types/api/v1.js").operations["fetchPlatformManual"]["responses"]["200"]["content"]["application/json"];
