/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * File client.
 */
export class FileClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all files.
     *
     * @param {import('./v1.js').FileListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').FileListResponse,import('./v1.js').FileListStreamType>}
     */
    list(request?: import("./v1.js").FileListRequest): ResponsePromise<import("./v1.js").FileListResponse, import("./v1.js").FileListStreamType>;
    /**
     * Fetches a file.
     *
     * @param {string} fileId
     * @returns {ResponsePromise<import('./v1.js').FileFetchResponse,never>}
     */
    fetch(fileId: string): ResponsePromise<import("./v1.js").FileFetchResponse, never>;
    /**
     * Creates a new file.
     *
     * @param {import('./v1.js').FileCreateRequest} request
     * @returns {Promise<import('./v1.js').FileCreateResponse>}
     */
    create(request: import("./v1.js").FileCreateRequest): Promise<import("./v1.js").FileCreateResponse>;
    /**
     * Updates a file.
     *
     * @param {string} fileId
     * @param {import('./v1.js').FileUpdateRequest} request
     * @returns {Promise<import('./v1.js').FileUpdateResponse>}
     */
    update(fileId: string, request: import("./v1.js").FileUpdateRequest): Promise<import("./v1.js").FileUpdateResponse>;
    /**
     * Deletes the file.
     *
     * @param {string} fileId
     * @returns {Promise<import('./v1.js').FileDeleteResponse>}
     */
    delete(fileId: string): Promise<import("./v1.js").FileDeleteResponse>;
    /**
     * Upload file data.
     *
     * @param {string} fileId
     * @param {import('./v1.js').FileUploadRequest} request
     * @returns {Promise<import('./v1.js').FileUploadResponse>}
     */
    upload(fileId: string, request: import("./v1.js").FileUploadRequest): Promise<import("./v1.js").FileUploadResponse>;
    /**
     * Download file data.
     *
     * @param {string} fileId
     * @returns {Promise<import('./v1.js').FileDownloadResponse>}
     */
    download(fileId: string): Promise<import("./v1.js").FileDownloadResponse>;
    /**
     * Syncs a file.
     *
     * @param {string} fileId
     * @returns {Promise<import('./v1.js').FileSyncResponse>}
     */
    sync(fileId: string): Promise<import("./v1.js").FileSyncResponse>;
}
export default FileClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
