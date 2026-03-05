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

/**
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReport']['requestBody']['content']['application/json']} PlatformReportGenerateRequestBody
 *
 * @typedef {PlatformReportGenerateRequestBody} PlatformReportGenerateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReport']['responses']['200']['content']['application/json']} PlatformReportGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {PlatformReportGenerateRequest} request
 * @returns {Promise<PlatformReportGenerateResponse>}
 */
export async function generatePlatformReport(client, reportId, request) {
  const url = `/api/v1/platform/report/${reportId}/generate`

  /** @type {PlatformReportGenerateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformReportGenerateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/report.js').ReportId} ReportId
 * @typedef {import('../../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../../types/report.js').ReportOutputTypes} ReportOutputTypes
 */

/**
 * Generate a typed platform report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export async function generateTypedPlatformReport(client, reportId, request) {
  const url = `/api/v1/platform/report/${reportId}/generate`

  const response = await client.clientFetch(url, {
    /** @type {PlatformReportGenerateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReports']['requestBody']['content']['application/json']} PlatformReportsGenerateRequestBody
 *
 * @typedef {PlatformReportsGenerateRequestBody} PlatformReportsGenerateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['generatePlatformReports']['responses']['200']['content']['application/json']} PlatformReportsGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformReportsGenerateRequest} request
 * @returns {Promise<PlatformReportsGenerateResponse>}
 */
export async function generatePlatformReports(client, request) {
  const url = `/api/v1/platform/report/generate`

  /** @type {PlatformReportsGenerateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformReportsGenerateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
