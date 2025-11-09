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
     * Publishes a message to a channel.
     *
     * @param {string} channelId
     * @param {import('./v1.js').ChannelPublishRequest} request
     * @returns {Promise<import('./v1.js').ChannelPublishResponse>}
     */
    publish(channelId: string, request: import("./v1.js").ChannelPublishRequest): Promise<import("./v1.js").ChannelPublishResponse>;
    /**
     * Subscribes to channel messages.
     *
     * @param {string} channelId
     * @param {import('./v1.js').ChannelSubscribeRequest} [request]
     * @returns {ResponsePromise<never,import('./v1.js').ChannelSubscribeStreamType>}
     */
    subscribe(channelId: string, request?: import("./v1.js").ChannelSubscribeRequest): ResponsePromise<never, import("./v1.js").ChannelSubscribeStreamType>;
}
export default ChannelClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
