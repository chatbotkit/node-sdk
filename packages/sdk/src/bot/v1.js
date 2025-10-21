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
 * @typedef {{
 *   model?: import('../model/v1.js').Model,
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} BotCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createBot']['requestBody']['content']['application/json']} BotCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createBot']['responses']['200']['content']['application/json']} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export async function createBot(client, request) {
  const url = `/api/v1/bot/create`

  /** @type {BotCreateResponse} */
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
 * @typedef {{
 *   model?: import('../model/v1.js').Model,
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} BotUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateBot']['requestBody']['content']['application/json']} BotUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateBot']['responses']['200']['content']['application/json']} BotUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpdateRequest} request
 * @returns {Promise<BotUpdateResponse>}
 */
export async function updateBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/update`

  /** @type {BotUpdateResponse} */
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
 * @typedef {import('../types/api/v1.js').operations['deleteBot']['responses']['200']['content']['application/json']} BotDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotDeleteResponse>}
 */
export async function deleteBot(client, botId) {
  const url = `/api/v1/bot/${botId}/delete`

  /** @type {BotDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BotDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} BotUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['requestBody']['content']['application/json']} BotUpvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteBot']['responses']['200']['content']['application/json']} BotUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpvoteRequest} request
 * @returns {Promise<BotUpvoteResponse>}
 */
export async function upvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/upvote`

  /** @type {BotUpvoteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BotUpvoteRequestBody} */
    record: {
      value: 100, // @todo remove once the type is fixed

      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} BotDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['requestBody']['content']['application/json']} BotDownvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteBot']['responses']['200']['content']['application/json']} BotDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotDownvoteRequest} request
 * @returns {Promise<BotDownvoteResponse>}
 */
export async function downvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/downvote`

  /** @type {BotDownvoteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {BotDownvoteRequestBody} */
    record: {
      value: -100, // @todo remove once the type is fixed

      ...request,
    },
  })

  return response
}
