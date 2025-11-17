import { ChatBotKitClient } from '../client.js'
import { fetchReport, listReports } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

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
   * Retrieves a list of all available reports.
   *
   * @param {import('./v1.js').ReportListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ReportListResponse,import('./v1.js').ReportListStreamType>}
   */
  list(request) {
    return listReports(this, request)
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
}

export default ReportClient
