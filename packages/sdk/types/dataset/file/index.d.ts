/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Dataset file client.
 */
export class DatasetFileClient extends ChatBotKitClient {
    /**
     *
     * @param {string} datasetId
     * @param {import('./v1.js').DatasetFileListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').DatasetFileListResponse,import('./v1.js').DatasetFileListStreamType>}
     */
    list(datasetId: string, request?: import("./v1.js").DatasetFileListRequest): ResponsePromise<import("./v1.js").DatasetFileListResponse, import("./v1.js").DatasetFileListStreamType>;
    /**
     * Attaches a file.
     *
     * @param {string} datasetId
     * @param {string} fileId
     * @param {import('./v1.js').DatasetFileAttachRequest} request
     * @returns {Promise<import('./v1.js').DatasetFileAttachResponse>}
     */
    attach(datasetId: string, fileId: string, request: import("./v1.js").DatasetFileAttachRequest): Promise<import("./v1.js").DatasetFileAttachResponse>;
    /**
     * Detach a file.
     *
     * @param {string} datasetId
     * @param {string} fileId
     * @param {import('./v1.js').DatasetFileDetachRequest} request
     * @returns {Promise<import('./v1.js').DatasetFileDetachResponse>}
     */
    detach(datasetId: string, fileId: string, request: import("./v1.js").DatasetFileDetachRequest): Promise<import("./v1.js").DatasetFileDetachResponse>;
    /**
     * Sync a file.
     *
     * @param {string} datasetId
     * @param {string} fileId
     * @param {import('./v1.js').DatasetFileSyncRequest} request
     * @returns {Promise<import('./v1.js').DatasetFileSyncResponse>}
     */
    sync(datasetId: string, fileId: string, request: import("./v1.js").DatasetFileSyncRequest): Promise<import("./v1.js").DatasetFileSyncResponse>;
}
export default DatasetFileClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
