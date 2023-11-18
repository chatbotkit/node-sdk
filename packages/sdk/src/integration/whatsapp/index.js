import { ChatBotKitClient } from '../../client.js'
import {
  whatsappList,
  whatsappFetch,
  whatsappCreate,
  whatsappUpdate,
  whatsappDelete,
  whatsappSetup,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class WhatsappClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing whatsapp integrations associated with this client.
   *
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').WhatsappListResponse,import('./v1.js').WhatsappListStreamType>}
   */
  list(query) {
    return whatsappList(this, query)
  }

  /**
   * Fetches a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsappFetchResponse>}
   */
  fetch(whatsappId) {
    return whatsappFetch(this, whatsappId)
  }

  /**
   * Creates a new whatsapp integration.
   *
   * @param {import('./v1.js').WhatsappCreateRequest} request
   * @returns {Promise<import('./v1.js').WhatsappCreateResponse>}
   */
  create(request) {
    return whatsappCreate(this, request)
  }

  /**
   * Updates a whatsapp integration.
   *
   * @param {string} whatsappId
   * @param {import('./v1.js').WhatsappUpdateRequest} request
   * @returns {Promise<import('./v1.js').WhatsappUpdateResponse>}
   */
  update(whatsappId, request) {
    return whatsappUpdate(this, whatsappId, request)
  }

  /**
   * Deletes a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsappDeleteResponse>}
   */
  delete(whatsappId) {
    return whatsappDelete(this, whatsappId)
  }

  /**
   * Setups a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsappSetupResponse>}
   */
  setup(whatsappId) {
    return whatsappSetup(this, whatsappId)
  }
}

export default WhatsappClient
