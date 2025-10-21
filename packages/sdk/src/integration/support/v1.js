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
 * }} SupportIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/json']} SupportIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSupportIntegrations']['responses']['200']['content']['application/jsonl']} SupportIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationListRequest} [request]
 * @returns {ResponsePromise<SupportIntegrationListResponse,SupportIntegrationListStreamType>}
 */
export function listSupportIntegrations(client, request) {
  let url = `/api/v1/integration/support/list`

  /** @type {ResponsePromise<SupportIntegrationListResponse,SupportIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {ResponsePromise<SupportIntegrationFetchResponse,never>}
 */
export function fetchSupportIntegration(client, supportId) {
  const url = `/api/v1/integration/support/${supportId}/fetch`

  /** @type {ResponsePromise<SupportIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   botId: string,
 *   email?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SupportIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SupportIntegrationCreateRequest} request
 * @returns {Promise<SupportIntegrationCreateResponse>}
 */
export async function createSupportIntegration(client, request) {
  const url = `/api/v1/integration/support/create`

  /** @type {SupportIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SupportIntegrationCreateRequestBody} */
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
 *   email?: string,
 *   syncSchedule?: string,
 *   expiresIn?: number
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SupportIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @param {SupportIntegrationUpdateRequest} request
 * @returns {Promise<SupportIntegrationUpdateResponse>}
 */
export async function updateSupportIntegration(client, supportId, request) {
  const url = `/api/v1/integration/support/${supportId}/update`

  /** @type {SupportIntegrationUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SupportIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSupportIntegration']['requestBody']['content']['application/json']} SupportIntegrationDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSupportIntegration']['responses']['200']['content']['application/json']} SupportIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} supportId
 * @returns {Promise<SupportIntegrationDeleteResponse>}
 */
export async function deleteSupportIntegration(client, supportId) {
  const url = `/api/v1/integration/support/${supportId}/delete`

  /** @type {SupportIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SupportIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}
