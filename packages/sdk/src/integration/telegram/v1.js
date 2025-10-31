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
 * }} TelegramIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/json']} TelegramIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTelegramIntegrations']['responses']['200']['content']['application/jsonl']} TelegramIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationListRequest} [request]
 * @returns {ResponsePromise<TelegramIntegrationListResponse,TelegramIntegrationListStreamType>}
 */
export function listTelegramIntegrations(client, request) {
  let url = `/api/v1/integration/telegram/list`

  /** @type {ResponsePromise<TelegramIntegrationListResponse,TelegramIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {ResponsePromise<TelegramIntegrationFetchResponse,never>}
 */
export function fetchTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/fetch`

  /** @type {ResponsePromise<TelegramIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationCreateRequestBody
 *
 * @typedef {TelegramIntegrationCreateRequestBody} TelegramIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationCreateResponseBody
 *
 * @typedef {TelegramIntegrationCreateResponseBody} TelegramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationCreateRequest} request
 * @returns {Promise<TelegramIntegrationCreateResponse>}
 */
export async function createTelegramIntegration(client, request) {
  const url = `/api/v1/integration/telegram/create`

  /** @type {TelegramIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationUpdateRequestBody
 *
 * @typedef {TelegramIntegrationUpdateRequestBody} TelegramIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationUpdateResponseBody
 *
 * @typedef {TelegramIntegrationUpdateResponseBody} TelegramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @param {TelegramIntegrationUpdateRequest} request
 * @returns {Promise<TelegramIntegrationUpdateResponse>}
 */
export async function updateTelegramIntegration(client, telegramId, request) {
  const url = `/api/v1/integration/telegram/${telegramId}/update`

  /** @type {TelegramIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationDeleteRequestBody
 *
 * @typedef {TelegramIntegrationDeleteRequestBody} TelegramIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationDeleteResponseBody
 *
 * @typedef {TelegramIntegrationDeleteResponseBody} TelegramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationDeleteResponse>}
 */
export async function deleteTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/delete`

  /** @type {TelegramIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationSetupRequestBody
 *
 * @typedef {TelegramIntegrationSetupRequestBody} TelegramIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationSetupResponseBody
 *
 * @typedef {TelegramIntegrationSetupResponseBody} TelegramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationSetupResponse>}
 */
export async function setupTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/setup`

  /** @type {TelegramIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
