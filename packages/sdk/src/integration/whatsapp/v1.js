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
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationCreateRequestBody
 *
 * @typedef {WhatsAppIntegrationCreateRequestBody} WhatsAppIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationCreateResponseBody
 *
 * @typedef {WhatsAppIntegrationCreateResponseBody} WhatsAppIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WhatsAppIntegrationCreateRequest} request
 * @returns {Promise<WhatsAppIntegrationCreateResponse>}
 */
export async function createWhatsAppIntegration(client, request) {
  const url = `/api/v1/integration/whatsapp/create`

  /** @type {WhatsAppIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationUpdateRequestBody
 *
 * @typedef {WhatsAppIntegrationUpdateRequestBody} WhatsAppIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationUpdateResponseBody
 *
 * @typedef {WhatsAppIntegrationUpdateResponseBody} WhatsAppIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @param {WhatsAppIntegrationUpdateRequest} request
 * @returns {Promise<WhatsAppIntegrationUpdateResponse>}
 */
export async function updateWhatsAppIntegration(client, whatsappId, request) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/update`

  /** @type {WhatsAppIntegrationUpdateResponseBody} */
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
 * @typedef {WhatsAppIntegrationDeleteRequestBody} WhatsAppIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationDeleteResponseBody
 *
 * @typedef {WhatsAppIntegrationDeleteResponseBody} WhatsAppIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationDeleteResponse>}
 */
export async function deleteWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/delete`

  /** @type {WhatsAppIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['requestBody']['content']['application/json']} WhatsAppIntegrationSetupRequestBody
 *
 * @typedef {WhatsAppIntegrationSetupRequestBody} WhatsAppIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWhatsAppIntegration']['responses']['200']['content']['application/json']} WhatsAppIntegrationSetupResponseBody
 *
 * @typedef {WhatsAppIntegrationSetupResponseBody} WhatsAppIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} whatsappId
 * @returns {Promise<WhatsAppIntegrationSetupResponse>}
 */
export async function setupWhatsAppIntegration(client, whatsappId) {
  const url = `/api/v1/integration/whatsapp/${whatsappId}/setup`

  /** @type {WhatsAppIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WhatsAppIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
