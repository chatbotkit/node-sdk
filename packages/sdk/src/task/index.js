import { ChatBotKitClient } from '../client.js'
import {
  createTask,
  deleteTask,
  fetchTask,
  listTasks,
  updateTask,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Task client.
 */
export class TaskClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all tasks.
   *
   * @param {import('./v1.js').TaskListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TaskListResponse,import('./v1.js').TaskListStreamType>}
   */
  list(request) {
    return listTasks(this, request)
  }

  /**
   * Fetches a task.
   *
   * @param {string} taskId
   * @returns {Promise<import('./v1.js').TaskFetchResponse>}
   */
  fetch(taskId) {
    return fetchTask(this, taskId)
  }

  /**
   * Creates a new task.
   *
   * @param {import('./v1.js').TaskCreateRequest} request
   * @returns {Promise<import('./v1.js').TaskCreateResponse>}
   */
  create(request) {
    return createTask(this, request)
  }

  /**
   * Updates a task.
   *
   * @param {string} taskId
   * @param {import('./v1.js').TaskUpdateRequest} request
   * @returns {Promise<import('./v1.js').TaskUpdateResponse>}
   */
  update(taskId, request) {
    return updateTask(this, taskId, request)
  }

  /**
   * Deletes the task.
   *
   * @param {string} taskId
   * @returns {Promise<import('./v1.js').TaskDeleteResponse>}
   */
  delete(taskId) {
    return deleteTask(this, taskId)
  }
}

export default TaskClient
