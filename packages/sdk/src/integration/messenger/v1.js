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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MessengerIntegrationCreateRequest} request
 * @returns {Promise<MessengerIntegrationCreateResponse>}
 */
export async function createMessengerIntegration(client, request) {
  const url = `/api/v1/integration/messenger/create`

  /** @type {MessengerIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationCreateRequestBody} */
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
 *   accessToken?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   attachments?: boolean,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} MessengerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @param {MessengerIntegrationUpdateRequest} request
 * @returns {Promise<MessengerIntegrationUpdateResponse>}
 */
export async function updateMessengerIntegration(client, messengerId, request) {
  const url = `/api/v1/integration/messenger/${messengerId}/update`

  /** @type {MessengerIntegrationUpdateResponse} */
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
 * @typedef {import('../../types/api/v1.js').operations['deleteMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationDeleteResponse>}
 */
export async function deleteMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/delete`

  /** @type {MessengerIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['requestBody']['content']['application/json']} MessengerIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupMessengerIntegration']['responses']['200']['content']['application/json']} MessengerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} messengerId
 * @returns {Promise<MessengerIntegrationSetupResponse>}
 */
export async function setupMessengerIntegration(client, messengerId) {
  const url = `/api/v1/integration/messenger/${messengerId}/setup`

  /** @type {MessengerIntegrationSetupResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MessengerIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
