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
 *   name?: string,
 *   description?: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>
 * }} BotOptions
 *
 * @typedef {BotOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} BotInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} BotListRequest
 *
 * @typedef {{items: BotInstance[]}} BotListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: BotInstance
 * }} BotListStreamItemType
 *
 * @typedef {BotListStreamItemType} BotListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {BotListRequest} [request]
 * @returns {ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function listBots(client, request) {
  let url = `/api/v1/bot/list`

  /** @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {BotInstance & {
 * }} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {ResponsePromise<BotFetchResponse,never>}
 */
export function fetchBot(client, botId) {
  const url = `/api/v1/bot/${botId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchBot']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {BotOptions & {
 *   model?: import('../model/v1.js').Model,
 * }} BotCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export async function createBot(client, request) {
  const url = `/api/v1/bot/create`

  /** @type {import('../types/api/v1.js').operations['createBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createBot']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {BotOptions & {
 *   model?: import('../model/v1.js').Model,
 * }} BotUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} BotUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpdateRequest} request
 * @returns {Promise<BotUpdateResponse>}
 */
export async function updateBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/update`

  /** @type {import('../types/api/v1.js').operations['updateBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateBot']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} BotDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotDeleteResponse>}
 */
export async function deleteBot(client, botId) {
  const url = `/api/v1/bot/${botId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteBot']['requestBody']['content']['application/json']} */
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
 * @typedef {{
 *   id: string
 * }} BotUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotUpvoteRequest} request
 * @returns {Promise<BotUpvoteResponse>}
 */
export async function upvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/upvote`

  /** @type {import('../types/api/v1.js').operations['upvoteBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['upvoteBot']['requestBody']['content']['application/json']} */
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
 * @typedef {{
 *   id: string
 * }} BotDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotDownvoteRequest} request
 * @returns {Promise<BotDownvoteResponse>}
 */
export async function downvoteBot(client, botId, request) {
  const url = `/api/v1/bot/${botId}/downvote`

  /** @type {import('../types/api/v1.js').operations['downvoteBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['downvoteBot']['requestBody']['content']['application/json']} */
    record: {
      value: -100, // @todo remove once the type is fixed

      ...request,
    },
  })

  return response
}
