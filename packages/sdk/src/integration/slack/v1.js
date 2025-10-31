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
 * }} SlackIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/json']} SlackIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSlackIntegrations']['responses']['200']['content']['application/jsonl']} SlackIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationListRequest} [request]
 * @returns {ResponsePromise<SlackIntegrationListResponse,SlackIntegrationListStreamType>}
 */
export function listSlackIntegrations(client, request) {
  let url = `/api/v1/integration/slack/list`

  /** @type {ResponsePromise<SlackIntegrationListResponse,SlackIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {ResponsePromise<SlackIntegrationFetchResponse,never>}
 */
export function fetchSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/fetch`

  /** @type {ResponsePromise<SlackIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationCreateRequestBody
 *
 * @typedef {SlackIntegrationCreateRequestBody} SlackIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationCreateResponseBody
 *
 * @typedef {SlackIntegrationCreateResponseBody} SlackIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SlackIntegrationCreateRequest} request
 * @returns {Promise<SlackIntegrationCreateResponse>}
 */
export async function createSlackIntegration(client, request) {
  const url = `/api/v1/integration/slack/create`

  /** @type {SlackIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SlackIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationUpdateRequestBody
 *
 * @typedef {SlackIntegrationUpdateRequestBody} SlackIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationUpdateResponseBody
 *
 * @typedef {SlackIntegrationUpdateResponseBody} SlackIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @param {SlackIntegrationUpdateRequest} request
 * @returns {Promise<SlackIntegrationUpdateResponse>}
 */
export async function updateSlackIntegration(client, slackId, request) {
  const url = `/api/v1/integration/slack/${slackId}/update`

  /** @type {SlackIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SlackIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationDeleteRequestBody
 *
 * @typedef {SlackIntegrationDeleteRequestBody} SlackIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationDeleteResponseBody
 *
 * @typedef {SlackIntegrationDeleteResponseBody} SlackIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationDeleteResponse>}
 */
export async function deleteSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/delete`

  /** @type {SlackIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SlackIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupSlackIntegration']['requestBody']['content']['application/json']} SlackIntegrationSetupRequestBody
 *
 * @typedef {SlackIntegrationSetupRequestBody} SlackIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupSlackIntegration']['responses']['200']['content']['application/json']} SlackIntegrationSetupResponseBody
 *
 * @typedef {SlackIntegrationSetupResponseBody} SlackIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} slackId
 * @returns {Promise<SlackIntegrationSetupResponse>}
 */
export async function setupSlackIntegration(client, slackId) {
  const url = `/api/v1/integration/slack/${slackId}/setup`

  /** @type {SlackIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SlackIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
