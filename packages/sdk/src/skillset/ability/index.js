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
   */
  list(skillsetId) {
    return abilityList(this, skillsetId)
  }

  /**
   * Fetches a ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   */
  fetch(skillsetId, abilityId) {
    return abilityFetch(this, skillsetId, abilityId)
  }

  /**
   * Creates a new ability.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').AbilityCreateRequest} request
   */
  create(skillsetId, request) {
    return abilityCreate(this, skillsetId, request)
  }

  /**
   * Updates a new ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   * @param {import('./v1.js').AbilityUpdateRequest} request
   */
  update(skillsetId, abilityId, request) {
    return abilityUpdate(this, skillsetId, abilityId, request)
  }

  /**
   * Deletes the ability.
   *
   * @param {string} skillsetId
   * @param {string} abilityId
   */
  delete(skillsetId, abilityId) {
    return abilityDelete(this, skillsetId, abilityId)
  }
}

export default AbilityClient
