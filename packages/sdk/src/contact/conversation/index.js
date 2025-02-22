import { ChatBotKitClient } from '../../client.js'
import { listConversations } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Contact conversation client.
 */
export class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all contact conversations.
   *
   * @param {string} contactId
   * @param {import('./v1.js').ConversationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
   */
  list(contactId, request) {
    return listConversations(this, contactId, request)
  }
}

export default ConversationClient
