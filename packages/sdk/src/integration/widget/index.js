import { ChatBotKitClient } from '../../client.js'
import {
  createWidgetIntegration,
  deleteWidgetIntegration,
  fetchWidgetIntegration,
  listWidgetIntegrations,
  setupWidgetIntegration,
  updateWidgetIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class WidgetIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all widget integrations.
   *
   * @param {import('./v1.js').WidgetIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').WidgetIntegrationListResponse,import('./v1.js').WidgetIntegrationListStreamType>}
   */
  list(request) {
    return listWidgetIntegrations(this, request)
  }

  /**
   * Fetches a widget integration.
   *
   * @param {string} widgetId
   * @returns {ResponsePromise<import('./v1.js').WidgetIntegrationFetchResponse,never>}
   */
  fetch(widgetId) {
    return fetchWidgetIntegration(this, widgetId)
  }

  /**
   * Creates a new widget integration.
   *
   * @param {import('./v1.js').WidgetIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').WidgetIntegrationCreateResponse>}
   */
  create(request) {
    return createWidgetIntegration(this, request)
  }

  /**
   * Updates a widget integration.
   *
   * @param {string} widgetId
   * @param {import('./v1.js').WidgetIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').WidgetIntegrationUpdateResponse>}
   */
  update(widgetId, request) {
    return updateWidgetIntegration(this, widgetId, request)
  }

  /**
   * Deletes a widget integration.
   *
   * @param {string} widgetId
   * @returns {Promise<import('./v1.js').WidgetIntegrationDeleteResponse>}
   */
  delete(widgetId) {
    return deleteWidgetIntegration(this, widgetId)
  }

  /**
   * Sets up a widget integration.
   *
   * @param {string} widgetId
   * @returns {Promise<import('./v1.js').WidgetIntegrationSetupResponse>}
   */
  setup(widgetId) {
    return setupWidgetIntegration(this, widgetId)
  }
}

export default WidgetIntegrationClient
