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
 *   name?: string,
 *   description?: string,
 *   theme?: string,
 *   layout?: string,
 *   title?: string,
 *   intro?: string,
 *   initial?: string,
 *   placeholder?: string,
 *   language?: string,
 *   origin?: string,
 *   stream?: boolean,
 *   verbose?: boolean,
 *   tools?: boolean,
 *   unfurl?: boolean,
 *   math?: boolean,
 *   attachments?: boolean,
 *   autoScroll?: boolean,
 *   startFirst?: boolean,
 *   contactCollection?: boolean,
 *   exportConversation?: boolean,
 *   restartConversation?: boolean,
 *   maxsimize?: boolean,
 *   messagePeek?: boolean,
 *   poweredBy?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>
 * }} WidgetIntegrationOptions
 *
 * @typedef {WidgetIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} WidgetInegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} WidgetIntegrationListRequest
 *
 * @typedef {{items: WidgetInegrationInstance[]}} WidgetIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: WidgetInegrationInstance
 * }} WidgetIntegrationListStreamItem
 *
 * @typedef {WidgetIntegrationListStreamItem} WidgetIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationListRequest} [request]
 * @returns {ResponsePromise<WidgetIntegrationListResponse,WidgetIntegrationListStreamType>}
 */
export function listWidgetIntegrations(client, request) {
  let url = `/api/v1/integration/widget/list`

  /** @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listWidgetIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {WidgetInegrationInstance & {
 * }} WidgetIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationFetchResponse>}
 */
export async function fetchWidgetIntegration(client, widgetId) {
  const url = `/api/v1/integration/widget/${widgetId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchWidgetIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {WidgetIntegrationOptions & {
 * }} WidgetIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {WidgetIntegrationCreateRequest} request
 * @returns {Promise<WidgetIntegrationCreateResponse>}
 */
export async function createWidgetIntegration(client, request) {
  const url = `/api/v1/integration/widget/create`

  /** @type {import('../../types/api/v1.js').operations['createWidgetIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createWidgetIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {WidgetIntegrationOptions & {
 * }} WidgetIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @param {WidgetIntegrationUpdateRequest} request
 * @returns {Promise<WidgetIntegrationUpdateResponse>}
 */
export async function updateWidgetIntegration(client, widgetId, request) {
  const url = `/api/v1/integration/widget/${widgetId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateWidgetIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateWidgetIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} WidgetIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} widgetId
 * @returns {Promise<WidgetIntegrationDeleteResponse>}
 */
export async function deleteWidgetIntegration(client, widgetId) {
  const url = `/api/v1/integration/widget/${widgetId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteWidgetIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
