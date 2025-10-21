import { buildModelString } from '../model/v1.js'

/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} BotListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/json']} BotListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/jsonl']} BotListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BotListRequest} [request]
 * @returns {ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function listBots(client, request) {
  let url = `/api/v1/bot/list`

  /** @type {ResponsePromise<BotListResponse,BotListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchBot']['responses']['200']['content']['application/json']} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {ResponsePromise<BotFetchResponse,never>}
 */
export function fetchBot(client, botId) {
  const url = `/api/v1/bot/${botId}/fetch`

  /** @type {ResponsePromise<BotFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createBot']['requestBody']['content']['application/json']} BotCreateRequestBody
 *
 * @typedef {Omit<BotCreateRequestBody,'model'> & {
 *   model: import('../model/v1.js').Model
 * }} BotCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBot']['responses']['200']['content']['application/json']} BotCreateResponseBody
 *
 * @typedef {BotCreateResponseBody} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export async function createBot(client, request) {
  const url = `/api/v1/bot/create`

  /** @type {BotCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotCreateRequestBody} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateBot']['requestBody']['content']['application/json']} BotUpdateRequestBody
 *
 * @typedef {Omit<BotUpdateRequestBody,'model'> & {
 *   model?: import('../model/v1.js').Model
 * }} BotUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBot']['responses']['200']['content']['application/json']} BotUpdateResponseBody
 *
 * @typedef {BotUpdateResponseBody} BotUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpdateRequest} request
 * @returns {Promise<BotUpdateResponse>}
 */
export async function updateBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/update`

  /** @type {BotUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotUpdateRequestBody} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteBot']['requestBody']['content']['application/json']} BotDeleteRequestBody
 *
 * @typedef {BotDeleteRequestBody} BotDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteBot']['responses']['200']['content']['application/json']} BotDeleteResponseBody
 *
 * @typedef {BotDeleteResponseBody} BotDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotDeleteResponse>}
 */
export async function deleteBot(client, botId) {
  const url = `/api/v1/bot/${botId}/delete`

  /** @type {BotDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['requestBody']['content']['application/json']} BotUpvoteRequestBody
 *
 * @typedef {BotUpvoteRequestBody} BotUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['responses']['200']['content']['application/json']} BotUpvoteResponseBody
 *
 * @typedef {BotUpvoteResponseBody} BotUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpvoteRequest} request
 * @returns {Promise<BotUpvoteResponse>}
 */
export async function upvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/upvote`

  /** @type {BotUpvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotUpvoteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['requestBody']['content']['application/json']} BotDownvoteRequestBody
 *
 * @typedef {BotDownvoteRequestBody} BotDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['responses']['200']['content']['application/json']} BotDownvoteResponseBody
 *
 * @typedef {BotDownvoteResponseBody} BotDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotDownvoteRequest} request
 * @returns {Promise<BotDownvoteResponse>}
 */
export async function downvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/downvote`

  /** @type {BotDownvoteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotDownvoteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
