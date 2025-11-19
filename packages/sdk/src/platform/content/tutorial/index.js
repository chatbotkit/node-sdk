import { ChatBotKitClient } from '../../../client.js'
import {
  fetchPlatformContentTutorial,
  listPlatformContentTutorials,
  searchPlatformContentTutorials,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Platform content tutorial client.
 */
export class PlatformContentTutorialClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all platform content tutorials.
   *
   * @param {import('./v1.js').PlatformContentTutorialListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PlatformContentTutorialListResponse,import('./v1.js').PlatformContentTutorialListStreamType>}
   */
  list(request) {
    return listPlatformContentTutorials(this, request)
  }

  /**
   * Searches platform content tutorials.
   *
   * @param {import('./v1.js').PlatformContentTutorialSearchRequest} request
   * @returns {Promise<import('./v1.js').PlatformContentTutorialSearchResponse>}
   */
  search(request) {
    return searchPlatformContentTutorials(this, request)
  }

  /**
   * Fetches a platform content tutorial.
   *
   * @param {string} tutorialId
   * @returns {ResponsePromise<import('./v1.js').PlatformContentTutorialFetchResponse,never>}
   */
  fetch(tutorialId) {
    return fetchPlatformContentTutorial(this, tutorialId)
  }
}

export default PlatformContentTutorialClient
