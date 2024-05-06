import { ChatBotKitClient } from '../../client.js'
import { fetchUsageSeries } from './v1.js'

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
   * @returns {Promise<import('./v1.js').UsageSeriesFetchResponse>}
   */
  fetch() {
    return fetchUsageSeries(this)
  }
}

export default UsageSeriesClient
