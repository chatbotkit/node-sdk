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
 * }} SitemapIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/json']} SitemapIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/jsonl']} SitemapIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationListRequest} [request]
 * @returns {ResponsePromise<SitemapIntegrationListResponse,SitemapIntegrationListStreamType>}
 */
export function listSitemapIntegrations(client, request) {
  let url = `/api/v1/integration/sitemap/list`

  /** @type {ResponsePromise<SitemapIntegrationListResponse,SitemapIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {ResponsePromise<SitemapIntegrationFetchResponse,never>}
 */
export function fetchSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/fetch`

  /** @type {ResponsePromise<SitemapIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   datasetId: string,
 *   url?: string,
 *   glob?: string,
 *   selectors?: string,
 *   javascript?: boolean,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SitemapIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationCreateRequest} request
 * @returns {Promise<SitemapIntegrationCreateResponse>}
 */
export async function createSitemapIntegration(client, request) {
  const url = `/api/v1/integration/sitemap/create`

  /** @type {SitemapIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SitemapIntegrationCreateRequestBody} */
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
 *   url?: string,
 *   glob?: string,
 *   selectors?: string,
 *   javascript?: boolean,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SitemapIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @param {SitemapIntegrationUpdateRequest} request
 * @returns {Promise<SitemapIntegrationUpdateResponse>}
 */
export async function updateSitemapIntegration(client, sitemapId, request) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/update`

  /** @type {SitemapIntegrationUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SitemapIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationDeleteResponse>}
 */
export async function deleteSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/delete`

  /** @type {SitemapIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SitemapIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['syncSitemapIntegration']['requestBody']['content']['application/json']} SitemapIntegrationSyncRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['syncSitemapIntegration']['responses']['200']['content']['application/json']} SitemapIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationSyncResponse>}
 */
export async function syncSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/sync`

  /** @type {SitemapIntegrationSyncResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SitemapIntegrationSyncRequestBody} */
    record: {},
  })

  return response
}
