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
 *   url?: string,
 *   glob?: string,
 *   selectors?: string,
 *   javascript?: boolean,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} SitemapIntegrationOptions
 *
 * @typedef {SitemapIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SitemapInegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SitemapIntegrationListRequest
 *
 * @typedef {{items: SitemapInegrationInstance[]}} SitemapIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SitemapInegrationInstance
 * }} SitemapIntegrationListStreamItem
 *
 * @typedef {SitemapIntegrationListStreamItem} SitemapIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationListRequest} [request]
 * @returns {ResponsePromise<SitemapIntegrationListResponse,SitemapIntegrationListStreamType>}
 */
export function listSitemapIntegrations(client, request) {
  let url = `/api/v1/integration/sitemap/list`

  /** @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SitemapInegrationInstance & {
 * }} SitemapIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {ResponsePromise<SitemapIntegrationFetchResponse,never>}
 */
export function fetchSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchSitemapIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {SitemapIntegrationOptions & {datasetId: string}} SitemapIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapIntegrationCreateRequest} request
 * @returns {Promise<SitemapIntegrationCreateResponse>}
 */
export async function createSitemapIntegration(client, request) {
  const url = `/api/v1/integration/sitemap/create`

  /** @type {import('../../types/api/v1.js').operations['createSitemapIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createSitemapIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {SitemapIntegrationOptions & {
 * }} SitemapIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @param {SitemapIntegrationUpdateRequest} request
 * @returns {Promise<SitemapIntegrationUpdateResponse>}
 */
export async function updateSitemapIntegration(client, sitemapId, request) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateSitemapIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateSitemapIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationDeleteResponse>}
 */
export async function deleteSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteSitemapIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SitemapIntegrationSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapIntegrationSyncResponse>}
 */
export async function syncSitemapIntegration(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/sync`

  /** @type {import('../../types/api/v1.js').operations['syncSitemapIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['syncSitemapIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
