import { ChatBotKitClient } from '../../client.js'
import { createConversationSession } from './v1.js'

/**
 * Conversation session client.
 */
export class ConversationSessionClient extends ChatBotKitClient {
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

export default ConversationSessionClient
