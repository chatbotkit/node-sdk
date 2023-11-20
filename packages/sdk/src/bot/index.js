import { ChatBotKitClient } from '../client.js'
import { BotSessionClient } from './session/index.js'
import { listBots, fetchBot, createBot, updateBot, deleteBot } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

export class BotClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.session = new BotSessionClient(options)
  }

  /**
   * Retrieves a list of all existing bots associated with this client.
   *
   * @param {{cursor?: string, take?: number, meta: Record<string,string>}} [query]
   * @returns {ResponsePromise<import('./v1.js').BotListResponse,import('./v1.js').BotListStreamType>}
   */
  list(query) {
    return listBots(this, query)
  }

  /**
   * Fetches a bot.
   *
   * @param {string} botId
   * @returns {Promise<import('./v1.js').BotFetchResponse>}
   */
  fetch(botId) {
    return fetchBot(this, botId)
  }

  /**
   * Creates a new bot.
   *
   * @param {import('./v1.js').BotCreateRequest} request
   * @returns {Promise<import('./v1.js').BotCreateResponse>}
   */
  create(request) {
    return createBot(this, request)
  }

  /**
   * Updates a bot.
   *
   * @param {string} botId
   * @param {import('./v1.js').BotUpdateRequest} request
   * @returns {Promise<import('./v1.js').BotUpdateResponse>}
   */
  update(botId, request) {
    return updateBot(this, botId, request)
  }

  /**
   * Deletes the bot.
   *
   * @param {string} botId
   * @returns {Promise<import('./v1.js').BotDeleteResponse>}
   */
  delete(botId) {
    return deleteBot(this, botId)
  }
}

export default BotClient
