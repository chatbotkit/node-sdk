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
 *   type?: string,
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
 * @param {string} contactId
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client: ChatBotKitClient, contactId: string, request?: SecretListRequest | undefined): ResponsePromise<SecretListResponse, SecretListStreamType>;
/**
 * @typedef {{
 *   id: string
 * }} SecretRevokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretRevokeResponse>}
 */
export function revokeSecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretRevokeResponse>;
/**
 * @typedef {{
 *   id: string,
 *   status: 'unauthenticated'|'authenticated',
 *   action?: {type: 'authenticate', url: string}
 * }} SecretVerifyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretVerifyResponse>}
 */
export function verifySecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretVerifyResponse>;
/**
 * @typedef {{
 *   id: string
 *   url: string
 * }} SecretAuthenticateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretAuthenticateResponse>}
 */
export function authenticateSecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretAuthenticateResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type SecretOptions = {
    name?: string;
    description?: string;
    type?: string;
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
export type SecretRevokeResponse = {
    id: string;
};
export type SecretVerifyResponse = {
    id: string;
    status: 'unauthenticated' | 'authenticated';
    action?: {
        type: 'authenticate';
        url: string;
    };
};
export type SecretAuthenticateResponse = {
    id: string;
    url: string;
};
