/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
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
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} TaskListRequest
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
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client, request) {
  let url = `/api/v1/task/list`

  /** @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {TaskInstance & {
 * }} TaskFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {ResponsePromise<TaskFetchResponse,never>}
 */
export function fetchTask(client, taskId) {
  const url = `/api/v1/task/${taskId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchTask']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {TaskOptions & {
 * }} TaskCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TaskCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TaskCreateRequest} request
 * @returns {Promise<TaskCreateResponse>}
 */
export async function createTask(client, request) {
  const url = `/api/v1/task/create`

  /** @type {import('../types/api/v1.js').operations['createTask']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createTask']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {TaskOptions & {
 * }} TaskUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TaskUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskUpdateRequest} request
 * @returns {Promise<TaskUpdateResponse>}
 */
export async function updateTask(client, taskId, request) {
  const url = `/api/v1/task/${taskId}/update`

  /** @type {import('../types/api/v1.js').operations['updateTask']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateTask']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TaskDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskDeleteResponse>}
 */
export async function deleteTask(client, taskId) {
  const url = `/api/v1/task/${taskId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteTask']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteTask']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
