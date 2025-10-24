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
 * }} PlatformActionListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformActions']['responses']['200']['content']['application/json']} PlatformActionListResponse
 *
 * @typedef {PlatformActionListResponse['items'][number]} PlatformActionListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformActions']['responses']['200']['content']['application/jsonl']} PlatformActionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformActionListRequest} [request]
 * @returns {ResponsePromise<PlatformActionListResponse,PlatformActionListStreamType>}
 */
export function listPlatformActions(client: ChatBotKitClient, request?: PlatformActionListRequest): ResponsePromise<PlatformActionListResponse, PlatformActionListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformActionListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformActionListResponse = import("../../types/api/v1.js").operations["listPlatformActions"]["responses"]["200"]["content"]["application/json"];
export type PlatformActionListItem = PlatformActionListResponse["items"][number];
export type PlatformActionListStreamType = import("../../types/api/v1.js").operations["listPlatformActions"]["responses"]["200"]["content"]["application/jsonl"];
