import { ChatBotKitClient } from '../client.js'
import { call } from './v1.js'

/**
 * GraphQL client.
 */
export class GraphqlClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Executes a GraphQL query.
   *
   * @param {import('./v1.js').GraphqlRequest} input
   * @returns {Promise<import('./v1.js').GraphqlResponse>}
   */
  call(input) {
    return call(this, input)
  }
}

export default GraphqlClient
