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
 * }} NotionIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/json']} NotionIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listNotionIntegrations']['responses']['200']['content']['application/jsonl']} NotionIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationListRequest} [request]
 * @returns {ResponsePromise<NotionIntegrationListResponse,NotionIntegrationListStreamType>}
 */
export function listNotionIntegrations(client, request) {
  let url = `/api/v1/integration/notion/list`

  /** @type {ResponsePromise<NotionIntegrationListResponse,NotionIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {ResponsePromise<NotionIntegrationFetchResponse,never>}
 */
export function fetchNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/fetch`

  /** @type {ResponsePromise<NotionIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   datasetId: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} NotionIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {NotionIntegrationCreateRequest} request
 * @returns {Promise<NotionIntegrationCreateResponse>}
 */
export async function createNotionIntegration(client, request) {
  const url = `/api/v1/integration/notion/create`

  /** @type {NotionIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {NotionIntegrationCreateRequestBody} */
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
 *   datasetId?: string,
 *   token?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} NotionIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @param {NotionIntegrationUpdateRequest} request
 * @returns {Promise<NotionIntegrationUpdateResponse>}
 */
export async function updateNotionIntegration(client, notionId, request) {
  const url = `/api/v1/integration/notion/${notionId}/update`

  /** @type {NotionIntegrationUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {NotionIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationDeleteResponse>}
 */
export async function deleteNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/delete`

  /** @type {NotionIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {NotionIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['requestBody']['content']['application/json']} NotionIntegrationSyncRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['syncNotionIntegration']['responses']['200']['content']['application/json']} NotionIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} notionId
 * @returns {Promise<NotionIntegrationSyncResponse>}
 */
export async function syncNotionIntegration(client, notionId) {
  const url = `/api/v1/integration/notion/${notionId}/sync`

  /** @type {NotionIntegrationSyncResponse} */
  const response = await client.clientFetch(url, {
    /** @type {NotionIntegrationSyncRequestBody} */
    record: {},
  })

  return response
}
