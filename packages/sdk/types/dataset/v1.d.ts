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
 *   name?: string,
 *   description?: string,
 *   store?: string,
 *   recordMaxTokens?: number,
 *   searchMaxRecords?: number,
 *   searchMaxTokens?: number,
 *   matchInstruction?: string,
 *   mismatchInstruction?: string,
 *   meta?: Record<string,any>,
 * }} DatasetOptions
 *
 * @typedef {DatasetOptions & {
 *   id: string,
 *   store: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} DatasetInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} DatasetListRequest
 *
 * @typedef {{items: DatasetInstance[]}} DatasetListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetInstance
 * }} DatasetListStreamItemType
 *
 * @typedef {DatasetListStreamItemType} DatasetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetListRequest} [request]
 * @returns {ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function listDatasets(client: ChatBotKitClient, request?: DatasetListRequest | undefined): ResponsePromise<DatasetListResponse, DatasetListStreamType>;
/**
 * @typedef {DatasetInstance & {
 * }} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetFetchResponse>}
 */
export function fetchDataset(client: ChatBotKitClient, datasetId: string): Promise<DatasetFetchResponse>;
/**
 * @typedef {DatasetOptions & {
 *   store: string
 * }} DatasetCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetCreateRequest} request
 * @returns {Promise<DatasetCreateResponse>}
 */
export function createDataset(client: ChatBotKitClient, request: DatasetCreateRequest): Promise<DatasetCreateResponse>;
/**
 * @typedef {DatasetOptions & {
 * }} DatasetUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetUpdateRequest} request
 * @returns {Promise<DatasetUpdateResponse>}
 */
export function updateDataset(client: ChatBotKitClient, datasetId: string, request: DatasetUpdateRequest): Promise<DatasetUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} DatasetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetDeleteResponse>}
 */
export function deleteDataset(client: ChatBotKitClient, datasetId: string): Promise<DatasetDeleteResponse>;
/**
 * @typedef {{
 *   records: {id: string, text: string}[]
 * }} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export function searchDataset(client: ChatBotKitClient, datasetId: string, search: string): Promise<DatasetSearchResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type DatasetOptions = {
    name?: string;
    description?: string;
    store?: string;
    recordMaxTokens?: number;
    searchMaxRecords?: number;
    searchMaxTokens?: number;
    matchInstruction?: string;
    mismatchInstruction?: string;
    meta?: Record<string, any>;
};
export type DatasetInstance = DatasetOptions & {
    id: string;
    store: string;
    createdAt: number;
    updatedAt: number;
};
export type DatasetListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type DatasetListResponse = {
    items: DatasetInstance[];
};
export type DatasetListStreamItemType = {
    type: 'item';
    data: DatasetInstance;
};
export type DatasetListStreamType = DatasetListStreamItemType;
export type DatasetFetchResponse = DatasetInstance & {};
export type DatasetCreateRequest = DatasetOptions & {
    store: string;
};
export type DatasetCreateResponse = {
    id: string;
};
export type DatasetUpdateRequest = DatasetOptions & {};
export type DatasetUpdateResponse = {
    id: string;
};
export type DatasetDeleteResponse = {
    id: string;
};
export type DatasetSearchResponse = {
    records: {
        id: string;
        text: string;
    }[];
};
