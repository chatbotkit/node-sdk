import { ChatBotKitClient } from '../../client.js'
import {
  recordList,
  recordFetch,
  recordCreate,
  recordUpdate,
  recordDelete,
} from './v1.js'

export class RecordClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing records associated with this client.
   *
   * @param {string} datasetId
   */
  list(datasetId) {
    return recordList(this, datasetId)
  }

  /**
   * Fetches a record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   */
  fetch(datasetId, recordId) {
    return recordFetch(this, datasetId, recordId)
  }

  /**
   * Creates a new record.
   *
   * @param {string} datasetId
   * @param {import('./v1.js').RecordCreateRequest} request
   */
  create(datasetId, request) {
    return recordCreate(this, datasetId, request)
  }

  /**
   * Updates a new record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   * @param {import('./v1.js').RecordUpdateRequest} request
   */
  update(datasetId, recordId, request) {
    return recordUpdate(this, datasetId, recordId, request)
  }

  /**
   * Deletes the record.
   *
   * @param {string} datasetId
   * @param {string} recordId
   */
  delete(datasetId, recordId) {
    return recordDelete(this, datasetId, recordId)
  }
}

export default RecordClient
