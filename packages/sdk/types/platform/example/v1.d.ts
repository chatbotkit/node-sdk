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
 *   id: string,
 *   name?: string,
 *   description?: string,
 *   category?: string,
 *   tags?: string[],
 *   config?: Record<string,any>,
 *   meta?: Record<string,any>
 * }} PlatformExampleOptions
 *
 * @typedef {PlatformExampleOptions & {
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformExampleInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformExampleListRequest
 *
 * @typedef {{items: PlatformExampleInstance[]}} PlatformExampleListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformExampleInstance
 * }} PlatformExampleListStreamItemType
 *
 * @typedef {PlatformExampleListStreamItemType} PlatformExampleListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformExampleListRequest} [request]
 * @returns {ResponsePromise<PlatformExampleListResponse,PlatformExampleListStreamType>}
 */
export function listPlatformExamples(client: ChatBotKitClient, request?: PlatformExampleListRequest): ResponsePromise<PlatformExampleListResponse, PlatformExampleListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformExampleOptions = {
    id: string;
    name?: string;
    description?: string;
    category?: string;
    tags?: string[];
    config?: Record<string, any>;
    meta?: Record<string, any>;
};
export type PlatformExampleInstance = PlatformExampleOptions & {
    createdAt: number;
    updatedAt: number;
};
export type PlatformExampleListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformExampleListResponse = {
    items: PlatformExampleInstance[];
};
export type PlatformExampleListStreamItemType = {
    type: "item";
    data: PlatformExampleInstance;
};
export type PlatformExampleListStreamType = PlatformExampleListStreamItemType;
