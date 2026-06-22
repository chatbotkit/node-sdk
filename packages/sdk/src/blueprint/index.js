import { ChatBotKitClient } from '../client.js'
import {
  cloneBlueprint,
  createBlueprint,
  createBlueprintBulletin,
  deleteBlueprint,
  exportBlueprintResources,
  fetchBlueprint,
  importBlueprintResources,
  listBlueprintBulletins,
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
   * @param {import('./v1.js').BlueprintDeleteRequest} [request]
   * @returns {Promise<import('./v1.js').BlueprintDeleteResponse>}
   */
  delete(blueprintId, request) {
    return deleteBlueprint(this, blueprintId, request)
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

  /**
   * Imports (reconciles) resources into a blueprint. The blueprint may be
   * addressed by id or `@alias`; pass `ensure: true` to create it on miss.
   *
   * @param {string} blueprintId
   * @param {import('./v1.js').BlueprintImportResourcesRequest} request
   * @returns {Promise<import('./v1.js').BlueprintImportResourcesResponse>}
   */
  importResources(blueprintId, request) {
    return importBlueprintResources(this, blueprintId, request)
  }

  /**
   * Exports a blueprint's resources as a transportable document.
   *
   * @param {string} blueprintId
   * @returns {Promise<import('./v1.js').BlueprintExportResourcesResponse>}
   */
  exportResources(blueprintId) {
    return exportBlueprintResources(this, blueprintId)
  }

  /**
   * Lists the bulletins on a blueprint's shared board.
   *
   * @param {string} blueprintId
   * @param {import('./v1.js').BlueprintBulletinListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').BlueprintListBulletinsResponse,import('./v1.js').BlueprintListBulletinsStreamType>}
   */
  listBulletins(blueprintId, request) {
    return listBlueprintBulletins(this, blueprintId, request)
  }

  /**
   * Posts a bulletin to a blueprint's shared board.
   *
   * @param {string} blueprintId
   * @param {import('./v1.js').BlueprintCreateBulletinRequest} request
   * @returns {Promise<import('./v1.js').BlueprintCreateBulletinResponse>}
   */
  createBulletin(blueprintId, request) {
    return createBlueprintBulletin(this, blueprintId, request)
  }
}

export default BlueprintClient
