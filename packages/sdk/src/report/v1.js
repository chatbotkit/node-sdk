/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

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

/**
 * @typedef {import('../types/report.js').ReportId} ReportId
 * @typedef {import('../types/report.js').ReportInputTypes} ReportInputTypes
 * @typedef {import('../types/report.js').ReportOutputTypes} ReportOutputTypes
 */

/**
 * Fetch a typed report with input and output type safety
 *
 * @template {ReportId} T
 * @param {ChatBotKitClient} client
 * @param {T} reportId - The report ID
 * @param {ReportInputTypes[T]} request - The report input
 * @returns {Promise<ReportOutputTypes[T]>}
 */
export async function fetchTypedReport(client, reportId, request) {
  const url = `/api/v1/report/${reportId}/fetch`

  const response = await client.clientFetch(url, {
    /** @type {ReportFetchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
