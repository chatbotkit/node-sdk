import { ChatBotKitClient } from '../../client.js'
import {
  createDatasetRecord,
  deleteDatasetRecord,
  exportDatasetRecords,
  fetchDatasetRecord,
  listDatasetRecords,
  updateDatasetRecord,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Dataset record client.
 */
export class DatasetRecordClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all records.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetRecordListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').DatasetRecordListResponse,import('./v1.js').DatasetRecordListStreamType>}
   */
  list(datasetId, request) {
    return listDatasetRecords(this, datasetId, request)
  }

  /**
   * Fetches a record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   * @returns {ResponsePromise<import('./v1.js').DatasetRecordFetchResponse,never>}
   */
  fetch(datasetId, recordId) {
    return fetchDatasetRecord(this, datasetId, recordId)
  }

  /**
   * Creates a new record.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetRecordCreateRequest} request
   * @returns {Promise<import('./v1.js').DatasetRecordCreateResponse>}
   */
  create(datasetId, request) {
    return createDatasetRecord(this, datasetId, request)
  }

  /**
   * Updates a record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   * @param {import('./v1.js').DatasetRecordUpdateRequest} request
   * @returns {Promise<import('./v1.js').DatasetRecordUpdateResponse>}
   */
  update(datasetId, recordId, request) {
    return updateDatasetRecord(this, datasetId, recordId, request)
  }

  /**
   * Deletes the record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   * @returns {Promise<import('./v1.js').DatasetRecordDeleteResponse>}
   */
  delete(datasetId, recordId) {
    return deleteDatasetRecord(this, datasetId, recordId)
  }

  /**
   * Exports records.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetRecordExportRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').DatasetRecordExportResponse,import('./v1.js').DatasetRecordExportStreamType>}
   */
  export(datasetId, request) {
    return exportDatasetRecords(this, datasetId, request)
  }
}

export default DatasetRecordClient
