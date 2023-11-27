/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Dataset record client.
 */
export class DatasetRecordClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all records.
     *
     * @param {string} datasetId
     * @param {import('./v1.js').DatasetRecordListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').DatasetRecordListResponse,import('./v1.js').DatasetRecordListStreamType>}
     */
    list(datasetId: string, request?: import("./v1.js").DatasetRecordListRequest | undefined): ResponsePromise<import('./v1.js').DatasetRecordListResponse, import('./v1.js').DatasetRecordListStreamType>;
    /**
     * Fetches a record.
     *
     * @param {string} datasetId
     * @param {string} recordId
     * @returns {Promise<import('./v1.js').DatasetRecordFetchResponse>}
     */
    fetch(datasetId: string, recordId: string): Promise<import('./v1.js').DatasetRecordFetchResponse>;
    /**
     * Creates a new record.
     *
     * @param {string} datasetId
     * @param {import('./v1.js').DatasetRecordCreateRequest} request
     * @returns {Promise<import('./v1.js').DatasetRecordCreateResponse>}
     */
    create(datasetId: string, request: import('./v1.js').DatasetRecordCreateRequest): Promise<import('./v1.js').DatasetRecordCreateResponse>;
    /**
     * Updates a record.
     *
     * @param {string} datasetId
     * @param {string} recordId
     * @param {import('./v1.js').DatasetRecordUpdateRequest} request
     * @returns {Promise<import('./v1.js').DatasetRecordUpdateResponse>}
     */
    update(datasetId: string, recordId: string, request: import('./v1.js').DatasetRecordUpdateRequest): Promise<import('./v1.js').DatasetRecordUpdateResponse>;
    /**
     * Deletes the record.
     *
     * @param {string} datasetId
     * @param {string} recordId
     * @returns {Promise<import('./v1.js').DatasetRecordDeleteResponse>}
     */
    delete(datasetId: string, recordId: string): Promise<import('./v1.js').DatasetRecordDeleteResponse>;
}
export default DatasetRecordClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
