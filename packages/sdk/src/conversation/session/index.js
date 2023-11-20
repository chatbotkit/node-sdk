import { createConversationSession } from './v1.js'
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
   * @param {import('./v1.js').ConversationSessionCreateRequest} request
   * @returns {Promise<import('./v1.js').ConversationSessionCreateResponse>}
   */
  create(conversationId, request) {
    return createConversationSession(this, conversationId, request)
  }
}

export default SessionClient
