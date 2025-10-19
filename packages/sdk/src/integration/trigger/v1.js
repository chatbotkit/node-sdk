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
 *   authenticate?: boolean,
 *   triggerSchedule?: "never"|"quarterhourly"|"halfhourly"|"hourly"|"daily"|"weekly"|"monthly",
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} TriggerIntegrationOptions
 *
 * @typedef {TriggerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} TriggerIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TriggerIntegrationListRequest
 *
 * @typedef {{items: TriggerIntegrationInstance[]}} TriggerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TriggerIntegrationInstance
 * }} TriggerIntegrationListStreamItem
 *
 * @typedef {TriggerIntegrationListStreamItem} TriggerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationListResponse,TriggerIntegrationListStreamType>}
 */
export function listTriggerIntegrations(client, request) {
  let url = `/api/v1/integration/trigger/list`

  /** @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {TriggerIntegrationInstance & {
 * }} TriggerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {ResponsePromise<TriggerIntegrationFetchResponse,never>}
 */
export function fetchTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchTriggerIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {TriggerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TriggerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationCreateRequest} request
 * @returns {Promise<TriggerIntegrationCreateResponse>}
 */
export async function createTriggerIntegration(client, request) {
  const url = `/api/v1/integration/trigger/create`

  /** @type {import('../../types/api/v1.js').operations['createTriggerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createTriggerIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {TriggerIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TriggerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationUpdateRequest} request
 * @returns {Promise<TriggerIntegrationUpdateResponse>}
 */
export async function updateTriggerIntegration(client, triggerId, request) {
  const url = `/api/v1/integration/trigger/${triggerId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateTriggerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateTriggerIntegration']['requestBody']['content']['application/json']} */
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
 * }} TriggerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationDeleteResponse>}
 */
export async function deleteTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationSetupResponse>}
 */
export async function setupTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupTriggerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupTriggerIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {object} TriggerIntegrationInvokeRequest
 *
 * @typedef {{
 *   id: string
 * }} TriggerIntegrationInvokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationInvokeRequest} request
 * @returns {Promise<TriggerIntegrationInvokeResponse>}
 */
export async function invokeTriggerIntegration(client, triggerId, request) {
  const url = `/api/v1/integration/trigger/${triggerId}/invoke`

  /** @type {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}
