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
 *   name?: string,
 *   description?: string,
 *   text: string,
 *   source?: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordOptions
 *
 * @typedef {DatasetRecordOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} DatasetRecordInstance
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} DatasetRecordListRequest
 *
 * @typedef {{items: DatasetRecordInstance[]}} DatasetRecordListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetRecordInstance
 * }} DatasetRecordListStreamItem
 *
 * @typedef {DatasetRecordListStreamItem} DatasetRecordListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordListRequest} [request]
 * @returns {ResponsePromise<DatasetRecordListResponse,DatasetRecordListStreamType>}
 */
export function listDatasetRecords(client: ChatBotKitClient, datasetId: string, request?: DatasetRecordListRequest | undefined): ResponsePromise<DatasetRecordListResponse, DatasetRecordListStreamType>;
/**
 * @typedef {DatasetRecordInstance & {
 * }} DatasetRecordFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {ResponsePromise<DatasetRecordFetchResponse,never>}
 */
export function fetchDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string): ResponsePromise<DatasetRecordFetchResponse, never>;
/**
 * @typedef {DatasetRecordOptions & {
 * }} DatasetRecordCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetRecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordCreateRequest} request
 * @returns {Promise<DatasetRecordCreateResponse>}
 */
export function createDatasetRecord(client: ChatBotKitClient, datasetId: string, request: DatasetRecordCreateRequest): Promise<DatasetRecordCreateResponse>;
/**
 * @typedef {DatasetRecordOptions & {
 * }} DatasetRecordUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetRecordUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @param {DatasetRecordUpdateRequest} request
 * @returns {Promise<DatasetRecordUpdateResponse>}
 */
export function updateDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string, request: DatasetRecordUpdateRequest): Promise<DatasetRecordUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} DatasetRecordDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<DatasetRecordDeleteResponse>}
 */
export function deleteDatasetRecord(client: ChatBotKitClient, datasetId: string, recordId: string): Promise<DatasetRecordDeleteResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type DatasetRecordOptions = {
    name?: string;
    description?: string;
    text: string;
    source?: string;
    meta?: Record<string, any>;
};
export type DatasetRecordInstance = DatasetRecordOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type DatasetRecordListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetRecordListResponse = {
    items: DatasetRecordInstance[];
};
export type DatasetRecordListStreamItem = {
    type: 'item';
    data: DatasetRecordInstance;
};
export type DatasetRecordListStreamType = DatasetRecordListStreamItem;
export type DatasetRecordFetchResponse = DatasetRecordInstance & {};
export type DatasetRecordCreateRequest = DatasetRecordOptions & {};
export type DatasetRecordCreateResponse = {
    id: string;
};
export type DatasetRecordUpdateRequest = DatasetRecordOptions & {};
export type DatasetRecordUpdateResponse = {
    id: string;
};
export type DatasetRecordDeleteResponse = {
    id: string;
};
