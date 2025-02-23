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
 *   kind?: 'shared'|'personal',
 *   type?: 'plain'|'basic'|'bearer'|'oauth'|'template',
 *   value?: string,
 *   meta?: Record<string,any>
 * }} SecretOptions
 *
 * @typedef {SecretOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SecretInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SecretListRequest
 *
 * @typedef {{items: SecretInstance[]}} SecretListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SecretInstance
 * }} SecretListStreamItemType
 *
 * @typedef {SecretListStreamItemType} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client: ChatBotKitClient, request?: SecretListRequest | undefined): ResponsePromise<SecretListResponse, SecretListStreamType>;
/**
 * @typedef {SecretInstance & {
 * }} SecretFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {ResponsePromise<SecretFetchResponse,never>}
 */
export function fetchSecret(client: ChatBotKitClient, secretId: string): ResponsePromise<SecretFetchResponse, never>;
/**
 * @typedef {SecretOptions & {
 * }} SecretCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export function createSecret(client: ChatBotKitClient, request: SecretCreateRequest): Promise<SecretCreateResponse>;
/**
 * @typedef {SecretOptions & {
 * }} SecretUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SecretUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretUpdateRequest} request
 * @returns {Promise<SecretUpdateResponse>}
 */
export function updateSecret(client: ChatBotKitClient, secretId: string, request: SecretUpdateRequest): Promise<SecretUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretDeleteResponse>}
 */
export function deleteSecret(client: ChatBotKitClient, secretId: string): Promise<SecretDeleteResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type SecretOptions = {
    name?: string;
    description?: string;
    kind?: 'shared' | 'personal';
    type?: 'plain' | 'basic' | 'bearer' | 'oauth' | 'template';
    value?: string;
    meta?: Record<string, any>;
};
export type SecretInstance = SecretOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type SecretListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type SecretListResponse = {
    items: SecretInstance[];
};
export type SecretListStreamItemType = {
    type: 'item';
    data: SecretInstance;
};
export type SecretListStreamType = SecretListStreamItemType;
export type SecretFetchResponse = SecretInstance & {};
export type SecretCreateRequest = SecretOptions & {};
export type SecretCreateResponse = {
    id: string;
};
export type SecretUpdateRequest = SecretOptions & {};
export type SecretUpdateResponse = {
    id: string;
};
export type SecretDeleteResponse = {
    id: string;
};
