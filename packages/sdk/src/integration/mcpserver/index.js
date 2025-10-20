import { ChatBotKitClient } from '../../client.js'
import {
  createMcpServerIntegration,
  deleteMcpServerIntegration,
  fetchMcpServerIntegration,
  listMcpServerIntegrations,
  updateMcpServerIntegration,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class McpServerIntegrationClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all mcpserver integrations.
   *
   * @param {import('./v1.js').McpServerIntegrationListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').McpServerIntegrationListResponse,import('./v1.js').McpServerIntegrationListStreamType>}
   */
  list(request) {
    return listMcpServerIntegrations(this, request)
  }

  /**
   * Fetches a mcpserver integration.
   *
   * @param {string} mcpserverId
   * @returns {ResponsePromise<import('./v1.js').McpServerIntegrationFetchResponse,never>}
   */
  fetch(mcpserverId) {
    return fetchMcpServerIntegration(this, mcpserverId)
  }

  /**
   * Creates a new mcpserver integration.
   *
   * @param {import('./v1.js').McpServerIntegrationCreateRequest} request
   * @returns {Promise<import('./v1.js').McpServerIntegrationCreateResponse>}
   */
  create(request) {
    return createMcpServerIntegration(this, request)
  }

  /**
   * Updates a mcpserver integration.
   *
   * @param {string} mcpserverId
   * @param {import('./v1.js').McpServerIntegrationUpdateRequest} request
   * @returns {Promise<import('./v1.js').McpServerIntegrationUpdateResponse>}
   */
  update(mcpserverId, request) {
    return updateMcpServerIntegration(this, mcpserverId, request)
  }

  /**
   * Deletes a mcpserver integration.
   *
   * @param {string} mcpserverId
   * @returns {Promise<import('./v1.js').McpServerIntegrationDeleteResponse>}
   */
  delete(mcpserverId) {
    return deleteMcpServerIntegration(this, mcpserverId)
  }
}

export default McpServerIntegrationClient
