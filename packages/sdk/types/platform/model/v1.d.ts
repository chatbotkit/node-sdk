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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} PlatformModelOptions
 *
 * @typedef {PlatformModelOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformModelInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} PlatformModelListRequest
 *
 * @typedef {{items: PlatformModelInstance[]}} PlatformModelListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformModelInstance
 * }} PlatformModelListStreamItemType
 *
 * @typedef {PlatformModelListStreamItemType} PlatformModelListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformModelListRequest} [request]
 * @returns {ResponsePromise<PlatformModelListResponse,PlatformModelListStreamType>}
 */
export function listPlatformModels(client: ChatBotKitClient, request?: PlatformModelListRequest | undefined): ResponsePromise<PlatformModelListResponse, PlatformModelListStreamType>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type PlatformModelOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type PlatformModelInstance = PlatformModelOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PlatformModelListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformModelListResponse = {
    items: PlatformModelInstance[];
};
export type PlatformModelListStreamItemType = {
    type: 'item';
    data: PlatformModelInstance;
};
export type PlatformModelListStreamType = PlatformModelListStreamItemType;
