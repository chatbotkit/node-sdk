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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} WhatsAppIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/json']} WhatsAppIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listWhatsAppIntegrations']['responses']['200']['content']['application/jsonl']} WhatsAppIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationListRequest} [request]
 * @returns {ResponsePromise<WhatsAppIntegrationListResponse,WhatsAppIntegrationListStreamType>}
 */
export function listWhatsAppIntegrations(client, request) {
  let url = `/api/v1/integration/whatsapp/list`

  /** @type {ResponsePromise<WhatsAppIntegrationListResponse,WhatsAppIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {ResponsePromise<WhatsAppIntegrationFetchResponse,never>}
 */
export function fetchWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/fetch`

  /** @type {ResponsePromise<WhatsAppIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export async function createWhatsAppIntegration(client, request) {
  const url = `/api/v1/integration/whatsapp/create`

  /** @type {WhatsAppIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   phoneNumberId?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsAppIntegrationUpdateRequest} request
 * @returns {Promise<WhatsAppIntegrationUpdateResponse>}
 */
export async function updateWhatsAppIntegration(client, whatsappId, request) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/update`

  /** @type {WhatsAppIntegrationUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export async function deleteWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/delete`

  /** @type {WhatsAppIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationSetupResponse>}
 */
export async function setupWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/setup`

  /** @type {WhatsAppIntegrationSetupResponse} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
