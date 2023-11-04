import { ChatBotKitClient } from '../../client.js'
import {
  abilityList,
  abilityFetch,
  abilityCreate,
  abilityUpdate,
  abilityDelete,
} from './v1.js'

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
   * @param {string} [cursor]
   * @returns {import('../../client.js').ResponsePromise<import('./v1.js').AbilityListResponse,import('./v1.js').AbilityListStreamType>}
   */
  list(skillsetId, cursor) {
    return abilityList(this, skillsetId, cursor)
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
