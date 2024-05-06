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
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} DiscordIntegrationOptions
 *
 * @typedef {DiscordIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} DiscordIntegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} DiscordIntegrationListRequest
 *
 * @typedef {{items: DiscordIntegrationInstance[]}} DiscordIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DiscordIntegrationInstance
 * }} DiscordIntegrationListStreamItem
 *
 * @typedef {DiscordIntegrationListStreamItem} DiscordIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationListRequest} [request]
 * @returns {ResponsePromise<DiscordIntegrationListResponse,DiscordIntegrationListStreamType>}
 */
export function listDiscordIntegrations(client, request) {
  let url = `/api/v1/integration/discord/list`

  /** @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {DiscordIntegrationInstance & {
 * }} DiscordIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationFetchResponse>}
 */
export async function fetchDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchDiscordIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {DiscordIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationCreateRequest} request
 * @returns {Promise<DiscordIntegrationCreateResponse>}
 */
export async function createDiscordIntegration(client, request) {
  const url = `/api/v1/integration/discord/create`

  /** @type {import('../../types/api/v1.js').operations['createDiscordIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createDiscordIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {DiscordIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @param {DiscordIntegrationUpdateRequest} request
 * @returns {Promise<DiscordIntegrationUpdateResponse>}
 */
export async function updateDiscordIntegration(client, discordId, request) {
  const url = `/api/v1/integration/discord/${discordId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateDiscordIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateDiscordIntegration']['requestBody']['content']['application/json']} */
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
 * }} DiscordIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationDeleteResponse>}
 */
export async function deleteDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} DiscordIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationSetupResponse>}
 */
export async function setupDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupDiscordIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupDiscordIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
