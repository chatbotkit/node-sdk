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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text: string,
 *   source?: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordCreateRequest} request
 * @returns {Promise<DatasetRecordCreateResponse>}
 */
export function createDatasetRecord(client: ChatBotKitClient, datasetId: string, request: DatasetRecordCreateRequest): Promise<DatasetRecordCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text?: string,
 *   source?: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordUpdateResponse
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
 * @typedef {import('../../types/api/v1.js').operations['deleteDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordDeleteResponse
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
export type DatasetRecordCreateRequest = {
    name?: string;
    description?: string;
    text: string;
    source?: string;
    meta?: Record<string, any>;
};
export type DatasetRecordCreateRequestBody = import("../../types/api/v1.js").operations["createDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordCreateResponse = import("../../types/api/v1.js").operations["createDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordUpdateRequest = {
    name?: string;
    description?: string;
    text?: string;
    source?: string;
    meta?: Record<string, any>;
};
export type DatasetRecordUpdateRequestBody = import("../../types/api/v1.js").operations["updateDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordUpdateResponse = import("../../types/api/v1.js").operations["updateDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordDeleteRequestBody = import("../../types/api/v1.js").operations["deleteDatasetRecord"]["requestBody"]["content"]["application/json"];
export type DatasetRecordDeleteResponse = import("../../types/api/v1.js").operations["deleteDatasetRecord"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordExportRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetRecordExportResponse = import("../../types/api/v1.js").operations["exportDatasetRecords"]["responses"]["200"]["content"]["application/json"];
export type DatasetRecordExportStreamType = import("../../types/api/v1.js").operations["exportDatasetRecords"]["responses"]["200"]["content"]["application/jsonl"];
