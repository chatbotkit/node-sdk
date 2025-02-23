import { ChatBotKitClient } from '../client.js'
import {
  createFile,
  deleteFile,
  downloadFile,
  fetchFile,
  listFiles,
  updateFile,
  uploadFile,
} from './v1.js'

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
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all files.
   *
   * @param {import('./v1.js').FileListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').FileListResponse,import('./v1.js').FileListStreamType>}
   */
  list(request) {
    return listFiles(this, request)
  }

  /**
   * Fetches a file.
   *
   * @param {string} fileId
   * @returns {ResponsePromise<import('./v1.js').FileFetchResponse,never>}
   */
  fetch(fileId) {
    return fetchFile(this, fileId)
  }

  /**
   * Creates a new file.
   *
   * @param {import('./v1.js').FileCreateRequest} request
   * @returns {Promise<import('./v1.js').FileCreateResponse>}
   */
  create(request) {
    return createFile(this, request)
  }

  /**
   * Updates a file.
   *
   * @param {string} fileId
   * @param {import('./v1.js').FileUpdateRequest} request
   * @returns {Promise<import('./v1.js').FileUpdateResponse>}
   */
  update(fileId, request) {
    return updateFile(this, fileId, request)
  }

  /**
   * Deletes the file.
   *
   * @param {string} fileId
   * @returns {Promise<import('./v1.js').FileDeleteResponse>}
   */
  delete(fileId) {
    return deleteFile(this, fileId)
  }

  /**
   * Upload file data.
   *
   * @param {string} fileId
   * @param {import('./v1.js').FileUploadRequest} request
   * @returns {Promise<import('./v1.js').FileUploadResponse>}
   */
  upload(fileId, request) {
    return uploadFile(this, fileId, request)
  }

  /**
   * Download file data.
   *
   * @param {string} fileId
   * @returns {Promise<import('./v1.js').FileDownloadResponse>}
   */
  download(fileId) {
    return downloadFile(this, fileId)
  }
}

export default FileClient
