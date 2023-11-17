import { FileClient } from './file/index.js'
import { ChatBotKitClient } from '../client.js'
import { RecordClient } from './record/index.js'
import {
  datasetList,
  datasetFetch,
  datasetCreate,
  datasetUpdate,
  datasetDelete,
  datasetSearch,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class DatasetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.file = new FileClient(options)
    this.record = new RecordClient(options)
  }

  /**
   * Retrieves a list of all existing datasets associated with this client.
   *
   * @param {string} [cursor]
   * @returns {ResponsePromise<import('./v1.js').DatasetListResponse,import('./v1.js').DatasetListStreamType>}
   */
  list(cursor) {
    return datasetList(this, cursor)
  }

  /**
   * Fetches a dataset.
   *
   * @param {string} datasetId
   * @returns {Promise<import('./v1.js').DatasetFetchResponse>}
   */
  fetch(datasetId) {
    return datasetFetch(this, datasetId)
  }

  /**
   * Creates a new dataset.
   *
   * @param {import('./v1.js').DatasetCreateRequest} request
   * @returns {Promise<import('./v1.js').DatasetCreateResponse>}
   */
  create(request) {
    return datasetCreate(this, request)
  }

  /**
   * Updates a dataset.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetUpdateRequest} request
   * @returns {Promise<import('./v1.js').DatasetUpdateResponse>}
   */
  update(datasetId, request) {
    return datasetUpdate(this, datasetId, request)
  }

  /**
   * Deletes the dataset.
   *
   * @param {string} datasetId
   * @returns {Promise<import('./v1.js').DatasetDeleteResponse>}
   */
  delete(datasetId) {
    return datasetDelete(this, datasetId)
  }

  /**
   * Searches the dataset.
   *
   * @param {string} datasetId
   * @param {string} search
   * @returns {Promise<import('./v1.js').DatasetSearchResponse>}
   */
  search(datasetId, search) {
    return datasetSearch(this, datasetId, search)
  }
}

export default DatasetClient
