import { ChatBotKitClient } from '../client.js'
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
  }

  /**
   * Retrieves a list of all existing skillsets associated with this client.
   */
  list() {
    return skillsetList(this)
  }

  /**
   * Fetches a skillset.
   *
   * @param {string} skillsetId
   */
  fetch(skillsetId) {
    return skillsetFetch(this, skillsetId)
  }

  /**
   * Creates a new skillset.
   *
   * @param {import('./v1.js').SkillsetCreateRequest} request
   */
  create(request) {
    return skillsetCreate(this, request)
  }

  /**
   * Updates a new skillset.
   *
   * @param {string} skillsetId
   * @param {import('./v1.js').SkillsetUpdateRequest} request
   */
  update(skillsetId, request) {
    return skillsetUpdate(this, skillsetId, request)
  }

  /**
   * Deletes the skillset.
   *
   * @param {string} skillsetId
   */
  delete(skillsetId) {
    return skillsetDelete(this, skillsetId)
  }
}
