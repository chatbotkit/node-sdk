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
 * }} ReportListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listReports']['responses']['200']['content']['application/json']} ReportListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listReports']['responses']['200']['content']['application/jsonl']} ReportListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ReportListRequest} [request]
 * @returns {ResponsePromise<ReportListResponse,ReportListStreamType>}
 */
export function listReports(client, request) {
  let url = `/api/v1/report/list`

  /** @type {ResponsePromise<ReportListResponse,ReportListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchReport']['requestBody']['content']['application/json']} ReportFetchRequestBody
 *
 * @typedef {ReportFetchRequestBody} ReportFetchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['fetchReport']['responses']['200']['content']['application/json']} ReportFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {ReportFetchRequest} request
 * @returns {Promise<ReportFetchResponse>}
 */
export async function fetchReport(client, reportId, request) {
  const url = `/api/v1/report/${reportId}/fetch`

  /** @type {ReportFetchResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ReportFetchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
