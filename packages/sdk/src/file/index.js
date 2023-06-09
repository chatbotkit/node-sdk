import { ChatFileKitClient } from '../client.js'
import {
  fileList,
  fileFetch,
  fileCreate,
  fileUpdate,
  fileDelete,
  fileUpload,
  fileDownload,
} from './v1.js'

export class FileClient extends ChatFileKitClient {
  /**
   * @param {import('../client.js').ChatFileKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing files associated with this client.
   */
  list() {
    return fileList(this)
  }

  /**
   * Fetches a file.
   *
   * @param {string} fileId
   */
  fetch(fileId) {
    return fileFetch(this, fileId)
  }

  /**
   * Creates a new file.
   *
   * @param {import('./v1.js').FileCreateRequest} request
   */
  create(request) {
    return fileCreate(this, request)
  }

  /**
   * Updates a new file.
   *
   * @param {string} fileId
   * @param {import('./v1.js').FileUpdateRequest} request
   */
  update(fileId, request) {
    return fileUpdate(this, fileId, request)
  }

  /**
   * Deletes the file.
   *
   * @param {string} fileId
   */
  delete(fileId) {
    return fileDelete(this, fileId)
  }

  /**
   * File upload.
   *
   * @param {string} fileId
   * @param {ArrayBuffer} data
   * @returns {import('./v1.js').FileUploadResponse}
   */
  upload(fileId, data) {
    return fileUpload(this, fileId, data)
  }

  /**
   * File download.
   *
   * @param {string} fileId
   * @returns {Promise<ArrayBuffer>}
   */
  download(fileId) {
    return fileDownload(this, fileId)
  }
}

export default FileClient
