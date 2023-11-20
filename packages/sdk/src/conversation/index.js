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
  sendToConversation,
  receiveFromConversation,
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
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
   */
  list(query) {
    return listConversations(this, query)
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
   * @param {string?} conversationId
   * @param {import('./v1.js').ConversationCompleteRequest} request
   * @param {import('./v1.js').ConversationCompleteRequest} request
   */
  complete(conversationId, request) {
    return completeConversation(this, conversationId, request)
  }

  /**
   * Sends a message to the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationSendRequest} request
   */
  send(conversationId, request) {
    return sendToConversation(this, conversationId, request)
  }

  /**
   * Receives a message from the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationReceiveRequest} request
   */
  receive(conversationId, request) {
    return receiveFromConversation(this, conversationId, request)
  }
}

export default ConversationClient
