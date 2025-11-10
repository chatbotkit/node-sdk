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
 * }} PlatformContentManualListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentManuals']['responses']['200']['content']['application/json']} PlatformContentManualListResponse
 *
 * @typedef {PlatformContentManualListResponse['items'][number]} PlatformContentManualListItem
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPlatformContentManuals']['responses']['200']['content']['application/jsonl']} PlatformContentManualListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformContentManualListRequest} [request]
 * @returns {ResponsePromise<PlatformContentManualListResponse,PlatformContentManualListStreamType>}
 */
export function listPlatformContentManuals(client: ChatBotKitClient, request?: PlatformContentManualListRequest): ResponsePromise<PlatformContentManualListResponse, PlatformContentManualListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPlatformContentManual']['responses']['200']['content']['application/json']} PlatformContentManualFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} manualId
 * @returns {ResponsePromise<PlatformContentManualFetchResponse,never>}
 */
export function fetchPlatformContentManual(client: ChatBotKitClient, manualId: string): ResponsePromise<PlatformContentManualFetchResponse, never>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PlatformContentManualListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformContentManualListResponse = import("../../../types/api/v1.js").operations["listPlatformContentManuals"]["responses"]["200"]["content"]["application/json"];
export type PlatformContentManualListItem = PlatformContentManualListResponse["items"][number];
export type PlatformContentManualListStreamType = import("../../../types/api/v1.js").operations["listPlatformContentManuals"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformContentManualFetchResponse = import("../../../types/api/v1.js").operations["fetchPlatformContentManual"]["responses"]["200"]["content"]["application/json"];
