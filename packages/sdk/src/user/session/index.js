import { ChatBotKitClient } from '../../client.js'
import { createUserSession } from './v1.js'

/**
 * User session client.
 */
export class UserSessionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Creates a new user session.
   *
   * @param {string} userId
   * @param {import('./v1.js').UserSessionCreateRequest} request
   * @returns {Promise<import('./v1.js').UserSessionCreateResponse>}
   */
  create(userId, request) {
    return createUserSession(this, userId, request)
  }
}

export default UserSessionClient
