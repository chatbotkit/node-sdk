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
 * }} DatasetListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/json']} DatasetListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/jsonl']} DatasetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetListRequest} [request]
 * @returns {ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function listDatasets(client: ChatBotKitClient, request?: DatasetListRequest): ResponsePromise<DatasetListResponse, DatasetListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchDataset']['responses']['200']['content']['application/json']} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {ResponsePromise<DatasetFetchResponse,never>}
 */
export function fetchDataset(client: ChatBotKitClient, datasetId: string): ResponsePromise<DatasetFetchResponse, never>;
/**
 * @typedef {import('../types/api/v1.js').operations['createDataset']['requestBody']['content']['application/json']} DatasetCreateRequestBody
 *
 * @typedef {DatasetCreateRequestBody} DatasetCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createDataset']['responses']['200']['content']['application/json']} DatasetCreateResponseBody
 *
 * @typedef {DatasetCreateResponseBody} DatasetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetCreateRequest} request
 * @returns {Promise<DatasetCreateResponse>}
 */
export function createDataset(client: ChatBotKitClient, request: DatasetCreateRequest): Promise<DatasetCreateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['updateDataset']['requestBody']['content']['application/json']} DatasetUpdateRequestBody
 *
 * @typedef {DatasetUpdateRequestBody} DatasetUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateDataset']['responses']['200']['content']['application/json']} DatasetUpdateResponseBody
 *
 * @typedef {DatasetUpdateResponseBody} DatasetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetUpdateRequest} request
 * @returns {Promise<DatasetUpdateResponse>}
 */
export function updateDataset(client: ChatBotKitClient, datasetId: string, request: DatasetUpdateRequest): Promise<DatasetUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteDataset']['requestBody']['content']['application/json']} DatasetDeleteRequestBody
 *
 * @typedef {DatasetDeleteRequestBody} DatasetDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteDataset']['responses']['200']['content']['application/json']} DatasetDeleteResponseBody
 *
 * @typedef {DatasetDeleteResponseBody} DatasetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetDeleteResponse>}
 */
export function deleteDataset(client: ChatBotKitClient, datasetId: string): Promise<DatasetDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['searchDataset']['requestBody']['content']['application/json']} DatasetSearchRequestBody
 *
 * @typedef {DatasetSearchRequestBody} DatasetSearchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['searchDataset']['responses']['200']['content']['application/json']} DatasetSearchResponseBody
 *
 * @typedef {DatasetSearchResponseBody} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export function searchDataset(client: ChatBotKitClient, datasetId: string, search: string): Promise<DatasetSearchResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type DatasetListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetListResponse = import("../types/api/v1.js").operations["listDatasets"]["responses"]["200"]["content"]["application/json"];
export type DatasetListStreamType = import("../types/api/v1.js").operations["listDatasets"]["responses"]["200"]["content"]["application/jsonl"];
export type DatasetFetchResponse = import("../types/api/v1.js").operations["fetchDataset"]["responses"]["200"]["content"]["application/json"];
export type DatasetCreateRequestBody = import("../types/api/v1.js").operations["createDataset"]["requestBody"]["content"]["application/json"];
export type DatasetCreateRequest = DatasetCreateRequestBody;
export type DatasetCreateResponseBody = import("../types/api/v1.js").operations["createDataset"]["responses"]["200"]["content"]["application/json"];
export type DatasetCreateResponse = DatasetCreateResponseBody;
export type DatasetUpdateRequestBody = import("../types/api/v1.js").operations["updateDataset"]["requestBody"]["content"]["application/json"];
export type DatasetUpdateRequest = DatasetUpdateRequestBody;
export type DatasetUpdateResponseBody = import("../types/api/v1.js").operations["updateDataset"]["responses"]["200"]["content"]["application/json"];
export type DatasetUpdateResponse = DatasetUpdateResponseBody;
export type DatasetDeleteRequestBody = import("../types/api/v1.js").operations["deleteDataset"]["requestBody"]["content"]["application/json"];
export type DatasetDeleteRequest = DatasetDeleteRequestBody;
export type DatasetDeleteResponseBody = import("../types/api/v1.js").operations["deleteDataset"]["responses"]["200"]["content"]["application/json"];
export type DatasetDeleteResponse = DatasetDeleteResponseBody;
export type DatasetSearchRequestBody = import("../types/api/v1.js").operations["searchDataset"]["requestBody"]["content"]["application/json"];
export type DatasetSearchRequest = DatasetSearchRequestBody;
export type DatasetSearchResponseBody = import("../types/api/v1.js").operations["searchDataset"]["responses"]["200"]["content"]["application/json"];
export type DatasetSearchResponse = DatasetSearchResponseBody;
