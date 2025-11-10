import { ChatBotKitClient } from '../client.js'
import { publishChannelMessage, subscribeChannelMessages } from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Channel client.
 */
export class ChannelClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Publishes a message to a channel.
   *
   * @param {string} channelId
   * @param {import('./v1.js').ChannelPublishRequest} request
   * @returns {Promise<import('./v1.js').ChannelPublishResponse>}
   */
  publish(channelId, request) {
    return publishChannelMessage(this, channelId, request)
  }

  /**
   * Subscribes to channel messages.
   *
   * @param {string} channelId
   * @param {import('./v1.js').ChannelSubscribeRequest} [request]
   * @returns {ResponsePromise<never,import('./v1.js').ChannelSubscribeStreamType>}
   */
  subscribe(channelId, request) {
    return subscribeChannelMessages(this, channelId, request)
  }
}

export default ChannelClient
