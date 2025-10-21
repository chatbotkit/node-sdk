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
 * }} DatasetFileListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/json']} DatasetFileListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/jsonl']} DatasetFileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetFileListRequest} [request]
 * @returns {ResponsePromise<DatasetFileListResponse,DatasetFileListStreamType>}
 */
export function listDatasetFiles(client: ChatBotKitClient, datasetId: string, request?: DatasetFileListRequest): ResponsePromise<DatasetFileListResponse, DatasetFileListStreamType>;
/**
 * @typedef {{
 *   type: 'source'
 * }} DatasetFileAttachRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['attachDatasetFile']['requestBody']['content']['application/json']} DatasetFileAttachRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['attachDatasetFile']['responses']['200']['content']['application/json']} DatasetFileAttachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileAttachRequest} request
 * @returns {Promise<DatasetFileAttachResponse>}
 */
export function attachDatasetFile(client: ChatBotKitClient, datasetId: string, fileId: string, request: DatasetFileAttachRequest): Promise<DatasetFileAttachResponse>;
/**
 * @typedef {{}} DatasetFileDetachRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['detachDatasetFile']['requestBody']['content']['application/json']} DatasetFileDetachRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['detachDatasetFile']['responses']['200']['content']['application/json']} DatasetFileDetachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileDetachRequest} request
 * @returns {Promise<DatasetFileDetachResponse>}
 */
export function detachDatasetFile(client: ChatBotKitClient, datasetId: string, fileId: string, request: DatasetFileDetachRequest): Promise<DatasetFileDetachResponse>;
/**
 * @typedef {{}} DatasetFileSyncRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['syncDatasetFile']['requestBody']['content']['application/json']} DatasetFileSyncRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['syncDatasetFile']['responses']['200']['content']['application/json']} DatasetFileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileSyncRequest} request
 * @returns {Promise<DatasetFileSyncResponse>}
 */
export function syncDatasetFile(client: ChatBotKitClient, datasetId: string, fileId: string, request: DatasetFileSyncRequest): Promise<DatasetFileSyncResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type DatasetFileListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetFileListResponse = import("../../types/api/v1.js").operations["listDatasetFiles"]["responses"]["200"]["content"]["application/json"];
export type DatasetFileListStreamType = import("../../types/api/v1.js").operations["listDatasetFiles"]["responses"]["200"]["content"]["application/jsonl"];
export type DatasetFileAttachRequest = {
    type: "source";
};
export type DatasetFileAttachRequestBody = import("../../types/api/v1.js").operations["attachDatasetFile"]["requestBody"]["content"]["application/json"];
export type DatasetFileAttachResponse = import("../../types/api/v1.js").operations["attachDatasetFile"]["responses"]["200"]["content"]["application/json"];
export type DatasetFileDetachRequest = {};
export type DatasetFileDetachRequestBody = import("../../types/api/v1.js").operations["detachDatasetFile"]["requestBody"]["content"]["application/json"];
export type DatasetFileDetachResponse = import("../../types/api/v1.js").operations["detachDatasetFile"]["responses"]["200"]["content"]["application/json"];
export type DatasetFileSyncRequest = {};
export type DatasetFileSyncRequestBody = import("../../types/api/v1.js").operations["syncDatasetFile"]["requestBody"]["content"]["application/json"];
export type DatasetFileSyncResponse = import("../../types/api/v1.js").operations["syncDatasetFile"]["responses"]["200"]["content"]["application/json"];
