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
 *   botId?: string,
 *   email?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} SupportIntegrationOptions
 *
 * @typedef {SupportIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SupportInegrationInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SupportIntegrationListRequest
 *
 * @typedef {{items: SupportInegrationInstance[]}} SupportIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SupportInegrationInstance
 * }} SupportIntegrationListStreamItem
 *
 * @typedef {SupportIntegrationListStreamItem} SupportIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationListRequest} [request]
 * @returns {ResponsePromise<SupportIntegrationListResponse,SupportIntegrationListStreamType>}
 */
export function listSupportIntegrations(client, request) {
  let url = `/api/v1/integration/support/list`

  /** @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SupportInegrationInstance & {
 * }} SupportIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {ResponsePromise<SupportIntegrationFetchResponse,never>}
 */
export function fetchSupportIntegration(client, supportId) {
  const url = `/api/v1/integration/support/${supportId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchSupportIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {SupportIntegrationOptions & {botId: string}} SupportIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SupportIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationCreateRequest} request
 * @returns {Promise<SupportIntegrationCreateResponse>}
 */
export async function createSupportIntegration(client, request) {
  const url = `/api/v1/integration/support/create`

  /** @type {import('../../types/api/v1.js').operations['createSupportIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createSupportIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {SupportIntegrationOptions & {
 * }} SupportIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SupportIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @param {SupportIntegrationUpdateRequest} request
 * @returns {Promise<SupportIntegrationUpdateResponse>}
 */
export async function updateSupportIntegration(client, supportId, request) {
  const url = `/api/v1/integration/support/${supportId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateSupportIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateSupportIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SupportIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {Promise<SupportIntegrationDeleteResponse>}
 */
export async function deleteSupportIntegration(client, supportId) {
  const url = `/api/v1/integration/support/${supportId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteSupportIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteSupportIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
