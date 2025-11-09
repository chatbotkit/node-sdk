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
export function publishChannelMessage(client: ChatBotKitClient, channelId: string, request: ChannelPublishRequest): Promise<ChannelPublishResponse>;
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
export function subscribeChannelMessages(client: ChatBotKitClient, channelId: string, request?: ChannelSubscribeRequest): ResponsePromise<never, ChannelSubscribeStreamType>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type ChannelPublishRequestBody = import("../types/api/v1.js").operations["publishChannelMessage"]["requestBody"]["content"]["application/json"];
export type ChannelPublishRequest = ChannelPublishRequestBody;
export type ChannelPublishResponseBody = import("../types/api/v1.js").operations["publishChannelMessage"]["responses"]["200"]["content"]["application/json"];
export type ChannelPublishResponse = ChannelPublishResponseBody;
export type ChannelSubscribeRequestBody = import("../types/api/v1.js").operations["subscribeChannelMessages"]["requestBody"]["content"]["application/json"];
export type ChannelSubscribeRequest = ChannelSubscribeRequestBody;
export type ChannelSubscribeResponseBody = import("../types/api/v1.js").operations["subscribeChannelMessages"]["responses"]["200"]["content"]["application/jsonl"];
export type ChannelSubscribeStreamType = ChannelSubscribeResponseBody;
