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
 * }} PlatformSecretOptions
 *
 * @typedef {PlatformSecretOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformSecretInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} PlatformSecretListRequest
 *
 * @typedef {{items: PlatformSecretInstance[]}} PlatformSecretListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformSecretInstance
 * }} PlatformSecretListStreamItemType
 *
 * @typedef {PlatformSecretListStreamItemType} PlatformSecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretListRequest} [request]
 * @returns {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>}
 */
export function listPlatformSecrets(client: ChatBotKitClient, request?: PlatformSecretListRequest | undefined): ResponsePromise<PlatformSecretListResponse, PlatformSecretListStreamType>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type PlatformSecretOptions = {
    name?: string;
    description?: string;
    meta?: Record<string, any>;
};
export type PlatformSecretInstance = PlatformSecretOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type PlatformSecretListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type PlatformSecretListResponse = {
    items: PlatformSecretInstance[];
};
export type PlatformSecretListStreamItemType = {
    type: 'item';
    data: PlatformSecretInstance;
};
export type PlatformSecretListStreamType = PlatformSecretListStreamItemType;
