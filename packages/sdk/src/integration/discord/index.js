import { ChatBotKitClient } from '../../client.js'
import {
  createDiscordIntegration,
  deleteDiscordIntegration,
  fetchDiscordIntegration,
  listDiscordIntegrations,
  setupDiscordIntegration,
  updateDiscordIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class DiscordIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all discord integrations.
   *
   * @param {import('./v1.js').DiscordIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').DiscordIntegrationListResponse,import('./v1.js').DiscordIntegrationListStreamType>}
   */
  list(request) {
    return listDiscordIntegrations(this, request)
  }

  /**
   * Fetches a discord integration.
   *
   * @param {string} discordId
   * @returns {Promise<import('./v1.js').DiscordIntegrationFetchResponse>}
   */
  fetch(discordId) {
    return fetchDiscordIntegration(this, discordId)
  }

  /**
   * Creates a new discord integration.
   *
   * @param {import('./v1.js').DiscordIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').DiscordIntegrationCreateResponse>}
   */
  create(request) {
    return createDiscordIntegration(this, request)
  }

  /**
   * Updates a discord integration.
   *
   * @param {string} discordId
   * @param {import('./v1.js').DiscordIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').DiscordIntegrationUpdateResponse>}
   */
  update(discordId, request) {
    return updateDiscordIntegration(this, discordId, request)
  }

  /**
   * Deletes a discord integration.
   *
   * @param {string} discordId
   * @returns {Promise<import('./v1.js').DiscordIntegrationDeleteResponse>}
   */
  delete(discordId) {
    return deleteDiscordIntegration(this, discordId)
  }

  /**
   * Setups a discord integration.
   *
   * @param {string} discordId
   * @returns {Promise<import('./v1.js').DiscordIntegrationSetupResponse>}
   */
  setup(discordId) {
    return setupDiscordIntegration(this, discordId)
  }
}

export default DiscordIntegrationClient
