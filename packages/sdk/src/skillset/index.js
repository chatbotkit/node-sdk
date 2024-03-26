import { ChatBotKitClient } from '../client.js'
import { SkillsetAbilityClient } from './ability/index.js'
import {
  createSkillset,
  deleteSkillset,
  fetchSkillset,
  listSkillsets,
  updateSkillset,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Skillset client.
 */
export class SkillsetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {SkillsetAbilityClient} ability client
     */
    this.ability = new SkillsetAbilityClient(options)
  }

  /**
   * Retrieves a list of all skillsets.
   *
   * @param {import('./v1.js').SkillsetListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SkillsetListResponse,import('./v1.js').SkillsetListStreamType>}
   */
  list(request) {
    return listSkillsets(this, request)
  }

  /**
   * Fetches a skillset.
   *
   * @param {string} skillsetId
   * @returns {Promise<import('./v1.js').SkillsetFetchResponse>}
   */
  fetch(skillsetId) {
    return fetchSkillset(this, skillsetId)
  }

  /**
   * Creates a new skillset.
   *
   * @param {import('./v1.js').SkillsetCreateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetCreateResponse>}
   */
  create(request) {
    return createSkillset(this, request)
  }

  /**
   * Updates a skillset.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').SkillsetUpdateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetUpdateResponse>}
   */
  update(skillsetId, request) {
    return updateSkillset(this, skillsetId, request)
  }

  /**
   * Deletes the skillset.
   *
   * @param {string} skillsetId
   * @returns {Promise<import('./v1.js').SkillsetDeleteResponse>}
   */
  delete(skillsetId) {
    return deleteSkillset(this, skillsetId)
  }
}

export default SkillsetClient
