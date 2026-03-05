import { ChatBotKitClient } from '../../client.js'
import {
  createTeamsIntegration,
  deleteTeamsIntegration,
  fetchTeamsIntegration,
  listTeamsIntegrations,
  setupTeamsIntegration,
  updateTeamsIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class TeamsIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all teams integrations.
   *
   * @param {import('./v1.js').TeamsIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TeamsIntegrationListResponse,import('./v1.js').TeamsIntegrationListStreamType>}
   */
  list(request) {
    return listTeamsIntegrations(this, request)
  }

  /**
   * Fetches a teams integration.
   *
   * @param {string} teamsId
   * @returns {ResponsePromise<import('./v1.js').TeamsIntegrationFetchResponse,never>}
   */
  fetch(teamsId) {
    return fetchTeamsIntegration(this, teamsId)
  }

  /**
   * Creates a new teams integration.
   *
   * @param {import('./v1.js').TeamsIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').TeamsIntegrationCreateResponse>}
   */
  create(request) {
    return createTeamsIntegration(this, request)
  }

  /**
   * Updates a teams integration.
   *
   * @param {string} teamsId
   * @param {import('./v1.js').TeamsIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').TeamsIntegrationUpdateResponse>}
   */
  update(teamsId, request) {
    return updateTeamsIntegration(this, teamsId, request)
  }

  /**
   * Deletes a teams integration.
   *
   * @param {string} teamsId
   * @returns {Promise<import('./v1.js').TeamsIntegrationDeleteResponse>}
   */
  delete(teamsId) {
    return deleteTeamsIntegration(this, teamsId)
  }

  /**
   * Setups a teams integration.
   *
   * @param {string} teamsId
   * @returns {Promise<import('./v1.js').TeamsIntegrationSetupResponse>}
   */
  setup(teamsId) {
    return setupTeamsIntegration(this, teamsId)
  }
}

export default TeamsIntegrationClient
