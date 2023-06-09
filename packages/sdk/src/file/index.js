import { ChatBotKitClient } from '../client.js'
import {
  fileList,
  fileFetch,
  fileCreate,
  fileUpdate,
  fileDelete,
} from './v1.js'

export class FileClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
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
}

export default FileClient
