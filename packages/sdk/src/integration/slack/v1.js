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
 *   signingSecret?: string,
 *   botToken?: string,
 *   visibleMessages?: number,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} SlackIntegrationOptions
 *
 * @typedef {SlackIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SlackIntegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SlackIntegrationListRequest
 *
 * @typedef {{items: SlackIntegrationInstance[]}} SlackIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SlackIntegrationInstance
 * }} SlackIntegrationListStreamItem
 *
 * @typedef {SlackIntegrationListStreamItem} SlackIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationListRequest} [request]
 * @returns {ResponsePromise<SlackIntegrationListResponse,SlackIntegrationListStreamType>}
 */
export function listSlackIntegrations(client, request) {
  let url = `/api/v1/integration/slack/list`

  /** @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SlackIntegrationInstance & {
 * }} SlackIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationFetchResponse>}
 */
export async function fetchSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchSlackIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SlackIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SlackIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationCreateRequest} request
 * @returns {Promise<SlackIntegrationCreateResponse>}
 */
export async function createSlackIntegration(client, request) {
  const url = `/api/v1/integration/slack/create`

  /** @type {import('../../types/api/v1.js').operations['createSlackIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createSlackIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {SlackIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} SlackIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SlackIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @param {SlackIntegrationUpdateRequest} request
 * @returns {Promise<SlackIntegrationUpdateResponse>}
 */
export async function updateSlackIntegration(client, slackId, request) {
  const url = `/api/v1/integration/slack/${slackId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateSlackIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateSlackIntegration']['requestBody']['content']['application/json']} */
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
 * }} SlackIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationDeleteResponse>}
 */
export async function deleteSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteSlackIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteSlackIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SlackIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationSetupResponse>}
 */
export async function setupSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupSlackIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupSlackIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
