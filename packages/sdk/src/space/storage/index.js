import { ChatBotKitClient } from '../../client.js'
import {
  copySpaceStorage,
  deleteSpaceStorage,
  downloadSpaceStorage,
  listSpaceStorage,
  moveSpaceStorage,
  uploadSpaceStorage,
} from './v1.js'

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
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Lists files and directories in space storage.
   *
   * @param {string} spaceId
   * @param {string} [path]
   * @param {import('./v1.js').SpaceStorageListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SpaceStorageListResponse,never>}
   */
  list(spaceId, path, request) {
    return listSpaceStorage(this, spaceId, path, request)
  }

  /**
   * Gets a presigned download URL for a file.
   *
   * @param {string} spaceId
   * @param {string} path
   * @param {import('./v1.js').SpaceStorageDownloadRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SpaceStorageDownloadResponse,never>}
   */
  download(spaceId, path, request) {
    return downloadSpaceStorage(this, spaceId, path, request)
  }

  /**
   * Uploads a file to space storage.
   *
   * @param {string} spaceId
   * @param {string} path
   * @param {import('./v1.js').SpaceStorageUploadRequest} request
   * @returns {Promise<import('./v1.js').SpaceStorageUploadResponse>}
   */
  upload(spaceId, path, request) {
    return uploadSpaceStorage(this, spaceId, path, request)
  }

  /**
   * Deletes a file or directory from space storage.
   *
   * @param {string} spaceId
   * @param {string} path
   * @param {import('./v1.js').SpaceStorageDeleteRequest} [request]
   * @returns {Promise<import('./v1.js').SpaceStorageDeleteResponse>}
   */
  delete(spaceId, path, request) {
    return deleteSpaceStorage(this, spaceId, path, request)
  }

  /**
   * Copies a file in space storage.
   *
   * @param {string} spaceId
   * @param {string} path
   * @param {import('./v1.js').SpaceStorageCopyRequest} request
   * @returns {Promise<import('./v1.js').SpaceStorageCopyResponse>}
   */
  copy(spaceId, path, request) {
    return copySpaceStorage(this, spaceId, path, request)
  }

  /**
   * Moves (renames) a file in space storage.
   *
   * @param {string} spaceId
   * @param {string} path
   * @param {import('./v1.js').SpaceStorageMoveRequest} request
   * @returns {Promise<import('./v1.js').SpaceStorageMoveResponse>}
   */
  move(spaceId, path, request) {
    return moveSpaceStorage(this, spaceId, path, request)
  }
}

export default SpaceStorageClient
