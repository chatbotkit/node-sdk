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
 * }} PlatformContentDocListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/json']} PlatformContentDocListResponse
 *
 * @typedef {PlatformContentDocListResponse['items'][number]} PlatformContentDocListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentDocs']['responses']['200']['content']['application/jsonl']} PlatformContentDocListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentDocListRequest} [request]
 * @returns {ResponsePromise<PlatformContentDocListResponse,PlatformContentDocListStreamType>}
 */
export function listPlatformContentDocs(client: ChatBotKitClient, request?: PlatformContentDocListRequest): ResponsePromise<PlatformContentDocListResponse, PlatformContentDocListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentDoc']['responses']['200']['content']['application/json']} PlatformContentDocFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} docId
 * @returns {ResponsePromise<PlatformContentDocFetchResponse,never>}
 */
export function fetchPlatformContentDoc(client: ChatBotKitClient, docId: string): ResponsePromise<PlatformContentDocFetchResponse, never>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PlatformContentDocListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformContentDocListResponse = import("../../../types/api/v1.js").operations["listPlatformContentDocs"]["responses"]["200"]["content"]["application/json"];
export type PlatformContentDocListItem = PlatformContentDocListResponse["items"][number];
export type PlatformContentDocListStreamType = import("../../../types/api/v1.js").operations["listPlatformContentDocs"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformContentDocFetchResponse = import("../../../types/api/v1.js").operations["fetchPlatformContentDoc"]["responses"]["200"]["content"]["application/json"];
