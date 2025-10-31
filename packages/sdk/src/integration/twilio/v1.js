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
 * }} TwilioIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/json']} TwilioIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/jsonl']} TwilioIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationListRequest} [request]
 * @returns {ResponsePromise<TwilioIntegrationListResponse,TwilioIntegrationListStreamType>}
 */
export function listTwilioIntegrations(client, request) {
  let url = `/api/v1/integration/twilio/list`

  /** @type {ResponsePromise<TwilioIntegrationListResponse,TwilioIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {ResponsePromise<TwilioIntegrationFetchResponse,never>}
 */
export function fetchTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/fetch`

  /** @type {ResponsePromise<TwilioIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationCreateRequestBody
 *
 * @typedef {TwilioIntegrationCreateRequestBody} TwilioIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationCreateResponseBody
 *
 * @typedef {TwilioIntegrationCreateResponseBody} TwilioIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationCreateRequest} request
 * @returns {Promise<TwilioIntegrationCreateResponse>}
 */
export async function createTwilioIntegration(client, request) {
  const url = `/api/v1/integration/twilio/create`

  /** @type {TwilioIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TwilioIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationUpdateRequestBody
 *
 * @typedef {TwilioIntegrationUpdateRequestBody} TwilioIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationUpdateResponseBody
 *
 * @typedef {TwilioIntegrationUpdateResponseBody} TwilioIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @param {TwilioIntegrationUpdateRequest} request
 * @returns {Promise<TwilioIntegrationUpdateResponse>}
 */
export async function updateTwilioIntegration(client, twilioId, request) {
  const url = `/api/v1/integration/twilio/${twilioId}/update`

  /** @type {TwilioIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TwilioIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationDeleteRequestBody
 *
 * @typedef {TwilioIntegrationDeleteRequestBody} TwilioIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationDeleteResponseBody
 *
 * @typedef {TwilioIntegrationDeleteResponseBody} TwilioIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationDeleteResponse>}
 */
export async function deleteTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/delete`

  /** @type {TwilioIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TwilioIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['requestBody']['content']['application/json']} TwilioIntegrationSetupRequestBody
 *
 * @typedef {TwilioIntegrationSetupRequestBody} TwilioIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTwilioIntegration']['responses']['200']['content']['application/json']} TwilioIntegrationSetupResponseBody
 *
 * @typedef {TwilioIntegrationSetupResponseBody} TwilioIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationSetupResponse>}
 */
export async function setupTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/setup`

  /** @type {TwilioIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TwilioIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
