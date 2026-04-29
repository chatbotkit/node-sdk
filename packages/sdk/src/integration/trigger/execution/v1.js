/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TriggerIntegrationExecutionListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listTriggerIntegrationExecutions']['responses']['200']['content']['application/json']} TriggerIntegrationExecutionListResponse
 *
 * @typedef {import('../../../types/api/v1.js').operations['listTriggerIntegrationExecutions']['responses']['200']['content']['application/jsonl']} TriggerIntegrationExecutionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationExecutionListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationExecutionListResponse,TriggerIntegrationExecutionListStreamType>}
 */
export function listTriggerIntegrationExecutions(client, triggerId, request) {
  const url = `/api/v1/integration/trigger/${triggerId}/execution/list`

  /** @type {ResponsePromise<TriggerIntegrationExecutionListResponse,TriggerIntegrationExecutionListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['cancelTriggerIntegrationExecution']['requestBody']['content']['application/json']} TriggerIntegrationExecutionCancelRequestBody
 *
 * @typedef {TriggerIntegrationExecutionCancelRequestBody} TriggerIntegrationExecutionCancelRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['cancelTriggerIntegrationExecution']['responses']['200']['content']['application/json']} TriggerIntegrationExecutionCancelResponseBody
 *
 * @typedef {TriggerIntegrationExecutionCancelResponseBody} TriggerIntegrationExecutionCancelResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {string} triggerExecutionId
 * @returns {Promise<TriggerIntegrationExecutionCancelResponse>}
 */
export async function cancelTriggerIntegrationExecution(
  client,
  triggerId,
  triggerExecutionId
) {
  const url = `/api/v1/integration/trigger/${triggerId}/execution/${triggerExecutionId}/cancel`

  /** @type {TriggerIntegrationExecutionCancelResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationExecutionCancelRequestBody} */
    record: {},
  })

  return response
}
