import { ChatBotKitClient } from '../client.js'
import { SessionClient } from './session/index.js'
import { botList, botFetch, botCreate, botUpdate, botDelete } from './v1.js'

export class BotClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.session = new SessionClient(options)
  }

  /**
   * Retrieves a list of all existing bots associated with this client.
   * @returns {import('../client.js').ResponsePromise<import('./v1.js').BotListResponse,import('./v1.js').BotListStreamType>}
   */
  list() {
    return botList(this)
  }

  /**
   * Fetches a bot.
   *
   * @param {string} botId
   * returns {Promise<import('./v1.js').BotFetchResponse>}
   */
  fetch(botId) {
    return botFetch(this, botId)
  }

  /**
   * Creates a new bot.
   *
   * @param {import('./v1.js').BotCreateRequest} request
   * returns {Promise<import('./v1.js').BotCreateResponse>}
   */
  create(request) {
    return botCreate(this, request)
  }

  /**
   * Updates a new bot.
   *
   * @param {string} botId
   * @param {import('./v1.js').BotUpdateRequest} request
   * returns {Promise<import('./v1.js').BotUpdateResponse>}
   */
  update(botId, request) {
    return botUpdate(this, botId, request)
  }

  /**
   * Deletes the bot.
   *
   * @param {string} botId
   * returns {Promise<import('./v1.js').BotDeleteResponse>}
   */
  delete(botId) {
    return botDelete(this, botId)
  }
}

export default BotClient
