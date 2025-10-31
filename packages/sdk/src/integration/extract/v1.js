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
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationCreateRequestBody
 *
 * @typedef {ExtractIntegrationCreateRequestBody} ExtractIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationCreateResponseBody
 *
 * @typedef {ExtractIntegrationCreateResponseBody} ExtractIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ExtractIntegrationCreateRequest} request
 * @returns {Promise<ExtractIntegrationCreateResponse>}
 */
export async function createExtractIntegration(client, request) {
  const url = `/api/v1/integration/extract/create`

  /** @type {ExtractIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ExtractIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['requestBody']['content']['application/json']} ExtractIntegrationUpdateRequestBody
 *
 * @typedef {ExtractIntegrationUpdateRequestBody} ExtractIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationUpdateResponseBody
 *
 * @typedef {ExtractIntegrationUpdateResponseBody} ExtractIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @param {ExtractIntegrationUpdateRequest} request
 * @returns {Promise<ExtractIntegrationUpdateResponse>}
 */
export async function updateExtractIntegration(client, extractId, request) {
  const url = `/api/v1/integration/extract/${extractId}/update`

  /** @type {ExtractIntegrationUpdateResponseBody} */
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
 * @typedef {ExtractIntegrationDeleteRequestBody} ExtractIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteExtractIntegration']['responses']['200']['content']['application/json']} ExtractIntegrationDeleteResponseBody
 *
 * @typedef {ExtractIntegrationDeleteResponseBody} ExtractIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} extractId
 * @returns {Promise<ExtractIntegrationDeleteResponse>}
 */
export async function deleteExtractIntegration(client, extractId) {
  const url = `/api/v1/integration/extract/${extractId}/delete`

  /** @type {ExtractIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ExtractIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}
