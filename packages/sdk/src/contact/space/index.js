import { ChatBotKitClient } from '../../client.js'
import { listSpaces } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Contact space client.
 */
export class SpaceClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all contact spaces.
   *
   * @param {string} contactId
   * @param {import('./v1.js').SpaceListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').SpaceListResponse,import('./v1.js').SpaceListStreamType>}
   */
  list(contactId, request) {
    return listSpaces(this, contactId, request)
  }
}

export default SpaceClient
