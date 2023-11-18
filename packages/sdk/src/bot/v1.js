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
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} BotOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & BotOptions} BotInstance
 */

/**
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
 * @param {string} [cursor]
 * @returns {ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function botList(client, cursor) {
  let url = `/api/v1/bot/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  /** @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listBots']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {BotInstance} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotFetchResponse>}
 */
export async function botFetch(client, botId) {
  const url = `/api/v1/bot/${botId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {BotOptions} BotCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} BotCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {BotCreateRequest} request
 * @returns {Promise<BotCreateResponse>}
 */
export async function botCreate(client, request) {
  const url = `/api/v1/bot/create`

  /** @type {import('../types/api/v1.js').operations['createBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createBot']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {BotOptions} BotUpdateRequest
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
export async function botUpdate(client, botId, request) {
  const url = `/api/v1/bot/${botId}/update`

  /** @type {import('../types/api/v1.js').operations['updateBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateBot']['requestBody']['content']['application/json']} */
    data: request,
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
export async function botDelete(client, botId) {
  const url = `/api/v1/bot/${botId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteBot']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteBot']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
