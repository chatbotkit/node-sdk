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
 * }} PlatformSecretListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/json']} PlatformSecretListResponse
 *
 * @typedef {PlatformSecretListResponse['items'][number]} PlatformSecretListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/jsonl']} PlatformSecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretListRequest} [request]
 * @returns {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>}
 */
export function listPlatformSecrets(client: ChatBotKitClient, request?: PlatformSecretListRequest): ResponsePromise<PlatformSecretListResponse, PlatformSecretListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformSecrets']['requestBody']['content']['application/json']} PlatformSecretSearchRequestBody
 *
 * @typedef {PlatformSecretSearchRequestBody} PlatformSecretSearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformSecrets']['responses']['200']['content']['application/json']} PlatformSecretSearchResponseBody
 *
 * @typedef {PlatformSecretSearchResponseBody} PlatformSecretSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretSearchRequest} request
 * @returns {Promise<PlatformSecretSearchResponse>}
 */
export function searchPlatformSecrets(client: ChatBotKitClient, request: PlatformSecretSearchRequest): Promise<PlatformSecretSearchResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformSecretListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type PlatformSecretListResponse = import("../../types/api/v1.js").operations["listPlatformSecrets"]["responses"]["200"]["content"]["application/json"];
export type PlatformSecretListItem = PlatformSecretListResponse["items"][number];
export type PlatformSecretListStreamType = import("../../types/api/v1.js").operations["listPlatformSecrets"]["responses"]["200"]["content"]["application/jsonl"];
export type PlatformSecretSearchRequestBody = import("../../types/api/v1.js").operations["searchPlatformSecrets"]["requestBody"]["content"]["application/json"];
export type PlatformSecretSearchRequest = PlatformSecretSearchRequestBody;
export type PlatformSecretSearchResponseBody = import("../../types/api/v1.js").operations["searchPlatformSecrets"]["responses"]["200"]["content"]["application/json"];
export type PlatformSecretSearchResponse = PlatformSecretSearchResponseBody;
