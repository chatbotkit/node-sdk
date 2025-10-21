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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TaskListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/json']} TaskListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listTasks']['responses']['200']['content']['application/jsonl']} TaskListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskListRequest} [request]
 * @returns {ResponsePromise<TaskListResponse,TaskListStreamType>}
 */
export function listTasks(client, request) {
  let url = `/api/v1/task/list`

  /** @type {ResponsePromise<TaskListResponse,TaskListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchTask']['responses']['200']['content']['application/json']} TaskFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {ResponsePromise<TaskFetchResponse,never>}
 */
export function fetchTask(client, taskId) {
  const url = `/api/v1/task/${taskId}/fetch`

  /** @type {ResponsePromise<TaskFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TaskCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createTask']['requestBody']['content']['application/json']} TaskCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createTask']['responses']['200']['content']['application/json']} TaskCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TaskCreateRequest} request
 * @returns {Promise<TaskCreateResponse>}
 */
export async function createTask(client, request) {
  const url = `/api/v1/task/create`

  /** @type {TaskCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TaskCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   botId?: string,
 *   schedule?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TaskUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateTask']['requestBody']['content']['application/json']} TaskUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateTask']['responses']['200']['content']['application/json']} TaskUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @param {TaskUpdateRequest} request
 * @returns {Promise<TaskUpdateResponse>}
 */
export async function updateTask(client, taskId, request) {
  const url = `/api/v1/task/${taskId}/update`

  /** @type {TaskUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TaskUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteTask']['requestBody']['content']['application/json']} TaskDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteTask']['responses']['200']['content']['application/json']} TaskDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskDeleteResponse>}
 */
export async function deleteTask(client, taskId) {
  const url = `/api/v1/task/${taskId}/delete`

  /** @type {TaskDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TaskDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['triggerTask']['requestBody']['content']['application/json']} TaskTriggerRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['triggerTask']['responses']['200']['content']['application/json']} TaskTriggerResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} taskId
 * @returns {Promise<TaskTriggerResponse>}
 */
export async function triggerTask(client, taskId) {
  const url = `/api/v1/task/${taskId}/trigger`

  /** @type {TaskTriggerResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TaskTriggerRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number
 * }} TaskExportRequest
 *
 * @typedef {import('../types/api/v1.js').operations['exportTasks']['responses']['200']['content']['application/jsonl']} TaskExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TaskExportRequest} [request]
 * @returns {ResponsePromise<never,TaskExportStreamType>}
 */
export function exportTasks(client, request) {
  const url = `/api/v1/task/export`

  /** @type {ResponsePromise<never,TaskExportStreamType>} */
  const response = client.clientFetch(url, {
    query: request,
  })

  return response
}
