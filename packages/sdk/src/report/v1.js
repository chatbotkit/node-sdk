/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {import('../types/api/v1.js').operations['generateReport']['requestBody']['content']['application/json']} ReportGenerateRequestBody
 *
 * @typedef {ReportGenerateRequestBody} ReportGenerateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['generateReport']['responses']['200']['content']['application/json']} ReportGenerateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} reportId
 * @param {ReportGenerateRequest} request
 * @returns {Promise<ReportGenerateResponse>}
 */
export async function generateReport(client, reportId, request) {
  const url = `/api/v1/report/${reportId}/generate`

  /** @type {ReportGenerateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ReportGenerateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/report.js').ReportId} ReportId
 * @typedef {import('../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../types/report.js').ReportOutputTypes} ReportOutputTypes
 */

/**
 * Generate a typed report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export async function generateTypedReport(client, reportId, request) {
  const url = `/api/v1/report/${reportId}/generate`

  const response = await client.clientFetch(url, {
    /** @type {ReportGenerateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
