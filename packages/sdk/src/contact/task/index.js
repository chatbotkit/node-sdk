import { ChatBotKitClient } from '../../client.js'
import { deleteTask, listTasks } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Contact task client.
 */
export class TaskClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all contact tasks.
   *
   * @param {string} contactId
   * @param {import('./v1.js').TaskListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TaskListResponse,import('./v1.js').TaskListStreamType>}
   */
  list(contactId, request) {
    return listTasks(this, contactId, request)
  }

  /**
   * Deletes the contact task.
   *
   * @param {string} contactId
   * @param {string} taskId
   * @returns {Promise<import('./v1.js').TaskDeleteResponse>}
   */
  delete(contactId, taskId) {
    return deleteTask(this, contactId, taskId)
  }
}

export default TaskClient
