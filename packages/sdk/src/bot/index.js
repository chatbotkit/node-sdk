import { ChatBotKitClient } from '../client.js'
import { BotSessionClient } from './session/index.js'
import {
  cloneBot,
  createBot,
  deleteBot,
  downvoteBot,
  fetchBot,
  listBots,
  updateBot,
  upvoteBot,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Bot client.
 */
export class BotClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {BotSessionClient} session client
     */
    this.session = new BotSessionClient(options)
  }

  /**
   * Retrieves a list of all bots.
   *
   * @param {import('./v1.js').BotListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').BotListResponse,import('./v1.js').BotListStreamType>}
   */
  list(request) {
    return listBots(this, request)
  }

  /**
   * Fetches a bot.
   *
   * @param {string} botId
   * @returns {ResponsePromise<import('./v1.js').BotFetchResponse,never>}
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

  /**
   * Clones a bot.
   *
   * @param {string} botId
   * @param {import('./v1.js').BotCloneRequest} [request]
   * @returns {Promise<import('./v1.js').BotCloneResponse>}
   */
  clone(botId, request) {
    return cloneBot(this, botId, request)
  }

  /**
   * @param {string} botId
   * @param {import('./v1.js').BotUpvoteRequest} request
   * @returns {Promise<import('./v1.js').BotUpvoteResponse>}
   */
  upvote(botId, request) {
    return upvoteBot(this, botId, request)
  }

  /**
   * @param {string} botId
   * @param {import('./v1.js').BotDownvoteRequest} request
   * @returns {Promise<import('./v1.js').BotDownvoteResponse>}
   */
  downvote(botId, request) {
    return downvoteBot(this, botId, request)
  }
}

export default BotClient
