import { ChatBotKitClient } from '../../client.js'
import {
  listWhatsAppIntegrations,
  fetchWhatsAppIntegration,
  createWhatsAppIntegration,
  updateWhatsAppIntegration,
  deleteWhatsAppIntegration,
  setupWhatsAppIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class WhatsAppIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all existing whatsapp integrations associated with this client.
   *
   * @param {import('./v1.js').WhatsAppIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').WhatsAppIntegrationListResponse,import('./v1.js').WhatsAppIntegrationListStreamType>}
   */
  list(request) {
    return listWhatsAppIntegrations(this, request)
  }

  /**
   * Fetches a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsAppIntegrationFetchResponse>}
   */
  fetch(whatsappId) {
    return fetchWhatsAppIntegration(this, whatsappId)
  }

  /**
   * Creates a new whatsapp integration.
   *
   * @param {import('./v1.js').WhatsAppIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').WhatsAppIntegrationCreateResponse>}
   */
  create(request) {
    return createWhatsAppIntegration(this, request)
  }

  /**
   * Updates a whatsapp integration.
   *
   * @param {string} whatsappId
   * @param {import('./v1.js').WhatsAppIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').WhatsAppIntegrationUpdateResponse>}
   */
  update(whatsappId, request) {
    return updateWhatsAppIntegration(this, whatsappId, request)
  }

  /**
   * Deletes a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsAppIntegrationDeleteResponse>}
   */
  delete(whatsappId) {
    return deleteWhatsAppIntegration(this, whatsappId)
  }

  /**
   * Setups a whatsapp integration.
   *
   * @param {string} whatsappId
   * @returns {Promise<import('./v1.js').WhatsAppIntegrationSetupResponse>}
   */
  setup(whatsappId) {
    return setupWhatsAppIntegration(this, whatsappId)
  }
}

export default WhatsAppIntegrationClient
