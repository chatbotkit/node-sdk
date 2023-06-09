import { ChatBotKitClient } from '../../client.js'
import { fileAttach, fileDetach, fileSync } from './v1.js'

export class FileClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Attaches a file.
   *
   * @param {string} datasetId
   * @param {string} fileId
   * @param {import('./v1.js').FileAttachRequest} request
   * @returns {Promise<import('./v1.js').FileAttachResponse>}
   */
  attach(datasetId, fileId, request) {
    return fileAttach(this, datasetId, fileId, request)
  }

  /**
   * Detach a file.
   *
   * @param {string} datasetId
   * @param {string} fileId
   * @param {import('./v1.js').FileDetachRequest} request
   * @returns {Promise<import('./v1.js').FileDetachResponse>}
   */
  detach(datasetId, fileId, request) {
    return fileDetach(this, datasetId, fileId, request)
  }

  /**
   * Sync a file.
   *
   * @param {string} datasetId
   * @param {string} fileId
   * @param {import('./v1.js').FileSyncRequest} request
   * @returns {Promise<import('./v1.js').FileSyncResponse>}
   */
  sync(datasetId, fileId, request) {
    return fileSync(this, datasetId, fileId, request)
  }
}

export default FileClient
