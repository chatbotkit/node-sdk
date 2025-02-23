import { ChatBotKitClient } from '../../client.js'
import { fetchUsageSeries } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class UsageSeriesClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Fetches usage.
   *
   * @returns {ResponsePromise<import('./v1.js').UsageSeriesFetchResponse,never>}
   */
  fetch() {
    return fetchUsageSeries(this)
  }
}

export default UsageSeriesClient
