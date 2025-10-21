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
 * }} ExtractIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/json']} ExtractIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listExtractIntegrations']['responses']['200']['content']['application/jsonl']} ExtractIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationListRequest} [request]
 * @returns {ResponsePromise<ExtractIntegrationListResponse,ExtractIntegrationListStreamType>}
 */
export function listExtractIntegrations(client, request) {
  let url = `/api/v1/integration/extract/list`

  /** @type {ResponsePromise<ExtractIntegrationListResponse,ExtractIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {ResponsePromise<ExtractIntegrationFetchResponse,never>}
 */
export function fetchExtractIntegration(client, extractId) {
  const url = `/api/v1/integration/extract/${extractId}/fetch`

  /** @type {ResponsePromise<ExtractIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botId: string,
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} ExtractIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationCreateRequest} request
 * @returns {Promise<ExtractIntegrationCreateResponse>}
 */
export async function createExtractIntegration(client, request) {
  const url = `/api/v1/integration/extract/create`

  /** @type {ExtractIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ExtractIntegrationCreateRequestBody} */
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
 *   botId?: string,
 *   schema?: Record<string,any>,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} ExtractIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @param {ExtractIntegrationUpdateRequest} request
 * @returns {Promise<ExtractIntegrationUpdateResponse>}
 */
export async function updateExtractIntegration(client, extractId, request) {
  const url = `/api/v1/integration/extract/${extractId}/update`

  /** @type {ExtractIntegrationUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ExtractIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {Promise<ExtractIntegrationDeleteResponse>}
 */
export async function deleteExtractIntegration(client, extractId) {
  const url = `/api/v1/integration/extract/${extractId}/delete`

  /** @type {ExtractIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ExtractIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}
