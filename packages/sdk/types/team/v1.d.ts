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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} TeamOptions
 *
 * @typedef {TeamOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TeamInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TeamListRequest
 *
 * @typedef {{items: TeamInstance[]}} TeamListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TeamInstance
 * }} TeamListStreamItemType
 *
 * @typedef {TeamListStreamItemType} TeamListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamListRequest} [request]
 * @returns {ResponsePromise<TeamListResponse,TeamListStreamType>}
 */
export function listTeams(client: ChatBotKitClient, request?: TeamListRequest): ResponsePromise<TeamListResponse, TeamListStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type TeamOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type TeamInstance = TeamOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type TeamListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type TeamListResponse = {
    items: TeamInstance[];
};
export type TeamListStreamItemType = {
    type: "item";
    data: TeamInstance;
};
export type TeamListStreamType = TeamListStreamItemType;
