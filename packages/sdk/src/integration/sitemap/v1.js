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
 * @typedef {SitemapInstance} SitemapListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SitemapInstance
 * }} SitemapListStreamItem
 *
 * @typedef {SitemapListStreamItem} SitemapListStreamType
 *
 * @param {ChatBotKitClient} client
 * @returns {import('../../client.js').ResponsePromise<SitemapListResponse,SitemapListStreamType>}
 */
export function sitemapList(client) {
  return client.clientFetch(`/api/v1/integration/sitemap/list`)
}

/**
 * @typedef {SitemapInstance} SitemapFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} sitemapId
 * @returns {Promise<SitemapFetchResponse>}
 */
export async function sitemapFetch(client, sitemapId) {
  return client.clientFetch(`/api/v1/integration/sitemap/${sitemapId}/fetch`)
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
  return client.clientFetch(`/api/v1/integration/sitemap/create`, {
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
  return client.clientFetch(`/api/v1/integration/sitemap/${sitemapId}/update`, {
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
  return client.clientFetch(`/api/v1/integration/sitemap/${sitemapId}/delete`, {
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
  return client.clientFetch(`/api/v1/integration/sitemap/${sitemapId}/sync`, {
    data: {},
  })
}
