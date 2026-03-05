import { ChatBotKitClient } from '../../client.js'
import {
  generatePlatformReport,
  generatePlatformReports,
  generateTypedPlatformReport,
  listPlatformReports,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform Report client.
 */
export class PlatformReportClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all available reports.
   *
   * @param {import('./v1.js').PlatformReportListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformReportListResponse,import('./v1.js').PlatformReportListStreamType>}
   */
  list(request) {
    return listPlatformReports(this, request)
  }

  /**
   * Generates a specific report.
   *
   * @param {string} reportId
   * @param {import('./v1.js').PlatformReportGenerateRequest} request
   * @returns {Promise<import('./v1.js').PlatformReportGenerateResponse>}
   */
  generate(reportId, request) {
    return generatePlatformReport(this, reportId, request)
  }

  /**
   * Generates a typed report with full type safety for input and output.
   *
   * @template {import('./v1.js').ReportId} T
   * @param {T} reportId - The report ID
   * @param {import('./v1.js').ReportInputTypes[T]} request - The report input
   * @returns {Promise<import('./v1.js').ReportOutputTypes[T]>}
   */
  generateTyped(reportId, request) {
    return generateTypedPlatformReport(this, reportId, request)
  }

  /**
   * Generates multiple reports in a single request.
   *
   * @param {import('./v1.js').PlatformReportsGenerateRequest} request
   * @returns {Promise<import('./v1.js').PlatformReportsGenerateResponse>}
   */
  generateBatch(request) {
    return generatePlatformReports(this, request)
  }
}

export default PlatformReportClient
