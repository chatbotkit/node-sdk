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
 * }} PlatformAbilityListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/json']} PlatformAbilityListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/jsonl']} PlatformAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformAbilityListRequest} [request]
 * @returns {ResponsePromise<PlatformAbilityListResponse,PlatformAbilityListStreamType>}
 */
export function listPlatformAbilities(client: ChatBotKitClient, request?: PlatformAbilityListRequest): ResponsePromise<PlatformAbilityListResponse, PlatformAbilityListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformAbilityListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformAbilityListResponse = import("../../types/api/v1.js").operations["listPlatformAbilities"]["responses"]["200"]["content"]["application/json"];
export type PlatformAbilityListStreamType = import("../../types/api/v1.js").operations["listPlatformAbilities"]["responses"]["200"]["content"]["application/jsonl"];
