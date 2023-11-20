import { fetchUsage } from './v1.js'
import { ChatBotKitClient } from '../client.js'

export class UsageClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Fetches usage.
   *
   * @returns {Promise<import('./v1.js').UsageFetchResponse>}
   */
  fetch() {
    return fetchUsage(this)
  }
}

export default UsageClient
