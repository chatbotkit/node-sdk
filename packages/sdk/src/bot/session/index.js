import { ChatBotKitClient } from '../../client.js'
import { createBotSession } from './v1.js'

/**
 * Bot session client.
 */
export class BotSessionClient extends ChatBotKitClient {
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
   * @param {import('./v1.js').BotSessionCreateRequest} request
   * @returns {Promise<import('./v1.js').BotSessionCreateResponse>}
   */
  create(botId, request) {
    return createBotSession(this, botId, request)
  }
}
