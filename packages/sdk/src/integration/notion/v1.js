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
 *   datasetId?: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} NotionIntegrationOptions
 *
 * @typedef {NotionIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} NotionInegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} NotionIntegrationListRequest
 *
 * @typedef {{items: NotionInegrationInstance[]}} NotionIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: NotionInegrationInstance
 * }} NotionIntegrationListStreamItem
 *
 * @typedef {NotionIntegrationListStreamItem} NotionIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationListRequest} [request]
 * @returns {ResponsePromise<NotionIntegrationListResponse,NotionIntegrationListStreamType>}
 */
export function listNotionIntegrations(client, request) {
  let url = `/api/v1/integration/notion/list`

  /** @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {NotionInegrationInstance & {
 * }} NotionIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {ResponsePromise<NotionIntegrationFetchResponse,never>}
 */
export function fetchNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchNotionIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {NotionIntegrationOptions & {datasetId: string}} NotionIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} NotionIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationCreateRequest} request
 * @returns {Promise<NotionIntegrationCreateResponse>}
 */
export async function createNotionIntegration(client, request) {
  const url = `/api/v1/integration/notion/create`

  /** @type {import('../../types/api/v1.js').operations['createNotionIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createNotionIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {NotionIntegrationOptions & {
 * }} NotionIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} NotionIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @param {NotionIntegrationUpdateRequest} request
 * @returns {Promise<NotionIntegrationUpdateResponse>}
 */
export async function updateNotionIntegration(client, notionId, request) {
  const url = `/api/v1/integration/notion/${notionId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateNotionIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateNotionIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} NotionIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationDeleteResponse>}
 */
export async function deleteNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteNotionIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteNotionIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} NotionIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationSyncResponse>}
 */
export async function syncNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/sync`

  /** @type {import('../../types/api/v1.js').operations['syncNotionIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['syncNotionIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
