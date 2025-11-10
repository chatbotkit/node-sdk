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
 * }} SpaceListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSpaces']['responses']['200']['content']['application/json']} SpaceListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSpaces']['responses']['200']['content']['application/jsonl']} SpaceListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {SpaceListRequest} [request]
 * @returns {ResponsePromise<SpaceListResponse,SpaceListStreamType>}
 */
export function listSpaces(client: ChatBotKitClient, contactId: string, request?: SpaceListRequest): ResponsePromise<SpaceListResponse, SpaceListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SpaceListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SpaceListResponse = import("../../types/api/v1.js").operations["listContactSpaces"]["responses"]["200"]["content"]["application/json"];
export type SpaceListStreamType = import("../../types/api/v1.js").operations["listContactSpaces"]["responses"]["200"]["content"]["application/jsonl"];
