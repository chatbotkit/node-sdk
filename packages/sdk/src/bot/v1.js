/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {import('../client.js').ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function botList(client, cursor) {
  let url = `/api/v1/bot/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
