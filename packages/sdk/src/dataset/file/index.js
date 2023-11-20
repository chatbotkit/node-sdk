import { ChatBotKitClient } from '../../client.js'
import { attachDatasetFile, detachDatasetFile, syncDatasetFile } from './v1.js'

export class DatasetFileClient extends ChatBotKitClient {
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
   * @param {import('./v1.js').DatasetFileAttachRequest} request
   * @returns {Promise<import('./v1.js').DatasetFileAttachResponse>}
   */
  attach(datasetId, fileId, request) {
    return attachDatasetFile(this, datasetId, fileId, request)
  }

  /**
   * Detach a file.
   *
   * @param {string} datasetId
   * @param {string} fileId
   * @param {import('./v1.js').DatasetFileDetachRequest} request
   * @returns {Promise<import('./v1.js').DatasetFileDetachResponse>}
   */
  detach(datasetId, fileId, request) {
    return detachDatasetFile(this, datasetId, fileId, request)
  }

  /**
   * Sync a file.
   *
   * @param {string} datasetId
   * @param {string} fileId
   * @param {import('./v1.js').DatasetFileSyncRequest} request
   * @returns {Promise<import('./v1.js').DatasetFileSyncResponse>}
   */
  sync(datasetId, fileId, request) {
    return syncDatasetFile(this, datasetId, fileId, request)
  }
}

export default DatasetFileClient
