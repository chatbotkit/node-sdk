import { ChatBotKitClient } from '../client.js'
import { UsageSeriesClient } from './series/index.js'
import { fetchUsage } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class UsageClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {UsageSeriesClient} series client
     */
    this.series = new UsageSeriesClient(options)
  }

  /**
   * Fetches usage.
   *
   * @returns {ResponsePromise<import('./v1.js').UsageFetchResponse,never>}
   */
  fetch() {
    return fetchUsage(this)
  }
}

export default UsageClient
