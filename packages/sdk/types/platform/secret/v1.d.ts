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
 * @typedef {PlatformSecretListResponse['items'][number]} PlatformSecretInstance
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/jsonl']} PlatformSecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretListRequest} [request]
 * @returns {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>}
 */
export function listPlatformSecrets(client: ChatBotKitClient, request?: PlatformSecretListRequest): ResponsePromise<PlatformSecretListResponse, PlatformSecretListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type PlatformSecretListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
};
export type PlatformSecretListResponse = import("../../types/api/v1.js").operations["listPlatformSecrets"]["responses"]["200"]["content"]["application/json"];
export type PlatformSecretInstance = PlatformSecretListResponse["items"][number];
export type PlatformSecretListStreamType = import("../../types/api/v1.js").operations["listPlatformSecrets"]["responses"]["200"]["content"]["application/jsonl"];
