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
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>
 * }} MessengerIntegrationOptions
 *
 * @typedef {MessengerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 *   verifyToken: string
 * }} MessengerIntegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} MessengerIntegrationListRequest
 *
 * @typedef {{items: MessengerIntegrationInstance[]}} MessengerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MessengerIntegrationInstance
 * }} MessengerIntegrationListStreamItem
 *
 * @typedef {MessengerIntegrationListStreamItem} MessengerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationListRequest} [request]
 * @returns {ResponsePromise<MessengerIntegrationListResponse,MessengerIntegrationListStreamType>}
 */
export function listMessengerIntegrations(client, request) {
  let url = `/api/v1/integration/messenger/list`

  /** @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {MessengerIntegrationInstance & {
 * }} MessengerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationFetchResponse>}
 */
export async function fetchMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchMessengerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {MessengerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationCreateRequest} request
 * @returns {Promise<MessengerIntegrationCreateResponse>}
 */
export async function createMessengerIntegration(client, request) {
  const url = `/api/v1/integration/messenger/create`

  /** @type {import('../../types/api/v1.js').operations['createMessengerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createMessengerIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {MessengerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @param {MessengerIntegrationUpdateRequest} request
 * @returns {Promise<MessengerIntegrationUpdateResponse>}
 */
export async function updateMessengerIntegration(client, messengerId, request) {
  const url = `/api/v1/integration/messenger/${messengerId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateMessengerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateMessengerIntegration']['requestBody']['content']['application/json']} */
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
 * }} MessengerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationDeleteResponse>}
 */
export async function deleteMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} MessengerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationSetupResponse>}
 */
export async function setupMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupMessengerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupMessengerIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
