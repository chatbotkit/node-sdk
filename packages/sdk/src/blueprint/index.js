import { ChatBotKitClient } from '../client.js'
import {
  cloneBlueprint,
  createBlueprint,
  deleteBlueprint,
  fetchBlueprint,
  listBlueprintResources,
  listBlueprints,
  updateBlueprint,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Blueprint client.
 */
export class BlueprintClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all blueprints.
   *
   * @param {import('./v1.js').BlueprintListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').BlueprintListResponse,import('./v1.js').BlueprintListStreamType>}
   */
  list(request) {
    return listBlueprints(this, request)
  }

  /**
   * Fetches a blueprint.
   *
   * @param {string} blueprintId
   * @returns {ResponsePromise<import('./v1.js').BlueprintFetchResponse,never>}
   */
  fetch(blueprintId) {
    return fetchBlueprint(this, blueprintId)
  }

  /**
   * Creates a new blueprint.
   *
   * @param {import('./v1.js').BlueprintCreateRequest} request
   * @returns {Promise<import('./v1.js').BlueprintCreateResponse>}
   */
  create(request) {
    return createBlueprint(this, request)
  }

  /**
   * Updates a blueprint.
   *
   * @param {string} blueprintId
   * @param {import('./v1.js').BlueprintUpdateRequest} request
   * @returns {Promise<import('./v1.js').BlueprintUpdateResponse>}
   */
  update(blueprintId, request) {
    return updateBlueprint(this, blueprintId, request)
  }

  /**
   * Deletes the blueprint.
   *
   * @param {string} blueprintId
   * @returns {Promise<import('./v1.js').BlueprintDeleteResponse>}
   */
  delete(blueprintId) {
    return deleteBlueprint(this, blueprintId)
  }

  /**
   * Clones a blueprint.
   *
   * @param {string} blueprintId
   * @returns {Promise<import('./v1.js').BlueprintCloneResponse>}
   */
  clone(blueprintId) {
    return cloneBlueprint(this, blueprintId)
  }

  /**
   * Lists all resources for a blueprint.
   *
   * @param {string} blueprintId
   * @returns {Promise<import('./v1.js').BlueprintListResourcesResponse>}
   */
  listResources(blueprintId) {
    return listBlueprintResources(this, blueprintId)
  }
}

export default BlueprintClient
