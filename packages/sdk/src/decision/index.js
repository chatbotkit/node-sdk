import { ChatBotKitClient } from '../client.js'
import { createDecision } from './v1.js'

/**
 * Decision client.
 */
export class DecisionClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Answers typed questions about a state.
   *
   * @param {import('./v1.js').DecisionCreateRequest} request
   * @returns {Promise<import('./v1.js').DecisionCreateResponse>}
   */
  create(request) {
    return createDecision(this, request)
  }
}

export default DecisionClient
