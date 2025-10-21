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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TelegramIntegrationCreateRequest} request
 * @returns {Promise<TelegramIntegrationCreateResponse>}
 */
export async function createTelegramIntegration(client, request) {
  const url = `/api/v1/integration/telegram/create`

  /** @type {TelegramIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationCreateRequestBody} */
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
 *   botToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} TelegramIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @param {TelegramIntegrationUpdateRequest} request
 * @returns {Promise<TelegramIntegrationUpdateResponse>}
 */
export async function updateTelegramIntegration(client, telegramId, request) {
  const url = `/api/v1/integration/telegram/${telegramId}/update`

  /** @type {TelegramIntegrationUpdateResponse} */
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
 * @typedef {import('../../types/api/v1.js').operations['deleteTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationDeleteResponse>}
 */
export async function deleteTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/delete`

  /** @type {TelegramIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['requestBody']['content']['application/json']} TelegramIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTelegramIntegration']['responses']['200']['content']['application/json']} TelegramIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} telegramId
 * @returns {Promise<TelegramIntegrationSetupResponse>}
 */
export async function setupTelegramIntegration(client, telegramId) {
  const url = `/api/v1/integration/telegram/${telegramId}/setup`

  /** @type {TelegramIntegrationSetupResponse} */
  const response = await client.clientFetch(url, {
    /** @type {TelegramIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
