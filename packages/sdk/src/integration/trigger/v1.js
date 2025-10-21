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
 * }} TriggerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/json']} TriggerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTriggerIntegrations']['responses']['200']['content']['application/jsonl']} TriggerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationListRequest} [request]
 * @returns {ResponsePromise<TriggerIntegrationListResponse,TriggerIntegrationListStreamType>}
 */
export function listTriggerIntegrations(client, request) {
  let url = `/api/v1/integration/trigger/list`

  /** @type {ResponsePromise<TriggerIntegrationListResponse,TriggerIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {ResponsePromise<TriggerIntegrationFetchResponse,never>}
 */
export function fetchTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/fetch`

  /** @type {ResponsePromise<TriggerIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationCreateRequestBody
 *
 * @typedef {TriggerIntegrationCreateRequestBody} TriggerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationCreateResponseBody
 *
 * @typedef {TriggerIntegrationCreateResponseBody} TriggerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TriggerIntegrationCreateRequest} request
 * @returns {Promise<TriggerIntegrationCreateResponse>}
 */
export async function createTriggerIntegration(client, request) {
  const url = `/api/v1/integration/trigger/create`

  /** @type {TriggerIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationUpdateRequestBody
 *
 * @typedef {TriggerIntegrationUpdateRequestBody} TriggerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationUpdateResponseBody
 *
 * @typedef {TriggerIntegrationUpdateResponseBody} TriggerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationUpdateRequest} request
 * @returns {Promise<TriggerIntegrationUpdateResponse>}
 */
export async function updateTriggerIntegration(client, triggerId, request) {
  const url = `/api/v1/integration/trigger/${triggerId}/update`

  /** @type {TriggerIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationDeleteRequestBody
 *
 * @typedef {TriggerIntegrationDeleteRequestBody} TriggerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationDeleteResponseBody
 *
 * @typedef {TriggerIntegrationDeleteResponseBody} TriggerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationDeleteResponse>}
 */
export async function deleteTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/delete`

  /** @type {TriggerIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationSetupRequestBody
 *
 * @typedef {TriggerIntegrationSetupRequestBody} TriggerIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationSetupResponseBody
 *
 * @typedef {TriggerIntegrationSetupResponseBody} TriggerIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @returns {Promise<TriggerIntegrationSetupResponse>}
 */
export async function setupTriggerIntegration(client, triggerId) {
  const url = `/api/v1/integration/trigger/${triggerId}/setup`

  /** @type {TriggerIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['requestBody']['content']['application/json']} TriggerIntegrationInvokeRequestBody
 *
 * @typedef {TriggerIntegrationInvokeRequestBody} TriggerIntegrationInvokeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['invokeTriggerIntegration']['responses']['200']['content']['application/json']} TriggerIntegrationInvokeResponseBody
 *
 * @typedef {TriggerIntegrationInvokeResponseBody} TriggerIntegrationInvokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} triggerId
 * @param {TriggerIntegrationInvokeRequest} request
 * @returns {Promise<TriggerIntegrationInvokeResponse>}
 */
export async function invokeTriggerIntegration(client, triggerId, request) {
  const url = `/api/v1/integration/trigger/${triggerId}/invoke`

  /** @type {TriggerIntegrationInvokeResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TriggerIntegrationInvokeRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
