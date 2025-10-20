import { ChatBotKitClient } from '../client.js'
import { listTeams } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Team client.
 */
export class TeamClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all teams.
   *
   * @param {import('./v1.js').TeamListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').TeamListResponse,import('./v1.js').TeamListStreamType>}
   */
  list(request) {
    return listTeams(this, request)
  }
}

export default TeamClient
