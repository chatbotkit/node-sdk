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
   * @param {import('./lib.js').ConversationCompleteRequest} request
   */
  complete(request) {
    return conversationComplete(this, request)
  }

  /**
   */
  list() {
    return conversationList(this)
  }

  /**
   * @param {import('./lib.js').ConversationCreateRequest} request
   */
  create(request) {
    return conversationCreate(this, request)
  }

  /**
   * @param {string} conversationId
   */
  fetch(conversationId) {
    return conversationFetch(this, conversationId)
  }

  /**
   * @param {string} conversationId
   * @param {import('./lib.js').ConversationSendRequest} request
   */
  send(conversationId, request) {
    return conversationSend(this, conversationId, request)
  }

  /**
   * @param {string} conversationId
   * @param {import('./lib.js').ConversationReceiveRequest} request
   */
  receive(conversationId, request) {
    return conversationReceive(this, conversationId, request)
  }

  /**
   * @param {string} conversationId
   */
  delete(conversationId) {
    return conversationDelete(this, conversationId)
  }
}
