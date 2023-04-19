import { ChatBotKitClient } from '../client.js'
import {
  conversationList,
  conversationFetch,
  conversationCreate,
  conversationUpdate,
  conversationDelete,
} from './v1.js'
import {
  conversationComplete,
  conversationSend,
  conversationReceive,
} from './v2.js'

export class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing conversations associated with this client.
   */
  list() {
    return conversationList(this)
  }

  /**
   * Fetches a conversation.
   *
   * @param {string} conversationId
   */
  fetch(conversationId) {
    return conversationFetch(this, conversationId)
  }

  /**
   * Creates a new conversation.
   *
   * @param {import('./v1.js').ConversationCreateRequest} request
   */
  create(request) {
    return conversationCreate(this, request)
  }

  /**
   * Updates a new conversation.
   *
   * @param {import('./v1.js').ConversationUpdateRequest} request
   */
  update(request) {
    return conversationUpdate(this, request)
  }

  /**
   * Deletes the conversation.
   *
   * @param {string} conversationId
   */
  delete(conversationId) {
    return conversationDelete(this, conversationId)
  }

  /**
   * Completes the next bot message in a stateless conversation.
   *
   * @param {import('./v2.js').ConversationCompleteRequest} request
   */
  complete(request) {
    return conversationComplete(this, request)
  }

  /**
   * Sends a message to the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v2.js').ConversationSendRequest} request
   */
  send(conversationId, request) {
    return conversationSend(this, conversationId, request)
  }

  /**
   * Receives a message from the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v2.js').ConversationReceiveRequest} request
   */
  receive(conversationId, request) {
    return conversationReceive(this, conversationId, request)
  }
}
