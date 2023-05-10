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
   */
  list() {
    return botList(this)
  }

  /**
   * Fetches a bot.
   *
   * @param {string} botId
   */
  fetch(botId) {
    return botFetch(this, botId)
  }

  /**
   * Creates a new bot.
   *
   * @param {import('./v1.js').BotCreateRequest} request
   */
  create(request) {
    return botCreate(this, request)
  }

  /**
   * Updates a new bot.
   *
   * @param {string} botId
   * @param {import('./v1.js').BotUpdateRequest} request
   */
  update(botId, request) {
    return botUpdate(this, botId, request)
  }

  /**
   * Deletes the bot.
   *
   * @param {string} botId
   */
  delete(botId) {
    return botDelete(this, botId)
  }
}

export default BotClient
