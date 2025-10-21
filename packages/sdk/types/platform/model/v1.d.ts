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
 * }} PlatformModelListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/json']} PlatformModelListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformModels']['responses']['200']['content']['application/jsonl']} PlatformModelListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformModelListRequest} [request]
 * @returns {ResponsePromise<PlatformModelListResponse,PlatformModelListStreamType>}
 */
export function listPlatformModels(client: ChatBotKitClient, request?: PlatformModelListRequest): ResponsePromise<PlatformModelListResponse, PlatformModelListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformModelListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformModelListResponse = import("../../types/api/v1.js").operations["listPlatformModels"]["responses"]["200"]["content"]["application/json"];
export type PlatformModelListStreamType = import("../../types/api/v1.js").operations["listPlatformModels"]["responses"]["200"]["content"]["application/jsonl"];
