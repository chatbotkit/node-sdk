import { ChatBotKitClient } from '../../client.js'
import {
  fetchPlatformTutorial,
  listPlatformTutorials,
  searchPlatformTutorials,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform tutorial client.
 */
export class PlatformTutorialClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform tutorials.
   *
   * @param {import('./v1.js').PlatformTutorialListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformTutorialListResponse,import('./v1.js').PlatformTutorialListStreamType>}
   */
  list(request) {
    return listPlatformTutorials(this, request)
  }

  /**
   * Searches platform tutorials.
   *
   * @param {import('./v1.js').PlatformTutorialSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformTutorialSearchResponse>}
   */
  search(request) {
    return searchPlatformTutorials(this, request)
  }

  /**
   * Fetches a platform tutorial.
   *
   * @param {string} tutorialId
   * @returns {ResponsePromise<import('./v1.js').PlatformTutorialFetchResponse,never>}
   */
  fetch(tutorialId) {
    return fetchPlatformTutorial(this, tutorialId)
  }
}

export default PlatformTutorialClient
