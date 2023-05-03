/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   id: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} BotListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: {
 *     id: string,
 *     backstory?: string,
 *     model?: string,
 *     datasetId?: string,
 *     skillsetId?: string,
 *     createdAt: number,
 *     updatedAt: number
 *   }
 * }} BotListStreamItemType
 *
 * @typedef {BotListStreamItemType} BotListStreamType
 *
 * @param {ChatBotKitClient} client
 * @returns {import('../client.js').ResponsePromise<BotListResponse,BotListStreamType>}
 */
export function botList(client) {
  return client.clientFetch(`/api/v1/bot/list`)
}

/**
 * @typedef {{
 *   id: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} BotFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @returns {Promise<BotFetchResponse>}
 */
export async function botFetch(client, botId) {
  return client.clientFetch(`/api/v1/bot/${botId}/fetch`)
}

/**
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
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
export async function botCreate(client, request) {
  return client.clientFetch(`/api/v1/bot/create`, {
    data: request,
  })
}

/**
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
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
export async function botUpdate(client, botId, request) {
  return client.clientFetch(`/api/v1/bot/${botId}/update`, {
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
  return client.clientFetch(`/api/v1/bot/${botId}/delete`)
}
