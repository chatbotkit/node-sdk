/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Dataset client.
 */
export class DatasetClient extends ChatBotKitClient {
    /**
     * @type {DatasetFileClient} file client
     */
    file: DatasetFileClient;
    /**
     * @type {DatasetRecordClient} record client
     */
    record: DatasetRecordClient;
    /**
     * Retrieves a list of all datasets.
     *
     * @param {import('./v1.js').DatasetListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').DatasetListResponse,import('./v1.js').DatasetListStreamType>}
     */
    list(request?: import("./v1.js").DatasetListRequest | undefined): ResponsePromise<import('./v1.js').DatasetListResponse, import('./v1.js').DatasetListStreamType>;
    /**
     * Fetches a dataset.
     *
     * @param {string} datasetId
     * @returns {Promise<import('./v1.js').DatasetFetchResponse>}
     */
    fetch(datasetId: string): Promise<import('./v1.js').DatasetFetchResponse>;
    /**
     * Creates a new dataset.
     *
     * @param {import('./v1.js').DatasetCreateRequest} request
     * @returns {Promise<import('./v1.js').DatasetCreateResponse>}
     */
    create(request: import('./v1.js').DatasetCreateRequest): Promise<import('./v1.js').DatasetCreateResponse>;
    /**
     * Updates a dataset.
     *
     * @param {string} datasetId
     * @param {import('./v1.js').DatasetUpdateRequest} request
     * @returns {Promise<import('./v1.js').DatasetUpdateResponse>}
     */
    update(datasetId: string, request: import('./v1.js').DatasetUpdateRequest): Promise<import('./v1.js').DatasetUpdateResponse>;
    /**
     * Deletes the dataset.
     *
     * @param {string} datasetId
     * @returns {Promise<import('./v1.js').DatasetDeleteResponse>}
     */
    delete(datasetId: string): Promise<import('./v1.js').DatasetDeleteResponse>;
    /**
     * Searches the dataset.
     *
     * @param {string} datasetId
     * @param {string} search
     * @returns {Promise<import('./v1.js').DatasetSearchResponse>}
     */
    search(datasetId: string, search: string): Promise<import('./v1.js').DatasetSearchResponse>;
}
export default DatasetClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { DatasetFileClient } from './file/index.js';
import { DatasetRecordClient } from './record/index.js';
