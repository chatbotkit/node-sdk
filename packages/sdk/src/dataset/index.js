import { ChatBotKitClient } from '../client.js'
import { DatasetFileClient } from './file/index.js'
import { DatasetRecordClient } from './record/index.js'
import {
  createDataset,
  deleteDataset,
  fetchDataset,
  listDatasets,
  searchDataset,
  updateDataset,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Dataset client.
 */
export class DatasetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {DatasetFileClient} file client
     */
    this.file = new DatasetFileClient(options)

    /**
     * @type {DatasetRecordClient} record client
     */
    this.record = new DatasetRecordClient(options)
  }

  /**
   * Retrieves a list of all datasets.
   *
   * @param {import('./v1.js').DatasetListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').DatasetListResponse,import('./v1.js').DatasetListStreamType>}
   */
  list(request) {
    return listDatasets(this, request)
  }

  /**
   * Fetches a dataset.
   *
   * @param {string} datasetId
   * @returns {Promise<import('./v1.js').DatasetFetchResponse>}
   */
  fetch(datasetId) {
    return fetchDataset(this, datasetId)
  }

  /**
   * Creates a new dataset.
   *
   * @param {import('./v1.js').DatasetCreateRequest} request
   * @returns {Promise<import('./v1.js').DatasetCreateResponse>}
   */
  create(request) {
    return createDataset(this, request)
  }

  /**
   * Updates a dataset.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetUpdateRequest} request
   * @returns {Promise<import('./v1.js').DatasetUpdateResponse>}
   */
  update(datasetId, request) {
    return updateDataset(this, datasetId, request)
  }

  /**
   * Deletes the dataset.
   *
   * @param {string} datasetId
   * @returns {Promise<import('./v1.js').DatasetDeleteResponse>}
   */
  delete(datasetId) {
    return deleteDataset(this, datasetId)
  }

  /**
   * Searches the dataset.
   *
   * @param {string} datasetId
   * @param {string} search
   * @returns {Promise<import('./v1.js').DatasetSearchResponse>}
   */
  search(datasetId, search) {
    return searchDataset(this, datasetId, search)
  }
}

export default DatasetClient
