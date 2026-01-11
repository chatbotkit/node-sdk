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
 * }} EventLogListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listEventLogs']['responses']['200']['content']['application/json']} EventLogListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listEventLogs']['responses']['200']['content']['application/jsonl']} EventLogListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogListRequest} [request]
 * @returns {ResponsePromise<EventLogListResponse,EventLogListStreamType>}
 */
export function listEventLogs(client, request) {
  let url = `/api/v1/event/log/list`

  /** @type {ResponsePromise<EventLogListResponse,EventLogListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} EventLogExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportEventLogs']['responses']['200']['content']['application/json']} EventLogExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportEventLogs']['responses']['200']['content']['application/jsonl']} EventLogExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogExportRequest} [request]
 * @returns {ResponsePromise<EventLogExportResponse,EventLogExportStreamType>}
 */
export function exportEventLogs(client, request) {
  let url = `/api/v1/event/log/export`

  /** @type {ResponsePromise<EventLogExportResponse,EventLogExportStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['subscribeEventLogs']['requestBody']['content']['application/json']} EventLogSubscribeRequestBody
 *
 * @typedef {EventLogSubscribeRequestBody} EventLogSubscribeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['subscribeEventLogs']['responses']['200']['content']['application/jsonl']} EventLogSubscribeStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EventLogSubscribeRequest} [request]
 * @returns {ResponsePromise<never,EventLogSubscribeStreamType>}
 */
export function subscribeEventLogs(client, request) {
  let url = `/api/v1/event/log/subscribe`

  /** @type {ResponsePromise<never,EventLogSubscribeStreamType>} */
  const response = client.clientFetch(url, {
    /** @type {EventLogSubscribeRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
