import { sessionCreate } from './v1.js'
import { ChatBotKitClient } from '../../client.js'

export class SessionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Creates a new session.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').SessionCreateRequest} request
   * @returns {Promise<import('./v1.js').SessionCreateResponse>}
   */
  create(conversationId, request) {
    return sessionCreate(this, conversationId, request)
  }
}

export default SessionClient
