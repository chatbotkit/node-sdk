import { ChatBotKitClient } from '../../client.js'
import {
  messageList,
  messageFetch,
  messageCreate,
  messageUpdate,
  messageDelete,
} from './v1.js'

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
   */
  list(conversationId) {
    return messageList(this, conversationId)
  }

  /**
   * Fetches a message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   */
  fetch(conversationId, messageId) {
    return messageFetch(this, conversationId, messageId)
  }

  /**
   * Creates a new message.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').MessageCreateRequest} request
   */
  create(conversationId, request) {
    return messageCreate(this, conversationId, request)
  }

  /**
   * Updates a new message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   * @param {import('./v1.js').MessageUpdateRequest} request
   */
  update(conversationId, messageId, request) {
    return messageUpdate(this, conversationId, messageId, request)
  }

  /**
   * Deletes the message.
   *
   * @param {string} conversationId
   * @param {string} messageId
   */
  delete(conversationId, messageId) {
    return messageDelete(this, conversationId, messageId)
  }
}

export default MessageClient
