import { ChatBotKitClient } from '../client.js'
import { fetchReport, fetchTypedReport } from './v1.js'

/**
 * Report client.
 */
export class ReportClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Generates a report.
   *
   * @param {string} reportId
   * @param {import('./v1.js').ReportFetchRequest} request
   * @returns {Promise<import('./v1.js').ReportFetchResponse>}
   */
  fetch(reportId, request) {
    return fetchReport(this, reportId, request)
  }

  /**
   * Generates a typed report with full type safety for input and output.
   *
   * @template {import('./v1.js').ReportId} T
   * @param {T} reportId - The report ID
   * @param {import('./v1.js').ReportInputTypes[T]} request - The report input
   * @returns {Promise<import('./v1.js').ReportOutputTypes[T]>}
   */
  fetchTyped(reportId, request) {
    return fetchTypedReport(this, reportId, request)
  }
}

export default ReportClient
