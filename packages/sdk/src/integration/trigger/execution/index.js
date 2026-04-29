import { ChatBotKitClient } from '../../../client.js'
import {
  cancelTriggerIntegrationExecution,
  listTriggerIntegrationExecutions,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Trigger integration execution client.
 */
export class TriggerIntegrationExecutionClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all executions for a trigger integration.
   *
   * @param {string} triggerId
   * @param {import('./v1.js').TriggerIntegrationExecutionListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TriggerIntegrationExecutionListResponse,import('./v1.js').TriggerIntegrationExecutionListStreamType>}
   */
  list(triggerId, request) {
    return listTriggerIntegrationExecutions(this, triggerId, request)
  }

  /**
   * Cancels a trigger integration execution.
   *
   * @param {string} triggerId
   * @param {string} triggerExecutionId
   * @returns {Promise<import('./v1.js').TriggerIntegrationExecutionCancelResponse>}
   */
  cancel(triggerId, triggerExecutionId) {
    return cancelTriggerIntegrationExecution(
      this,
      triggerId,
      triggerExecutionId
    )
  }
}

export default TriggerIntegrationExecutionClient
