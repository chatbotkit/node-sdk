/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
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
