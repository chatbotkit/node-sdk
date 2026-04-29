import { ChatBotKitClient } from '../../client.js'
import { cancelTaskExecution, listTaskExecutions } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Task execution client.
 */
export class TaskExecutionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all executions for a task.
   *
   * @param {string} taskId
   * @param {import('./v1.js').TaskExecutionListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TaskExecutionListResponse,import('./v1.js').TaskExecutionListStreamType>}
   */
  list(taskId, request) {
    return listTaskExecutions(this, taskId, request)
  }

  /**
   * Cancels a task execution.
   *
   * @param {string} taskId
   * @param {string} taskExecutionId
   * @returns {Promise<import('./v1.js').TaskExecutionCancelResponse>}
   */
  cancel(taskId, taskExecutionId) {
    return cancelTaskExecution(this, taskId, taskExecutionId)
  }
}

export default TaskExecutionClient
