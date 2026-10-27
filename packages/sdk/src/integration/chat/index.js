import { ChatBotKitClient } from '../../client.js'
import {
  createChatIntegration,
  createChatIntegrationSession,
  deleteChatIntegration,
  fetchChatIntegration,
  initiateChat,
  listChatIntegrationGroups,
  listChatIntegrationMembers,
  listChatIntegrationMessages,
  listChatIntegrations,
  sendChatIntegrationMessage,
  setupChatIntegration,
  updateChatIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class ChatIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all Chat integrations.
   *
   * @param {import('./v1.js').ChatIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ChatIntegrationListResponse,import('./v1.js').ChatIntegrationListStreamType>}
   */
  list(request) {
    return listChatIntegrations(this, request)
  }

  /**
   * Fetches a Chat integration.
   *
   * @param {string} chatId
   * @returns {ResponsePromise<import('./v1.js').ChatIntegrationFetchResponse,never>}
   */
  fetch(chatId) {
    return fetchChatIntegration(this, chatId)
  }

  /**
   * Creates a new Chat integration.
   *
   * @param {import('./v1.js').ChatIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').ChatIntegrationCreateResponse>}
   */
  create(request) {
    return createChatIntegration(this, request)
  }

  /**
   * Updates a Chat integration.
   *
   * @param {string} chatId
   * @param {import('./v1.js').ChatIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').ChatIntegrationUpdateResponse>}
   */
  update(chatId, request) {
    return updateChatIntegration(this, chatId, request)
  }

  /**
   * Deletes a Chat integration.
   *
   * @param {string} chatId
   * @returns {Promise<import('./v1.js').ChatIntegrationDeleteResponse>}
   */
  delete(chatId) {
    return deleteChatIntegration(this, chatId)
  }

  /**
   * Setups a Chat integration.
   *
   * @param {string} chatId
   * @returns {Promise<import('./v1.js').ChatIntegrationSetupResponse>}
   */
  setup(chatId) {
    return setupChatIntegration(this, chatId)
  }

  /**
   * Lets the agent of a Chat integration start a message to a group or to
   * another handle of its server.
   *
   * @param {string} chatId
   * @param {import('./v1.js').ChatInitiateRequest} request
   * @returns {Promise<import('./v1.js').ChatInitiateResponse>}
   */
  initiate(chatId, request) {
    return initiateChat(this, chatId, request)
  }

  /**
   * Lists the other members of a Chat integration's server.
   *
   * @param {string} chatId
   * @returns {ResponsePromise<import('./v1.js').ChatIntegrationMemberListResponse,never>}
   */
  listMembers(chatId) {
    return listChatIntegrationMembers(this, chatId)
  }

  /**
   * Lists the groups of a Chat integration's server.
   *
   * @param {string} chatId
   * @returns {ResponsePromise<import('./v1.js').ChatIntegrationGroupListResponse,never>}
   */
  listGroups(chatId) {
    return listChatIntegrationGroups(this, chatId)
  }

  /**
   * Creates a short-lived chat session for a contact and the destinations it
   * may send to and list.
   *
   * @param {string} chatId
   * @param {import('./v1.js').ChatIntegrationSessionCreateRequest} request
   * @returns {Promise<import('./v1.js').ChatIntegrationSessionCreateResponse>}
   */
  createSession(chatId, request) {
    return createChatIntegrationSession(this, chatId, request)
  }

  /**
   * Sends a message from a contact to a #group or an @handle.
   *
   * @param {string} chatId
   * @param {import('./v1.js').ChatIntegrationMessageSendRequest} request
   * @returns {Promise<import('./v1.js').ChatIntegrationMessageSendResponse>}
   */
  sendMessage(chatId, request) {
    return sendChatIntegrationMessage(this, chatId, request)
  }

  /**
   * Lists the recent public messages of a group or a direct chat, after the
   * `since` cursor when given.
   *
   * @param {string} chatId
   * @param {import('./v1.js').ChatIntegrationMessageListRequest} request
   * @returns {ResponsePromise<import('./v1.js').ChatIntegrationMessageListResponse,never>}
   */
  listMessages(chatId, request) {
    return listChatIntegrationMessages(this, chatId, request)
  }
}

export default ChatIntegrationClient
