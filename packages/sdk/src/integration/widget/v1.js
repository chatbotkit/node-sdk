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
 * }} WidgetIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/json']} WidgetIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/jsonl']} WidgetIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationListRequest} [request]
 * @returns {ResponsePromise<WidgetIntegrationListResponse,WidgetIntegrationListStreamType>}
 */
export function listWidgetIntegrations(client, request) {
  let url = `/api/v1/integration/widget/list`

  /** @type {ResponsePromise<WidgetIntegrationListResponse,WidgetIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {ResponsePromise<WidgetIntegrationFetchResponse,never>}
 */
export function fetchWidgetIntegration(client, widgetId) {
  const url = `/api/v1/integration/widget/${widgetId}/fetch`

  /** @type {ResponsePromise<WidgetIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationCreateRequestBody
 *
 * @typedef {WidgetIntegrationCreateRequestBody} WidgetIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationCreateResponseBody
 *
 * @typedef {WidgetIntegrationCreateResponseBody} WidgetIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationCreateRequest} request
 * @returns {Promise<WidgetIntegrationCreateResponse>}
 */
export async function createWidgetIntegration(client, request) {
  const url = `/api/v1/integration/widget/create`

  /** @type {WidgetIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WidgetIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationUpdateRequestBody
 *
 * @typedef {WidgetIntegrationUpdateRequestBody} WidgetIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationUpdateResponseBody
 *
 * @typedef {WidgetIntegrationUpdateResponseBody} WidgetIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @param {WidgetIntegrationUpdateRequest} request
 * @returns {Promise<WidgetIntegrationUpdateResponse>}
 */
export async function updateWidgetIntegration(client, widgetId, request) {
  const url = `/api/v1/integration/widget/${widgetId}/update`

  /** @type {WidgetIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WidgetIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationDeleteRequestBody
 *
 * @typedef {WidgetIntegrationDeleteRequestBody} WidgetIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationDeleteResponseBody
 *
 * @typedef {WidgetIntegrationDeleteResponseBody} WidgetIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationDeleteResponse>}
 */
export async function deleteWidgetIntegration(client, widgetId) {
  const url = `/api/v1/integration/widget/${widgetId}/delete`

  /** @type {WidgetIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {WidgetIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupWidgetIntegration']['requestBody']['content']['application/json']} WidgetIntegrationSetupRequestBody
 *
 * @typedef {WidgetIntegrationSetupRequestBody} WidgetIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupWidgetIntegration']['responses']['200']['content']['application/json']} WidgetIntegrationSetupResponseBody
 *
 * @typedef {WidgetIntegrationSetupResponseBody} WidgetIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationSetupResponse>}
 */
export async function setupWidgetIntegration(client, widgetId) {
  const url = `/api/v1/integration/widget/${widgetId}/setup`

  /** @type {WidgetIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    method: 'POST',
    /** @type {WidgetIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
