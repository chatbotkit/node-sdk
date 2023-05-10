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

export class DatasetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.record = new RecordClient(options)
  }

  /**
   * Retrieves a list of all existing datasets associated with this client.
   */
  list() {
    return datasetList(this)
  }

  /**
   * Fetches a dataset.
   *
   * @param {string} datasetId
   */
  fetch(datasetId) {
    return datasetFetch(this, datasetId)
  }

  /**
   * Creates a new dataset.
   *
   * @param {import('./v1.js').DatasetCreateRequest} request
   */
  create(request) {
    return datasetCreate(this, request)
  }

  /**
   * Updates a new dataset.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').DatasetUpdateRequest} request
   */
  update(datasetId, request) {
    return datasetUpdate(this, datasetId, request)
  }

  /**
   * Deletes the dataset.
   *
   * @param {string} datasetId
   */
  delete(datasetId) {
    return datasetDelete(this, datasetId)
  }

  /**
   * Searches the dataset.
   *
   * @param {string} datasetId
   * @param {string} search
   */
  search(datasetId, search) {
    return datasetSearch(this, datasetId, search)
  }
}

export default DatasetClient
