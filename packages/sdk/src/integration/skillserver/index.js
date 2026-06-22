import { ChatBotKitClient } from '../../client.js'
import {
  createSkillServerIntegration,
  deleteSkillServerIntegration,
  fetchSkillServerIntegration,
  listSkillServerIntegrations,
  updateSkillServerIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class SkillServerIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all skillserver integrations.
   *
   * @param {import('./v1.js').SkillServerIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SkillServerIntegrationListResponse,import('./v1.js').SkillServerIntegrationListStreamType>}
   */
  list(request) {
    return listSkillServerIntegrations(this, request)
  }

  /**
   * Fetches a skillserver integration.
   *
   * @param {string} skillserverId
   * @returns {ResponsePromise<import('./v1.js').SkillServerIntegrationFetchResponse,never>}
   */
  fetch(skillserverId) {
    return fetchSkillServerIntegration(this, skillserverId)
  }

  /**
   * Creates a new skillserver integration.
   *
   * @param {import('./v1.js').SkillServerIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').SkillServerIntegrationCreateResponse>}
   */
  create(request) {
    return createSkillServerIntegration(this, request)
  }

  /**
   * Updates a skillserver integration.
   *
   * @param {string} skillserverId
   * @param {import('./v1.js').SkillServerIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').SkillServerIntegrationUpdateResponse>}
   */
  update(skillserverId, request) {
    return updateSkillServerIntegration(this, skillserverId, request)
  }

  /**
   * Deletes a skillserver integration.
   *
   * @param {string} skillserverId
   * @returns {Promise<import('./v1.js').SkillServerIntegrationDeleteResponse>}
   */
  delete(skillserverId) {
    return deleteSkillServerIntegration(this, skillserverId)
  }
}

export default SkillServerIntegrationClient
