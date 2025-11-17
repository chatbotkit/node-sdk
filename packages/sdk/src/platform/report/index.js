import { ChatBotKitClient } from '../../client.js'
import { listPlatformReports } from './v1.js'

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
}

export default PlatformReportClient
