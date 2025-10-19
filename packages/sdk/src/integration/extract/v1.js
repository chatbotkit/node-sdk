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
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>
 * }} ExtractIntegrationOptions
 *
 * @typedef {ExtractIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ExtractInegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ExtractIntegrationListRequest
 *
 * @typedef {{items: ExtractInegrationInstance[]}} ExtractIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ExtractInegrationInstance
 * }} ExtractIntegrationListStreamItem
 *
 * @typedef {ExtractIntegrationListStreamItem} ExtractIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationListRequest} [request]
 * @returns {ResponsePromise<ExtractIntegrationListResponse,ExtractIntegrationListStreamType>}
 */
export function listExtractIntegrations(client, request) {
  let url = `/api/v1/integration/extract/list`

  /** @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {ExtractInegrationInstance & {
 * }} ExtractIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {ResponsePromise<ExtractIntegrationFetchResponse,never>}
 */
export function fetchExtractIntegration(client, extractId) {
  const url = `/api/v1/integration/extract/${extractId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchExtractIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {ExtractIntegrationOptions & {botId: string}} ExtractIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationCreateRequest} request
 * @returns {Promise<ExtractIntegrationCreateResponse>}
 */
export async function createExtractIntegration(client, request) {
  const url = `/api/v1/integration/extract/create`

  /** @type {import('../../types/api/v1.js').operations['createExtractIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createExtractIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {ExtractIntegrationOptions & {
 * }} ExtractIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @param {ExtractIntegrationUpdateRequest} request
 * @returns {Promise<ExtractIntegrationUpdateResponse>}
 */
export async function updateExtractIntegration(client, extractId, request) {
  const url = `/api/v1/integration/extract/${extractId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateExtractIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateExtractIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} ExtractIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {Promise<ExtractIntegrationDeleteResponse>}
 */
export async function deleteExtractIntegration(client, extractId) {
  const url = `/api/v1/integration/extract/${extractId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteExtractIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteExtractIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
