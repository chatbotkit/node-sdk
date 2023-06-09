import { ChatBotKitClient } from '../client.js'
import { MessageClient } from './message/index.js'
import { SessionClient } from './session/index.js'
import {
  conversationList,
  conversationFetch,
  conversationCreate,
  conversationUpdate,
  conversationDelete,
  conversationComplete,
  conversationSend,
  conversationReceive,
} from './v1.js'

export class ConversationClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.message = new MessageClient(options)
    this.session = new SessionClient(options)
  }

  /**
   * Retrieves a list of all existing conversations associated with this client.
   * @returns {import('../client.js').ResponsePromise<import('./v1.js').ConversationListResponse,import('./v1.js').ConversationListStreamType>}
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
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationUpdateRequest} request
   */
  update(conversationId, request) {
    return conversationUpdate(this, conversationId, request)
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
   * @param {string?} conversationId
   * @param {import('./v1.js').ConversationCompleteRequest} request
   * @param {import('./v1.js').ConversationCompleteRequest} request
   */
  complete(conversationId, request) {
    return conversationComplete(this, conversationId, request)
  }

  /**
   * Sends a message to the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationSendRequest} request
   */
  send(conversationId, request) {
    return conversationSend(this, conversationId, request)
  }

  /**
   * Receives a message from the conversation.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationReceiveRequest} request
   */
  receive(conversationId, request) {
    return conversationReceive(this, conversationId, request)
  }
}

export default ConversationClient
