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
 * }} MessengerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/json']} MessengerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMessengerIntegrations']['responses']['200']['content']['application/jsonl']} MessengerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationListRequest} [request]
 * @returns {ResponsePromise<MessengerIntegrationListResponse,MessengerIntegrationListStreamType>}
 */
export function listMessengerIntegrations(client, request) {
  let url = `/api/v1/integration/messenger/list`

  /** @type {ResponsePromise<MessengerIntegrationListResponse,MessengerIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {ResponsePromise<MessengerIntegrationFetchResponse,never>}
 */
export function fetchMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/fetch`

  /** @type {ResponsePromise<MessengerIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationCreateRequestBody
 *
 * @typedef {MessengerIntegrationCreateRequestBody} MessengerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationCreateResponseBody
 *
 * @typedef {MessengerIntegrationCreateResponseBody} MessengerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationCreateRequest} request
 * @returns {Promise<MessengerIntegrationCreateResponse>}
 */
export async function createMessengerIntegration(client, request) {
  const url = `/api/v1/integration/messenger/create`

  /** @type {MessengerIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationUpdateRequestBody
 *
 * @typedef {MessengerIntegrationUpdateRequestBody} MessengerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationUpdateResponseBody
 *
 * @typedef {MessengerIntegrationUpdateResponseBody} MessengerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @param {MessengerIntegrationUpdateRequest} request
 * @returns {Promise<MessengerIntegrationUpdateResponse>}
 */
export async function updateMessengerIntegration(client, messengerId, request) {
  const url = `/api/v1/integration/messenger/${messengerId}/update`

  /** @type {MessengerIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationDeleteRequestBody
 *
 * @typedef {MessengerIntegrationDeleteRequestBody} MessengerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationDeleteResponseBody
 *
 * @typedef {MessengerIntegrationDeleteResponseBody} MessengerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationDeleteResponse>}
 */
export async function deleteMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/delete`

  /** @type {MessengerIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationSetupRequestBody
 *
 * @typedef {MessengerIntegrationSetupRequestBody} MessengerIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationSetupResponseBody
 *
 * @typedef {MessengerIntegrationSetupResponseBody} MessengerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationSetupResponse>}
 */
export async function setupMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/setup`

  /** @type {MessengerIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
