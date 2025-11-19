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
 * }} PlatformDocListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformDocs']['responses']['200']['content']['application/json']} PlatformDocListResponse
 *
 * @typedef {PlatformDocListResponse['items'][number]} PlatformDocListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformDocs']['responses']['200']['content']['application/jsonl']} PlatformDocListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformDocListRequest} [request]
 * @returns {ResponsePromise<PlatformDocListResponse,PlatformDocListStreamType>}
 */
export function listPlatformDocs(client: ChatBotKitClient, request?: PlatformDocListRequest): ResponsePromise<PlatformDocListResponse, PlatformDocListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformDocs']['requestBody']['content']['application/json']} PlatformDocSearchRequestBody
 *
 * @typedef {PlatformDocSearchRequestBody} PlatformDocSearchRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['searchPlatformDocs']['responses']['200']['content']['application/json']} PlatformDocSearchResponseBody
 *
 * @typedef {PlatformDocSearchResponseBody} PlatformDocSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformDocSearchRequest} request
 * @returns {Promise<PlatformDocSearchResponse>}
 */
export function searchPlatformDocs(client: ChatBotKitClient, request: PlatformDocSearchRequest): Promise<PlatformDocSearchResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformDoc']['responses']['200']['content']['application/json']} PlatformDocFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} docId
 * @returns {ResponsePromise<PlatformDocFetchResponse,never>}
 */
export function fetchPlatformDoc(client: ChatBotKitClient, docId: string): ResponsePromise<PlatformDocFetchResponse, never>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PlatformDocListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformDocListResponse = import("../../../types/api/v1.js").operations["listPlatformDocs"]["responses"]["200"]["content"]["application/json"];
export type PlatformDocListItem = PlatformDocListResponse["items"][number];
export type PlatformDocListStreamType = import("../../../types/api/v1.js").operations["listPlatformDocs"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformDocSearchRequestBody = import("../../../types/api/v1.js").operations["searchPlatformDocs"]["requestBody"]["content"]["application/json"];
export type PlatformDocSearchRequest = PlatformDocSearchRequestBody;
export type PlatformDocSearchResponseBody = import("../../../types/api/v1.js").operations["searchPlatformDocs"]["responses"]["200"]["content"]["application/json"];
export type PlatformDocSearchResponse = PlatformDocSearchResponseBody;
export type PlatformDocFetchResponse = import("../../../types/api/v1.js").operations["fetchPlatformDoc"]["responses"]["200"]["content"]["application/json"];
