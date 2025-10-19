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
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string
 *   meta?: Record<string,any>
 * }} TaskOptions
 *
 * @typedef {TaskOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TaskInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskListRequest
 *
 * @typedef {{items: TaskInstance[]}} TaskListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TaskInstance
 * }} TaskListStreamItemType
 *
 * @typedef {TaskListStreamItemType} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/task/list`

  /** @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listContactTasks']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
