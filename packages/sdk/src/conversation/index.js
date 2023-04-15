import { ChatBotKitClient } from '../client.js'
import {
  conversationComplete,
  conversationList,
  conversationCreate,
  conversationFetch,
  conversationSend,
  conversationReceive,
  conversationDelete,
} from './lib.js'

export class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Completes the next bot message in a stateless conversation.
   *
   * @param {import('./lib.js').ConversationCompleteRequest} request
   */
  complete(request) {
    return conversationComplete(this, request)
  }

  /**
   * Retrieves a list of all existing conversations associated with this client.
   */
  list() {
    return conversationList(this)
  }

  /**
   * Creates a new conversation.
   *
   * @param {import('./lib.js').ConversationCreateRequest} request
   */
  create(request) {
    return conversationCreate(this, request)
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
   * Sends a message to the conversation.
   *
   * @param {string} conversationId
   * @param {import('./lib.js').ConversationSendRequest} request
   */
  send(conversationId, request) {
    return conversationSend(this, conversationId, request)
  }

  /**
   * Receives a message from the conversation.
   *
   * @param {string} conversationId
   * @param {import('./lib.js').ConversationReceiveRequest} request
   */
  receive(conversationId, request) {
    return conversationReceive(this, conversationId, request)
  }

  /**
   * Deletes the conversation.
   *
   * @param {string} conversationId
   */
  delete(conversationId) {
    return conversationDelete(this, conversationId)
  }
}
