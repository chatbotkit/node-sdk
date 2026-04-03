/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Space storage client.
 */
export class SpaceStorageClient extends ChatBotKitClient {
    /**
     * Lists files and directories in space storage.
     *
     * @param {string} spaceId
     * @param {string} [path]
     * @param {import('./v1.js').SpaceStorageListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SpaceStorageListResponse,never>}
     */
    list(spaceId: string, path?: string, request?: import("./v1.js").SpaceStorageListRequest): ResponsePromise<import("./v1.js").SpaceStorageListResponse, never>;
    /**
     * Gets a presigned download URL for a file.
     *
     * @param {string} spaceId
     * @param {string} path
     * @param {import('./v1.js').SpaceStorageDownloadRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').SpaceStorageDownloadResponse,never>}
     */
    download(spaceId: string, path: string, request?: import("./v1.js").SpaceStorageDownloadRequest): ResponsePromise<import("./v1.js").SpaceStorageDownloadResponse, never>;
    /**
     * Uploads a file to space storage.
     *
     * @param {string} spaceId
     * @param {string} path
     * @param {import('./v1.js').SpaceStorageUploadRequest} request
     * @returns {Promise<import('./v1.js').SpaceStorageUploadResponse>}
     */
    upload(spaceId: string, path: string, request: import("./v1.js").SpaceStorageUploadRequest): Promise<import("./v1.js").SpaceStorageUploadResponse>;
    /**
     * Deletes a file or directory from space storage.
     *
     * @param {string} spaceId
     * @param {string} path
     * @param {import('./v1.js').SpaceStorageDeleteRequest} [request]
     * @returns {Promise<import('./v1.js').SpaceStorageDeleteResponse>}
     */
    delete(spaceId: string, path: string, request?: import("./v1.js").SpaceStorageDeleteRequest): Promise<import("./v1.js").SpaceStorageDeleteResponse>;
    /**
     * Copies a file in space storage.
     *
     * @param {string} spaceId
     * @param {string} path
     * @param {import('./v1.js').SpaceStorageCopyRequest} request
     * @returns {Promise<import('./v1.js').SpaceStorageCopyResponse>}
     */
    copy(spaceId: string, path: string, request: import("./v1.js").SpaceStorageCopyRequest): Promise<import("./v1.js").SpaceStorageCopyResponse>;
    /**
     * Moves (renames) a file in space storage.
     *
     * @param {string} spaceId
     * @param {string} path
     * @param {import('./v1.js').SpaceStorageMoveRequest} request
     * @returns {Promise<import('./v1.js').SpaceStorageMoveResponse>}
     */
    move(spaceId: string, path: string, request: import("./v1.js").SpaceStorageMoveRequest): Promise<import("./v1.js").SpaceStorageMoveResponse>;
}
export default SpaceStorageClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
