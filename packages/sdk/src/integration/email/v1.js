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
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} EmailIntegrationOptions
 *
 * @typedef {EmailIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 * }} EmailIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} EmailIntegrationListRequest
 *
 * @typedef {{items: EmailIntegrationInstance[]}} EmailIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: EmailIntegrationInstance
 * }} EmailIntegrationListStreamItem
 *
 * @typedef {EmailIntegrationListStreamItem} EmailIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationListRequest} [request]
 * @returns {ResponsePromise<EmailIntegrationListResponse,EmailIntegrationListStreamType>}
 */
export function listEmailIntegrations(client, request) {
  let url = `/api/v1/integration/email/list`

  /** @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {EmailIntegrationInstance & {
 * }} EmailIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {ResponsePromise<EmailIntegrationFetchResponse,never>}
 */
export function fetchEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchEmailIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {EmailIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} EmailIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} EmailIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationCreateRequest} request
 * @returns {Promise<EmailIntegrationCreateResponse>}
 */
export async function createEmailIntegration(client, request) {
  const url = `/api/v1/integration/email/create`

  /** @type {import('../../types/api/v1.js').operations['createEmailIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createEmailIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {EmailIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} EmailIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} EmailIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @param {EmailIntegrationUpdateRequest} request
 * @returns {Promise<EmailIntegrationUpdateResponse>}
 */
export async function updateEmailIntegration(client, emailId, request) {
  const url = `/api/v1/integration/email/${emailId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateEmailIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateEmailIntegration']['requestBody']['content']['application/json']} */
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
 * }} EmailIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationDeleteResponse>}
 */
export async function deleteEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteEmailIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteEmailIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} EmailIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationSetupResponse>}
 */
export async function setupEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupEmailIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupEmailIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
