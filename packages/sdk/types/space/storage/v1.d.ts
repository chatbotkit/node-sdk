/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['listSpaceStoragePath']['parameters']['query']>} SpaceStorageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} [path]
 * @param {SpaceStorageListRequest} [request]
 * @returns {ResponsePromise<SpaceStorageListResponse,never>}
 */
export function listSpaceStorage(client: ChatBotKitClient, spaceId: string, path?: string, request?: SpaceStorageListRequest): ResponsePromise<SpaceStorageListResponse, never>;
/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['downloadSpaceStoragePath']['parameters']['query']>} SpaceStorageDownloadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['downloadSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageDownloadRequest} [request]
 * @returns {ResponsePromise<SpaceStorageDownloadResponse,never>}
 */
export function downloadSpaceStorage(client: ChatBotKitClient, spaceId: string, path: string, request?: SpaceStorageDownloadRequest): ResponsePromise<SpaceStorageDownloadResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['uploadSpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageUploadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['uploadSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageUploadRequest} request
 * @returns {Promise<SpaceStorageUploadResponse>}
 */
export function uploadSpaceStorage(client: ChatBotKitClient, spaceId: string, path: string, request: SpaceStorageUploadRequest): Promise<SpaceStorageUploadResponse>;
/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['deleteSpaceStoragePath']['requestBody']>['content']['application/json']} SpaceStorageDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageDeleteRequest} [request]
 * @returns {Promise<SpaceStorageDeleteResponse>}
 */
export function deleteSpaceStorage(client: ChatBotKitClient, spaceId: string, path: string, request?: SpaceStorageDeleteRequest): Promise<SpaceStorageDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['copySpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageCopyRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['copySpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageCopyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageCopyRequest} request
 * @returns {Promise<SpaceStorageCopyResponse>}
 */
export function copySpaceStorage(client: ChatBotKitClient, spaceId: string, path: string, request: SpaceStorageCopyRequest): Promise<SpaceStorageCopyResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['moveSpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageMoveRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['moveSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageMoveResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageMoveRequest} request
 * @returns {Promise<SpaceStorageMoveResponse>}
 */
export function moveSpaceStorage(client: ChatBotKitClient, spaceId: string, path: string, request: SpaceStorageMoveRequest): Promise<SpaceStorageMoveResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type SpaceStorageListRequest = NonNullable<import("../../types/api/v1.js").operations["listSpaceStoragePath"]["parameters"]["query"]>;
export type SpaceStorageListResponse = import("../../types/api/v1.js").operations["listSpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
export type SpaceStorageDownloadRequest = NonNullable<import("../../types/api/v1.js").operations["downloadSpaceStoragePath"]["parameters"]["query"]>;
export type SpaceStorageDownloadResponse = import("../../types/api/v1.js").operations["downloadSpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
export type SpaceStorageUploadRequest = import("../../types/api/v1.js").operations["uploadSpaceStoragePath"]["requestBody"]["content"]["application/json"];
export type SpaceStorageUploadResponse = import("../../types/api/v1.js").operations["uploadSpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
export type SpaceStorageDeleteRequest = NonNullable<import("../../types/api/v1.js").operations["deleteSpaceStoragePath"]["requestBody"]>["content"]["application/json"];
export type SpaceStorageDeleteResponse = import("../../types/api/v1.js").operations["deleteSpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
export type SpaceStorageCopyRequest = import("../../types/api/v1.js").operations["copySpaceStoragePath"]["requestBody"]["content"]["application/json"];
export type SpaceStorageCopyResponse = import("../../types/api/v1.js").operations["copySpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
export type SpaceStorageMoveRequest = import("../../types/api/v1.js").operations["moveSpaceStoragePath"]["requestBody"]["content"]["application/json"];
export type SpaceStorageMoveResponse = import("../../types/api/v1.js").operations["moveSpaceStoragePath"]["responses"]["200"]["content"]["application/json"];
