/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../types/api/v1.js').operations['publishChannelMessage']['requestBody']['content']['application/json']} ChannelPublishRequestBody
 *
 * @typedef {ChannelPublishRequestBody} ChannelPublishRequest
 *
 * @typedef {import('../types/api/v1.js').operations['publishChannelMessage']['responses']['200']['content']['application/json']} ChannelPublishResponseBody
 *
 * @typedef {ChannelPublishResponseBody} ChannelPublishResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} channelId
 * @param {ChannelPublishRequest} request
 * @returns {Promise<ChannelPublishResponse>}
 */
export async function publishChannelMessage(client, channelId, request) {
  const url = `/api/v1/channel/${channelId}/publish`

  /** @type {ChannelPublishResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChannelPublishRequestBody} */
    record: {
      ...request,
    },

    endpoint: '/api/v1/channel/{channelId}/publish',
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['subscribeChannelMessages']['requestBody']['content']['application/json']} ChannelSubscribeRequestBody
 *
 * @typedef {ChannelSubscribeRequestBody} ChannelSubscribeRequest
 *
 * @typedef {import('../types/api/v1.js').operations['subscribeChannelMessages']['responses']['200']['content']['application/jsonl']} ChannelSubscribeResponseBody
 *
 * @typedef {ChannelSubscribeResponseBody} ChannelSubscribeStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} channelId
 * @param {ChannelSubscribeRequest} [request]
 * @returns {ResponsePromise<never,ChannelSubscribeStreamType>}
 */
export function subscribeChannelMessages(client, channelId, request) {
  const url = `/api/v1/channel/${channelId}/subscribe`

  /** @type {ResponsePromise<never,ChannelSubscribeStreamType>} */
  const response = client.clientFetch(url, {
    /** @type {ChannelSubscribeRequestBody} */
    record: request || {},

    endpoint: '/api/v1/channel/{channelId}/subscribe',
  })

  return response
}
