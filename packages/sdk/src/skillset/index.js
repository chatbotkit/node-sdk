import { ChatBotKitClient } from '../client.js'
import { AbilityClient } from './ability/index.js'
import {
  skillsetList,
  skillsetFetch,
  skillsetCreate,
  skillsetUpdate,
  skillsetDelete,
} from './v1.js'

export class SkillsetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.ability = new AbilityClient(options)
  }

  /**
   * Retrieves a list of all existing skillsets associated with this client.
   *
   * @param {string} [cursor]
   * @returns {import('../client.js').ResponsePromise<import('./v1.js').SkillsetListResponse,import('./v1.js').SkillsetListStreamType>}
   */
  list(cursor) {
    return skillsetList(this, cursor)
  }

  /**
   * Fetches a skillset.
   *
   * @param {string} skillsetId
   * @returns {Promise<import('./v1.js').SkillsetFetchResponse>}
   */
  fetch(skillsetId) {
    return skillsetFetch(this, skillsetId)
  }

  /**
   * Creates a new skillset.
   *
   * @param {import('./v1.js').SkillsetCreateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetCreateResponse>}
   */
  create(request) {
    return skillsetCreate(this, request)
  }

  /**
   * Updates a new skillset.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').SkillsetUpdateRequest} request
   * @returns {Promise<import('./v1.js').SkillsetUpdateResponse>}
   */
  update(skillsetId, request) {
    return skillsetUpdate(this, skillsetId, request)
  }

  /**
   * Deletes the skillset.
   *
   * @param {string} skillsetId
   * @returns {Promise<import('./v1.js').SkillsetDeleteResponse>}
   */
  delete(skillsetId) {
    return skillsetDelete(this, skillsetId)
  }
}

export default SkillsetClient
