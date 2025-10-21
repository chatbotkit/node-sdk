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
 * }} TeamListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/json']} TeamListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/jsonl']} TeamListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamListRequest} [request]
 * @returns {ResponsePromise<TeamListResponse,TeamListStreamType>}
 */
export function listTeams(client: ChatBotKitClient, request?: TeamListRequest): ResponsePromise<TeamListResponse, TeamListStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type TeamListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TeamListResponse = import("../types/api/v1.js").operations["listTeams"]["responses"]["200"]["content"]["application/json"];
export type TeamListStreamType = import("../types/api/v1.js").operations["listTeams"]["responses"]["200"]["content"]["application/jsonl"];
