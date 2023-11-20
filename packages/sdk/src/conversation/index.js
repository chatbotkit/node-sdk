import { ChatBotKitClient } from '../client.js'
import { ConversationMessageClient } from './message/index.js'
import { ConversationSessionClient } from './session/index.js'
import {
  listConversations,
  fetchConversation,
  createConversation,
  updateConversation,
  deleteConversation,
  completeConversation,
  completeConversationMessage,
  sendConversationMessage,
  receiveConversationMessage,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.message = new ConversationMessageClient(options)
    this.session = new ConversationSessionClient(options)
  }

  /**
   * Retrieves a list of all existing conversations associated with this client.
   *
   * @param {import('./v1.js').ConversationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
   */
  list(request) {
    return listConversations(this, request)
  }

  /**
   * Fetches a conversation.
   *
   * @param {string} conversationId
   * @returns {Promise<import('./v1.js').ConversationFetchResponse>}
   */
  fetch(conversationId) {
    return fetchConversation(this, conversationId)
  }

  /**
   * Creates a new conversation.
   *
   * @param {import('./v1.js').ConversationCreateRequest} request
   * @returns {Promise<import('./v1.js').ConversationCreateResponse>}
   */
  create(request) {
    return createConversation(this, request)
  }

  /**
   * Updates a conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationUpdateRequest} request
   * @returns {Promise<import('./v1.js').ConversationUpdateResponse>}
   */
  update(conversationId, request) {
    return updateConversation(this, conversationId, request)
  }

  /**
   * Deletes the conversation.
   *
   * @param {string} conversationId
   * @returns {Promise<import('./v1.js').ConversationDeleteResponse>}
   */
  delete(conversationId) {
    return deleteConversation(this, conversationId)
  }

  /**
   * Completes the next bot message in a stateless conversation.
   *
   * @overload
   * @param {null} conversationId
   * @param {import('./v1.js').ConversationCompleteRequest} request
   * @returns {ResponsePromise<import('./v1.js').ConversationCompleteResponse,import('./v1.js').ConversationCompleteStreamType>}
   *
   * @overload
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationCompleteMessageRequest} request
   * @returns {ResponsePromise<import('./v1.js').ConversationCompleteMessageResponse,import('./v1.js').ConversationCompleteMessageStreamType>}
   *
   * @param {null|string} conversationId
   * @param {import('./v1.js').ConversationCompleteRequest|import('./v1.js').ConversationCompleteMessageRequest} request
   */
  complete(conversationId, request) {
    if (!conversationId) {
      return completeConversation(
        this,
        /** @type {import('./v1.js').ConversationCompleteRequest} */ (request)
      )
    } else {
      return completeConversationMessage(
        this,
        conversationId,
        /** @type {import('./v1.js').ConversationCompleteMessageRequest} */ (
          request
        )
      )
    }
  }

  /**
   * Sends a message to the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationSendMessageRequest} request
   */
  send(conversationId, request) {
    return sendConversationMessage(this, conversationId, request)
  }

  /**
   * Receives a message from the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationReceiveMessageRequest} request
   */
  receive(conversationId, request) {
    return receiveConversationMessage(this, conversationId, request)
  }
}

export default ConversationClient
