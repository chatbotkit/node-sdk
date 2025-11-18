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
 * }} PlatformReportListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformReports']['responses']['200']['content']['application/json']} PlatformReportListResponse
 *
 * @typedef {PlatformReportListResponse['items'][number]} PlatformReportListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformReports']['responses']['200']['content']['application/jsonl']} PlatformReportListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformReportListRequest} [request]
 * @returns {ResponsePromise<PlatformReportListResponse,PlatformReportListStreamType>}
 */
export function listPlatformReports(client, request) {
  let url = `/api/v1/platform/report/list`

  /** @type {ResponsePromise<PlatformReportListResponse,PlatformReportListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
