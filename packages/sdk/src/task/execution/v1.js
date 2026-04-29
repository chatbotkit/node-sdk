/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskExecutionListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTaskExecutions']['responses']['200']['content']['application/json']} TaskExecutionListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTaskExecutions']['responses']['200']['content']['application/jsonl']} TaskExecutionListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskExecutionListRequest} [request]
 * @returns {ResponsePromise<TaskExecutionListResponse,TaskExecutionListStreamType>}
 */
export function listTaskExecutions(client, taskId, request) {
  const url = `/api/v1/task/${taskId}/execution/list`

  /** @type {ResponsePromise<TaskExecutionListResponse,TaskExecutionListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['cancelTaskExecution']['requestBody']['content']['application/json']} TaskExecutionCancelRequestBody
 *
 * @typedef {TaskExecutionCancelRequestBody} TaskExecutionCancelRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['cancelTaskExecution']['responses']['200']['content']['application/json']} TaskExecutionCancelResponseBody
 *
 * @typedef {TaskExecutionCancelResponseBody} TaskExecutionCancelResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {string} taskExecutionId
 * @returns {Promise<TaskExecutionCancelResponse>}
 */
export async function cancelTaskExecution(client, taskId, taskExecutionId) {
  const url = `/api/v1/task/${taskId}/execution/${taskExecutionId}/cancel`

  /** @type {TaskExecutionCancelResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TaskExecutionCancelRequestBody} */
    record: {},
  })

  return response
}
