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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SecretListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/json']} SecretListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/jsonl']} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client: ChatBotKitClient, contactId: string, request?: SecretListRequest): ResponsePromise<SecretListResponse, SecretListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['revokeContactSecret']['requestBody']['content']['application/json']} SecretRevokeRequestBody
 *
 * @typedef {SecretRevokeRequestBody} SecretRevokeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['revokeContactSecret']['responses']['200']['content']['application/json']} SecretRevokeResponseBody
 *
 * @typedef {SecretRevokeResponseBody} SecretRevokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretRevokeResponse>}
 */
export function revokeSecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretRevokeResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['verifyContactSecret']['requestBody']['content']['application/json']} SecretVerifyRequestBody
 *
 * @typedef {SecretVerifyRequestBody} SecretVerifyRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['verifyContactSecret']['responses']['200']['content']['application/json']} SecretVerifyResponseBody
 *
 * @typedef {SecretVerifyResponseBody} SecretVerifyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretVerifyResponse>}
 */
export function verifySecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretVerifyResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['authenticateContactSecret']['requestBody']['content']['application/json']} SecretAuthenticateRequestBody
 *
 * @typedef {SecretAuthenticateRequestBody} SecretAuthenticateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['authenticateContactSecret']['responses']['200']['content']['application/json']} SecretAuthenticateResponseBody
 *
 * @typedef {SecretAuthenticateResponseBody} SecretAuthenticateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretAuthenticateResponse>}
 */
export function authenticateSecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretAuthenticateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['proxyContactSecret']['requestBody']['content']['application/json']} SecretProxyRequestBody
 *
 * @typedef {SecretProxyRequestBody} SecretProxyRequest
 *
 * Proxies a request through a contact's (personal) secret, injected server-side.
 * Returns the raw upstream `Response` (success or error, including streaming and
 * binary bodies). A CBK `authorization_required` signal - common here, since the
 * contact may not have authenticated the secret yet - is thrown as an
 * {@link AuthorizationRequiredError} carrying the `url` the user must visit.
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @param {SecretProxyRequest} request
 * @returns {Promise<Response>}
 */
export function proxySecret(client: ChatBotKitClient, contactId: string, secretId: string, request: SecretProxyRequest): Promise<Response>;
/**
 * @typedef {import('../../types/api/v1.js').operations['mintContactSecret']['responses']['200']['content']['application/json']} SecretMintResponseBody
 *
 * @typedef {SecretMintResponseBody} SecretMintResponse
 *
 * Mints a usable token from a contact's (personal) secret. Owner-only; only
 * `oauth`/`jwt` secrets are mintable.
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretMintResponse>}
 */
export function mintSecret(client: ChatBotKitClient, contactId: string, secretId: string): Promise<SecretMintResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SecretListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type SecretListResponse = import("../../types/api/v1.js").operations["listContactSecrets"]["responses"]["200"]["content"]["application/json"];
export type SecretListStreamType = import("../../types/api/v1.js").operations["listContactSecrets"]["responses"]["200"]["content"]["application/jsonl"];
export type SecretRevokeRequestBody = import("../../types/api/v1.js").operations["revokeContactSecret"]["requestBody"]["content"]["application/json"];
export type SecretRevokeRequest = SecretRevokeRequestBody;
export type SecretRevokeResponseBody = import("../../types/api/v1.js").operations["revokeContactSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretRevokeResponse = SecretRevokeResponseBody;
export type SecretVerifyRequestBody = import("../../types/api/v1.js").operations["verifyContactSecret"]["requestBody"]["content"]["application/json"];
export type SecretVerifyRequest = SecretVerifyRequestBody;
export type SecretVerifyResponseBody = import("../../types/api/v1.js").operations["verifyContactSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretVerifyResponse = SecretVerifyResponseBody;
export type SecretAuthenticateRequestBody = import("../../types/api/v1.js").operations["authenticateContactSecret"]["requestBody"]["content"]["application/json"];
export type SecretAuthenticateRequest = SecretAuthenticateRequestBody;
export type SecretAuthenticateResponseBody = import("../../types/api/v1.js").operations["authenticateContactSecret"]["responses"]["200"]["content"]["application/json"];
export type SecretAuthenticateResponse = SecretAuthenticateResponseBody;
export type SecretProxyRequestBody = import("../../types/api/v1.js").operations["proxyContactSecret"]["requestBody"]["content"]["application/json"];
/**
 *
 * Proxies a request through a contact's (personal) secret, injected server-side.
 * Returns the raw upstream `Response` (success or error, including streaming and
 * binary bodies). A CBK `authorization_required` signal - common here, since the
 * contact may not have authenticated the secret yet - is thrown as an
 * {@link AuthorizationRequiredError} carrying the `url` the user must visit.
 */
export type SecretProxyRequest = SecretProxyRequestBody;
export type SecretMintResponseBody = import("../../types/api/v1.js").operations["mintContactSecret"]["responses"]["200"]["content"]["application/json"];
/**
 * Mints a usable token from a contact's (personal) secret. Owner-only; only
 * `oauth`/`jwt` secrets are mintable.
 */
export type SecretMintResponse = SecretMintResponseBody;
