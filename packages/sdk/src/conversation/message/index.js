import { ChatBotKitClient } from '../../client.js'
import {
  createConversationMessage,
  deleteConversationMessage,
  downvoteConversationMessage,
  fetchConversationMessage,
  listConversationMessages,
  updateConversationMessage,
  upvoteConversationMessage,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Conversation message client.
 */
export class ConversationMessageClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all messages.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationMessageListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ConversationMessageListResponse,import('./v1.js').ConversationMessageListStreamType>}
   */
  list(conversationId, request) {
    return listConversationMessages(this, conversationId, request)
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

  /**
   * @param {string} conversationId
   * @param {string} messageId
   * @param {import('./v1.js').ConversationMessageUpvoteRequest} request
   * @returns {Promise<import('./v1.js').ConversationMessageUpvoteResponse>}
   */
  upvote(conversationId, messageId, request) {
    return upvoteConversationMessage(this, conversationId, messageId, request)
  }

  /**
   * @param {string} conversationId
   * @param {string} messageId
   * @param {import('./v1.js').ConversationMessageDownvoteRequest} request
   * @returns {Promise<import('./v1.js').ConversationMessageDownvoteResponse>}
   */
  downvote(conversationId, messageId, request) {
    return downvoteConversationMessage(this, conversationId, messageId, request)
  }
}

export default ConversationMessageClient
