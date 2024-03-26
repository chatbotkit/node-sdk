/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../../file/v1.js').FileInstance} DatasetFileInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} DatasetFileListRequest
 * @typedef {{items: DatasetFileInstance[]}} DatasetFileListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetFileInstance
 * }} DatasetFileListStreamItemType
 *
 * @typedef {DatasetFileListStreamItemType} DatasetFileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetFileListRequest} [request]
 * @returns {ResponsePromise<DatasetFileListResponse,DatasetFileListStreamType>}
 */
export function listDatasetFiles(client: ChatBotKitClient, datasetId: string, request?: DatasetFileListRequest | undefined): ResponsePromise<DatasetFileListResponse, DatasetFileListStreamType>;
/**
 * @typedef {{
 *   type: 'source'
 * }} DatasetFileAttachRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetFileAttachResponse
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
 * @typedef {{
 *   id: string
 * }} DatasetFileDetachResponse
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
 * @typedef {{
 *   id: string
 * }} DatasetFileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileSyncRequest} request
 * @returns {Promise<DatasetFileSyncResponse>}
 */
export function syncDatasetFile(client: ChatBotKitClient, datasetId: string, fileId: string, request: DatasetFileSyncRequest): Promise<DatasetFileSyncResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type DatasetFileInstance = import('../../file/v1.js').FileInstance;
export type DatasetFileListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetFileListResponse = {
    items: DatasetFileInstance[];
};
export type DatasetFileListStreamItemType = {
    type: 'item';
    data: DatasetFileInstance;
};
export type DatasetFileListStreamType = DatasetFileListStreamItemType;
export type DatasetFileAttachRequest = {
    type: 'source';
};
export type DatasetFileAttachResponse = {
    id: string;
};
export type DatasetFileDetachRequest = {};
export type DatasetFileDetachResponse = {
    id: string;
};
export type DatasetFileSyncRequest = {};
export type DatasetFileSyncResponse = {
    id: string;
};
