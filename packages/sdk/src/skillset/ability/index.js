import { ChatBotKitClient } from '../../client.js'
import {
  listSkillsetAbilities,
  fetchSkillsetAbility,
  createSkillsetAbility,
  updateSkillsetAbility,
  deleteSkillsetAbility,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class SkillsetAbilityClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing abilitys associated with this client.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').SkillsetAbilityListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SkillsetAbilityListResponse,import('./v1.js').SkillsetAbilityListStreamType>}
   */
  list(skillsetId, request) {
    return listSkillsetAbilities(this, skillsetId, request)
  }

  /**
   * Fetches a ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @returns {Promise<import('./v1.js').SkillsetAbilityFetchResponse>}
   */
  fetch(skillsetId, abilityId) {
    return fetchSkillsetAbility(this, skillsetId, abilityId)
  }

  /**
   * Creates a new ability.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').SkillsetAbilityCreateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetAbilityCreateResponse>}
   */
  create(skillsetId, request) {
    return createSkillsetAbility(this, skillsetId, request)
  }

  /**
   * Updates an ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @param {import('./v1.js').SkillsetAbilityUpdateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetAbilityUpdateResponse>}
   */
  update(skillsetId, abilityId, request) {
    return updateSkillsetAbility(this, skillsetId, abilityId, request)
  }

  /**
   * Deletes the ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @returns {Promise<import('./v1.js').SkillsetAbilityDeleteResponse>}
   */
  delete(skillsetId, abilityId) {
    return deleteSkillsetAbility(this, skillsetId, abilityId)
  }
}

export default SkillsetAbilityClient
