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
 * }} GooglechatIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listGooglechatIntegrations']['responses']['200']['content']['application/json']} GooglechatIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listGooglechatIntegrations']['responses']['200']['content']['application/jsonl']} GooglechatIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {GooglechatIntegrationListRequest} [request]
 * @returns {ResponsePromise<GooglechatIntegrationListResponse,GooglechatIntegrationListStreamType>}
 */
export function listGooglechatIntegrations(client, request) {
  let url = `/api/v1/integration/googlechat/list`

  /** @type {ResponsePromise<GooglechatIntegrationListResponse,GooglechatIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @returns {ResponsePromise<GooglechatIntegrationFetchResponse,never>}
 */
export function fetchGooglechatIntegration(client, googlechatId) {
  const url = `/api/v1/integration/googlechat/${googlechatId}/fetch`

  /** @type {ResponsePromise<GooglechatIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationCreateRequestBody
 * @typedef {GooglechatIntegrationCreateRequestBody} GooglechatIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationCreateResponseBody
 * @typedef {GooglechatIntegrationCreateResponseBody} GooglechatIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {GooglechatIntegrationCreateRequest} request
 * @returns {Promise<GooglechatIntegrationCreateResponse>}
 */
export async function createGooglechatIntegration(client, request) {
  const url = `/api/v1/integration/googlechat/create`

  /** @type {GooglechatIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {GooglechatIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationUpdateRequestBody
 * @typedef {GooglechatIntegrationUpdateRequestBody} GooglechatIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationUpdateResponseBody
 * @typedef {GooglechatIntegrationUpdateResponseBody} GooglechatIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @param {GooglechatIntegrationUpdateRequest} request
 * @returns {Promise<GooglechatIntegrationUpdateResponse>}
 */
export async function updateGooglechatIntegration(
  client,
  googlechatId,
  request
) {
  const url = `/api/v1/integration/googlechat/${googlechatId}/update`

  /** @type {GooglechatIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {GooglechatIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationDeleteRequestBody
 * @typedef {GooglechatIntegrationDeleteRequestBody} GooglechatIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationDeleteResponseBody
 * @typedef {GooglechatIntegrationDeleteResponseBody} GooglechatIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @param {GooglechatIntegrationDeleteRequest} [request]
 * @returns {Promise<GooglechatIntegrationDeleteResponse>}
 */
export async function deleteGooglechatIntegration(
  client,
  googlechatId,
  request
) {
  const url = `/api/v1/integration/googlechat/${googlechatId}/delete`

  /** @type {GooglechatIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {GooglechatIntegrationDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupGooglechatIntegration']['requestBody']['content']['application/json']} GooglechatIntegrationSetupRequestBody
 * @typedef {GooglechatIntegrationSetupRequestBody} GooglechatIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupGooglechatIntegration']['responses']['200']['content']['application/json']} GooglechatIntegrationSetupResponseBody
 * @typedef {GooglechatIntegrationSetupResponseBody} GooglechatIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} googlechatId
 * @returns {Promise<GooglechatIntegrationSetupResponse>}
 */
export async function setupGooglechatIntegration(client, googlechatId) {
  const url = `/api/v1/integration/googlechat/${googlechatId}/setup`

  /** @type {GooglechatIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {GooglechatIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
