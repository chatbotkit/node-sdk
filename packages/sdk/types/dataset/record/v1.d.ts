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
 * }} DatasetRecordListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/json']} DatasetRecordListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/jsonl']} DatasetRecordListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordListRequest} [request]
 * @returns {ResponsePromise<DatasetRecordListResponse,DatasetRecordListStreamType>}
 */
export function listDatasetRecords(client: ChatBotKitClient, datasetId: string, request?: DatasetRecordListRequest): ResponsePromise<DatasetRecordListResponse, DatasetRecordListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {ResponsePromise<DatasetRecordFetchResponse,never>}
 */
export function fetchDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string): ResponsePromise<DatasetRecordFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordCreateRequestBody
 *
 * @typedef {DatasetRecordCreateRequestBody} DatasetRecordCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordCreateResponseBody
 *
 * @typedef {DatasetRecordCreateResponseBody} DatasetRecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordCreateRequest} request
 * @returns {Promise<DatasetRecordCreateResponse>}
 */
export function createDatasetRecord(client: ChatBotKitClient, datasetId: string, request: DatasetRecordCreateRequest): Promise<DatasetRecordCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordUpdateRequestBody
 *
 * @typedef {DatasetRecordUpdateRequestBody} DatasetRecordUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordUpdateResponseBody
 *
 * @typedef {DatasetRecordUpdateResponseBody} DatasetRecordUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @param {DatasetRecordUpdateRequest} request
 * @returns {Promise<DatasetRecordUpdateResponse>}
 */
export function updateDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string, request: DatasetRecordUpdateRequest): Promise<DatasetRecordUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordDeleteRequestBody
 *
 * @typedef {DatasetRecordDeleteRequestBody} DatasetRecordDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordDeleteResponseBody
 *
 * @typedef {DatasetRecordDeleteResponseBody} DatasetRecordDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<DatasetRecordDeleteResponse>}
 */
export function deleteDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string): Promise<DatasetRecordDeleteResponse>;
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} DatasetRecordExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportDatasetRecords']['responses']['200']['content']['application/json']} DatasetRecordExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportDatasetRecords']['responses']['200']['content']['application/jsonl']} DatasetRecordExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordExportRequest} [request]
 * @returns {ResponsePromise<DatasetRecordExportResponse,DatasetRecordExportStreamType>}
 */
export function exportDatasetRecords(client: ChatBotKitClient, datasetId: string, request?: DatasetRecordExportRequest): ResponsePromise<DatasetRecordExportResponse, DatasetRecordExportStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type DatasetRecordListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetRecordListResponse = import("../../types/api/v1.js").operations["listDatasetRecords"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordListStreamType = import("../../types/api/v1.js").operations["listDatasetRecords"]["responses"]["200"]["content"]["application/jsonl"];
export type DatasetRecordFetchResponse = import("../../types/api/v1.js").operations["fetchDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordCreateRequestBody = import("../../types/api/v1.js").operations["createDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordCreateRequest = DatasetRecordCreateRequestBody;
export type DatasetRecordCreateResponseBody = import("../../types/api/v1.js").operations["createDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordCreateResponse = DatasetRecordCreateResponseBody;
export type DatasetRecordUpdateRequestBody = import("../../types/api/v1.js").operations["updateDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordUpdateRequest = DatasetRecordUpdateRequestBody;
export type DatasetRecordUpdateResponseBody = import("../../types/api/v1.js").operations["updateDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordUpdateResponse = DatasetRecordUpdateResponseBody;
export type DatasetRecordDeleteRequestBody = import("../../types/api/v1.js").operations["deleteDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordDeleteRequest = DatasetRecordDeleteRequestBody;
export type DatasetRecordDeleteResponseBody = import("../../types/api/v1.js").operations["deleteDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordDeleteResponse = DatasetRecordDeleteResponseBody;
export type DatasetRecordExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetRecordExportResponse = import("../../types/api/v1.js").operations["exportDatasetRecords"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordExportStreamType = import("../../types/api/v1.js").operations["exportDatasetRecords"]["responses"]["200"]["content"]["application/jsonl"];
