import { sessionCreate } from './v1.js'
import { ChatBotKitClient } from '../../client.js'

export class SessionClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Creates a new session.
   *
   * @param {string} botId
   * @param {import('./v1.js').SessionCreateRequest} request
   */
  create(botId, request) {
    return sessionCreate(this, botId, request)
  }
}
