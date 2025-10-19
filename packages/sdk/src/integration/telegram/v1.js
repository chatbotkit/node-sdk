import { buildModelString } from '../../model/v1.js'

/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   botId?: string
 * }} BotRef
 *
 * @typedef {{
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} BotConfig
 *
 * @typedef {BotRef | BotConfig} BotRefOrConfig
 *
 * @typedef {BotRefOrConfig & {
 *   name?: string,
 *   description?: string,
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>
 * }} TelegramIntegrationOptions
 *
 * @typedef {TelegramIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} TelegramIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TelegramIntegrationListRequest
 *
 * @typedef {{items: TelegramIntegrationInstance[]}} TelegramIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TelegramIntegrationInstance
 * }} TelegramIntegrationListStreamItem
 *
 * @typedef {TelegramIntegrationListStreamItem} TelegramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationListRequest} [request]
 * @returns {ResponsePromise<TelegramIntegrationListResponse,TelegramIntegrationListStreamType>}
 */
export function listTelegramIntegrations(client, request) {
  let url = `/api/v1/integration/telegram/list`

  /** @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {TelegramIntegrationInstance & {
 * }} TelegramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {ResponsePromise<TelegramIntegrationFetchResponse,never>}
 */
export function fetchTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchTelegramIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {TelegramIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationCreateRequest} request
 * @returns {Promise<TelegramIntegrationCreateResponse>}
 */
export async function createTelegramIntegration(client, request) {
  const url = `/api/v1/integration/telegram/create`

  /** @type {import('../../types/api/v1.js').operations['createTelegramIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createTelegramIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {TelegramIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @param {TelegramIntegrationUpdateRequest} request
 * @returns {Promise<TelegramIntegrationUpdateResponse>}
 */
export async function updateTelegramIntegration(client, telegramId, request) {
  const url = `/api/v1/integration/telegram/${telegramId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateTelegramIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateTelegramIntegration']['requestBody']['content']['application/json']} */
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
 * }} TelegramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationDeleteResponse>}
 */
export async function deleteTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TelegramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationSetupResponse>}
 */
export async function setupTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupTelegramIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupTelegramIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
