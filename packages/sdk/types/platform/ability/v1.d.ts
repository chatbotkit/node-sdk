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
 * }} PlatformAbilityOptions
 *
 * @typedef {PlatformAbilityOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformAbilityInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformAbilityListRequest
 *
 * @typedef {{items: PlatformAbilityInstance[]}} PlatformAbilityListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformAbilityInstance
 * }} PlatformAbilityListStreamItemType
 *
 * @typedef {PlatformAbilityListStreamItemType} PlatformAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformAbilityListRequest} [request]
 * @returns {ResponsePromise<PlatformAbilityListResponse,PlatformAbilityListStreamType>}
 */
export function listPlatformAbilities(client: ChatBotKitClient, request?: PlatformAbilityListRequest | undefined): ResponsePromise<PlatformAbilityListResponse, PlatformAbilityListStreamType>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type PlatformAbilityOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type PlatformAbilityInstance = PlatformAbilityOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PlatformAbilityListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformAbilityListResponse = {
    items: PlatformAbilityInstance[];
};
export type PlatformAbilityListStreamItemType = {
    type: 'item';
    data: PlatformAbilityInstance;
};
export type PlatformAbilityListStreamType = PlatformAbilityListStreamItemType;
