import { ChatBotKitClient } from '../../client.js'
import {
  createTelegramIntegration,
  deleteTelegramIntegration,
  fetchTelegramIntegration,
  listTelegramIntegrations,
  setupTelegramIntegration,
  updateTelegramIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class TelegramIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all telegram integrations.
   *
   * @param {import('./v1.js').TelegramIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TelegramIntegrationListResponse,import('./v1.js').TelegramIntegrationListStreamType>}
   */
  list(request) {
    return listTelegramIntegrations(this, request)
  }

  /**
   * Fetches a telegram integration.
   *
   * @param {string} telegramId
   * @returns {Promise<import('./v1.js').TelegramIntegrationFetchResponse>}
   */
  fetch(telegramId) {
    return fetchTelegramIntegration(this, telegramId)
  }

  /**
   * Creates a new telegram integration.
   *
   * @param {import('./v1.js').TelegramIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').TelegramIntegrationCreateResponse>}
   */
  create(request) {
    return createTelegramIntegration(this, request)
  }

  /**
   * Updates a telegram integration.
   *
   * @param {string} telegramId
   * @param {import('./v1.js').TelegramIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').TelegramIntegrationUpdateResponse>}
   */
  update(telegramId, request) {
    return updateTelegramIntegration(this, telegramId, request)
  }

  /**
   * Deletes a telegram integration.
   *
   * @param {string} telegramId
   * @returns {Promise<import('./v1.js').TelegramIntegrationDeleteResponse>}
   */
  delete(telegramId) {
    return deleteTelegramIntegration(this, telegramId)
  }

  /**
   * Setups a telegram integration.
   *
   * @param {string} telegramId
   * @returns {Promise<import('./v1.js').TelegramIntegrationSetupResponse>}
   */
  setup(telegramId) {
    return setupTelegramIntegration(this, telegramId)
  }
}

export default TelegramIntegrationClient
