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
 *   syncSchedule: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} SitemapOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & SitemapOptions} SitemapInstance
 */

/**
 * @typedef {{items: SitemapInstance[]}} SitemapListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SitemapInstance
 * }} SitemapListStreamItem
 *
 * @typedef {SitemapListStreamItem} SitemapListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} [cursor]
 * @returns {ResponsePromise<SitemapListResponse,SitemapListStreamType>}
 */
export function sitemapList(client, cursor) {
  let url = `/api/v1/integration/sitemap/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  /** @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listSitemapIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {SitemapInstance} SitemapFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapFetchResponse>}
 */
export async function sitemapFetch(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/fetch`

  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SitemapOptions} SitemapCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SitemapCreateRequest} request
 * @returns {Promise<SitemapCreateResponse>}
 */
export async function sitemapCreate(client, request) {
  const url = `/api/v1/integration/sitemap/create`

  const response = await client.clientFetch(url, {
    data: request,
  })

  return response
}

/**
 * @typedef {SitemapOptions} SitemapUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SitemapUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @param {SitemapUpdateRequest} request
 * @returns {Promise<SitemapUpdateResponse>}
 */
export async function sitemapUpdate(client, sitemapId, request) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/update`

  const response = await client.clientFetch(url, {
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SitemapDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapDeleteResponse>}
 */
export async function sitemapDelete(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/delete`

  const response = await client.clientFetch(url, {
    data: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SitemapSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapSyncResponse>}
 */
export async function sitemapSync(client, sitemapId) {
  const url = `/api/v1/integration/sitemap/${sitemapId}/sync`

  const response = await client.clientFetch(url, {
    data: {},
  })

  return response
}
