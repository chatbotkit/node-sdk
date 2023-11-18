import { ChatBotKitClient } from '../../client.js'
import {
  abilityList,
  abilityFetch,
  abilityCreate,
  abilityUpdate,
  abilityDelete,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class AbilityClient extends ChatBotKitClient {
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
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').AbilityListResponse,import('./v1.js').AbilityListStreamType>}
   */
  list(skillsetId, query) {
    return abilityList(this, skillsetId, query)
  }

  /**
   * Fetches a ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @returns {Promise<import('./v1.js').AbilityFetchResponse>}
   */
  fetch(skillsetId, abilityId) {
    return abilityFetch(this, skillsetId, abilityId)
  }

  /**
   * Creates a new ability.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').AbilityCreateRequest} request
   * @returns {Promise<import('./v1.js').AbilityCreateResponse>}
   */
  create(skillsetId, request) {
    return abilityCreate(this, skillsetId, request)
  }

  /**
   * Updates an ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @param {import('./v1.js').AbilityUpdateRequest} request
   * @returns {Promise<import('./v1.js').AbilityUpdateResponse>}
   */
  update(skillsetId, abilityId, request) {
    return abilityUpdate(this, skillsetId, abilityId, request)
  }

  /**
   * Deletes the ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @returns {Promise<import('./v1.js').AbilityDeleteResponse>}
   */
  delete(skillsetId, abilityId) {
    return abilityDelete(this, skillsetId, abilityId)
  }
}

export default AbilityClient
