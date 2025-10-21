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
 * }} SecretListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/json']} SecretListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/jsonl']} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client: ChatBotKitClient, request?: SecretListRequest): ResponsePromise<SecretListResponse, SecretListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchSecret']['responses']['200']['content']['application/json']} SecretFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {ResponsePromise<SecretFetchResponse,never>}
 */
export function fetchSecret(client: ChatBotKitClient, secretId: string): ResponsePromise<SecretFetchResponse, never>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   kind?: 'shared'|'personal',
 *   type?: 'plain'|'basic'|'bearer'|'oauth'|'template'|'reference',
 *   value?: string,
 *   config?: Record<string,any>,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SecretCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['requestBody']['content']['application/json']} SecretCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['responses']['200']['content']['application/json']} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export function createSecret(client: ChatBotKitClient, request: SecretCreateRequest): Promise<SecretCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   kind?: 'shared'|'personal',
 *   type?: 'plain'|'basic'|'bearer'|'oauth'|'template'|'reference',
 *   value?: string,
 *   config?: Record<string,any>,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SecretUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['requestBody']['content']['application/json']} SecretUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['responses']['200']['content']['application/json']} SecretUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretUpdateRequest} request
 * @returns {Promise<SecretUpdateResponse>}
 */
export function updateSecret(client: ChatBotKitClient, secretId: string, request: SecretUpdateRequest): Promise<SecretUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['requestBody']['content']['application/json']} SecretDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['responses']['200']['content']['application/json']} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretDeleteResponse>}
 */
export function deleteSecret(client: ChatBotKitClient, secretId: string): Promise<SecretDeleteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type SecretListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SecretListResponse = import("../types/api/v1.js").operations["listSecrets"]["responses"]["200"]["content"]["application/json"];
export type SecretListStreamType = import("../types/api/v1.js").operations["listSecrets"]["responses"]["200"]["content"]["application/jsonl"];
export type SecretFetchResponse = import("../types/api/v1.js").operations["fetchSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretCreateRequest = {
    name?: string;
    description?: string;
    kind?: "shared" | "personal";
    type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference";
    value?: string;
    config?: Record<string, any>;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type SecretCreateRequestBody = import("../types/api/v1.js").operations["createSecret"]["requestBody"]["content"]["application/json"];
export type SecretCreateResponse = import("../types/api/v1.js").operations["createSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretUpdateRequest = {
    name?: string;
    description?: string;
    kind?: "shared" | "personal";
    type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference";
    value?: string;
    config?: Record<string, any>;
    visibility?: "private" | "protected" | "public";
    meta?: Record<string, any>;
    blueprintId?: string;
};
export type SecretUpdateRequestBody = import("../types/api/v1.js").operations["updateSecret"]["requestBody"]["content"]["application/json"];
export type SecretUpdateResponse = import("../types/api/v1.js").operations["updateSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretDeleteRequestBody = import("../types/api/v1.js").operations["deleteSecret"]["requestBody"]["content"]["application/json"];
export type SecretDeleteResponse = import("../types/api/v1.js").operations["deleteSecret"]["responses"]["200"]["content"]["application/json"];
