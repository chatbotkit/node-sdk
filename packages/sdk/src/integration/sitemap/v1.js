/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {import('../../client.js').ResponsePromise<SitemapListResponse,SitemapListStreamType>}
 */
export function sitemapList(client, cursor) {
  let url = `/api/v1/integration/sitemap/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
