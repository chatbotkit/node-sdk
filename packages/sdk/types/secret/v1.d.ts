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
 * @typedef {import('../types/api/v1.js').operations['createSecret']['requestBody']['content']['application/json']} SecretCreateRequestBody
 *
 * @typedef {SecretCreateRequestBody} SecretCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['responses']['200']['content']['application/json']} SecretCreateResponseBody
 *
 * @typedef {SecretCreateResponseBody} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export function createSecret(client: ChatBotKitClient, request: SecretCreateRequest): Promise<SecretCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['requestBody']['content']['application/json']} SecretUpdateRequestBody
 *
 * @typedef {SecretUpdateRequestBody} SecretUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['responses']['200']['content']['application/json']} SecretUpdateResponseBody
 *
 * @typedef {SecretUpdateResponseBody} SecretUpdateResponse
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
 * @typedef {SecretDeleteRequestBody} SecretDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['responses']['200']['content']['application/json']} SecretDeleteResponseBody
 *
 * @typedef {SecretDeleteResponseBody} SecretDeleteResponse
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
export type SecretCreateRequestBody = import("../types/api/v1.js").operations["createSecret"]["requestBody"]["content"]["application/json"];
export type SecretCreateRequest = SecretCreateRequestBody;
export type SecretCreateResponseBody = import("../types/api/v1.js").operations["createSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretCreateResponse = SecretCreateResponseBody;
export type SecretUpdateRequestBody = import("../types/api/v1.js").operations["updateSecret"]["requestBody"]["content"]["application/json"];
export type SecretUpdateRequest = SecretUpdateRequestBody;
export type SecretUpdateResponseBody = import("../types/api/v1.js").operations["updateSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretUpdateResponse = SecretUpdateResponseBody;
export type SecretDeleteRequestBody = import("../types/api/v1.js").operations["deleteSecret"]["requestBody"]["content"]["application/json"];
export type SecretDeleteRequest = SecretDeleteRequestBody;
export type SecretDeleteResponseBody = import("../types/api/v1.js").operations["deleteSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretDeleteResponse = SecretDeleteResponseBody;
