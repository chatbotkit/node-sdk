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
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>
 * }} WhatsAppIntegrationOptions
 *
 * @typedef {WhatsAppIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number,
 *   verifyToken: string
 * }} WhatsAppIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} WhatsAppIntegrationListRequest
 *
 * @typedef {{items: WhatsAppIntegrationInstance[]}} WhatsAppIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: WhatsAppIntegrationInstance
 * }} WhatsAppIntegrationListStreamItem
 *
 * @typedef {WhatsAppIntegrationListStreamItem} WhatsAppIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationListRequest} [request]
 * @returns {ResponsePromise<WhatsAppIntegrationListResponse,WhatsAppIntegrationListStreamType>}
 */
export function listWhatsAppIntegrations(client, request) {
  let url = `/api/v1/integration/whatsapp/list`

  /** @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {WhatsAppIntegrationInstance & {
 * }} WhatsAppIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {ResponsePromise<WhatsAppIntegrationFetchResponse,never>}
 */
export function fetchWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchWhatsAppIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {WhatsAppIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export async function createWhatsAppIntegration(client, request) {
  const url = `/api/v1/integration/whatsapp/create`

  /** @type {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,

      model: request.model ? buildModelString(request.model) : undefined,
    },
  })

  return response
}

/**
 * @typedef {WhatsAppIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsAppIntegrationUpdateRequest} request
 * @returns {Promise<WhatsAppIntegrationUpdateResponse>}
 */
export async function updateWhatsAppIntegration(client, whatsappId, request) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['requestBody']['content']['application/json']} */
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
 * }} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export async function deleteWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} WhatsAppIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationSetupResponse>}
 */
export async function setupWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
