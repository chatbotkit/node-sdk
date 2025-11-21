import { ChatBotKitClient } from '../../client.js'
import {
  clonePlatformExample,
  fetchPlatformExample,
  listPlatformExamples,
  searchPlatformExamples,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform example client.
 */
export class PlatformExampleClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform examples.
   *
   * @param {import('./v1.js').PlatformExampleListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformExampleListResponse,import('./v1.js').PlatformExampleListStreamType>}
   */
  list(request) {
    return listPlatformExamples(this, request)
  }

  /**
   * Searches platform examples.
   *
   * @param {import('./v1.js').PlatformExampleSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformExampleSearchResponse>}
   */
  search(request) {
    return searchPlatformExamples(this, request)
  }

  /**
   * Fetches a platform example.
   *
   * @param {string} exampleId
   * @returns {ResponsePromise<import('./v1.js').PlatformExampleFetchResponse,never>}
   */
  fetch(exampleId) {
    return fetchPlatformExample(this, exampleId)
  }

  /**
   * Clones a platform example.
   *
   * @param {string} exampleId
   * @returns {Promise<import('./v1.js').PlatformExampleCloneResponse>}
   */
  clone(exampleId) {
    return clonePlatformExample(this, exampleId)
  }
}

export default PlatformExampleClient
