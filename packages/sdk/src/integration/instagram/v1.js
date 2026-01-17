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
 * }} InstagramIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listInstagramIntegrations']['responses']['200']['content']['application/json']} InstagramIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listInstagramIntegrations']['responses']['200']['content']['application/jsonl']} InstagramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {InstagramIntegrationListRequest} [request]
 * @returns {ResponsePromise<InstagramIntegrationListResponse,InstagramIntegrationListStreamType>}
 */
export function listInstagramIntegrations(client, request) {
  let url = `/api/v1/integration/instagram/list`

  /** @type {ResponsePromise<InstagramIntegrationListResponse,InstagramIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {ResponsePromise<InstagramIntegrationFetchResponse,never>}
 */
export function fetchInstagramIntegration(client, instagramId) {
  const url = `/api/v1/integration/instagram/${instagramId}/fetch`

  /** @type {ResponsePromise<InstagramIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationCreateRequestBody
 *
 * @typedef {InstagramIntegrationCreateRequestBody} InstagramIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationCreateResponseBody
 *
 * @typedef {InstagramIntegrationCreateResponseBody} InstagramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {InstagramIntegrationCreateRequest} request
 * @returns {Promise<InstagramIntegrationCreateResponse>}
 */
export async function createInstagramIntegration(client, request) {
  const url = `/api/v1/integration/instagram/create`

  /** @type {InstagramIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {InstagramIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationUpdateRequestBody
 *
 * @typedef {InstagramIntegrationUpdateRequestBody} InstagramIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationUpdateResponseBody
 *
 * @typedef {InstagramIntegrationUpdateResponseBody} InstagramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @param {InstagramIntegrationUpdateRequest} request
 * @returns {Promise<InstagramIntegrationUpdateResponse>}
 */
export async function updateInstagramIntegration(client, instagramId, request) {
  const url = `/api/v1/integration/instagram/${instagramId}/update`

  /** @type {InstagramIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {InstagramIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationDeleteRequestBody
 *
 * @typedef {InstagramIntegrationDeleteRequestBody} InstagramIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationDeleteResponseBody
 *
 * @typedef {InstagramIntegrationDeleteResponseBody} InstagramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {Promise<InstagramIntegrationDeleteResponse>}
 */
export async function deleteInstagramIntegration(client, instagramId) {
  const url = `/api/v1/integration/instagram/${instagramId}/delete`

  /** @type {InstagramIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {InstagramIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupInstagramIntegration']['requestBody']['content']['application/json']} InstagramIntegrationSetupRequestBody
 *
 * @typedef {InstagramIntegrationSetupRequestBody} InstagramIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupInstagramIntegration']['responses']['200']['content']['application/json']} InstagramIntegrationSetupResponseBody
 *
 * @typedef {InstagramIntegrationSetupResponseBody} InstagramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} instagramId
 * @returns {Promise<InstagramIntegrationSetupResponse>}
 */
export async function setupInstagramIntegration(client, instagramId) {
  const url = `/api/v1/integration/instagram/${instagramId}/setup`

  /** @type {InstagramIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {InstagramIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
