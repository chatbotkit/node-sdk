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
 * }} TaskListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/json']} TaskListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/jsonl']} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/task/list`

  /** @type {ResponsePromise<TaskListResponse,TaskListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
