import { ChatBotKitClient } from '../../client.js'
import {
  listConversationMessages,
  fetchConversationMessage,
  createConversationMessage,
  updateConversationMessage,
  deleteConversationMessage,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class MessageClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing messages associated with this client.
   *
   * @param {string} conversationId
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').ConversationMessageListResponse,import('./v1.js').ConversationMessageListStreamType>}
   */
  list(conversationId, query) {
    return listConversationMessages(this, conversationId, query)
  }

  /**
   * Fetches a message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   * @returns {Promise<import('./v1.js').ConversationMessageFetchResponse>}
   */
  fetch(conversationId, messageId) {
    return fetchConversationMessage(this, conversationId, messageId)
  }

  /**
   * Creates a new message.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationMessageCreateRequest} request
   * @returns {Promise<import('./v1.js').ConversationMessageCreateResponse>}
   */
  create(conversationId, request) {
    return createConversationMessage(this, conversationId, request)
  }

  /**
   * Updates a message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   * @param {import('./v1.js').ConversationMessageUpdateRequest} request
   * @returns {Promise<import('./v1.js').ConversationMessageUpdateResponse>}
   */
  update(conversationId, messageId, request) {
    return updateConversationMessage(this, conversationId, messageId, request)
  }

  /**
   * Deletes the message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   * @returns {Promise<import('./v1.js').ConversationMessageDeleteResponse>}
   */
  delete(conversationId, messageId) {
    return deleteConversationMessage(this, conversationId, messageId)
  }
}

export default MessageClient
