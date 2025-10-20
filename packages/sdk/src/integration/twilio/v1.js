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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number
 * }} TwilioIntegrationOptions
 *
 * @typedef {TwilioIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TwilioIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TwilioIntegrationListRequest
 *
 * @typedef {{items: TwilioIntegrationInstance[]}} TwilioIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TwilioIntegrationInstance
 * }} TwilioIntegrationListStreamItem
 *
 * @typedef {TwilioIntegrationListStreamItem} TwilioIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationListRequest} [request]
 * @returns {ResponsePromise<TwilioIntegrationListResponse,TwilioIntegrationListStreamType>}
 */
export function listTwilioIntegrations(client, request) {
  let url = `/api/v1/integration/twilio/list`

  /** @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listTwilioIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {TwilioIntegrationInstance & {
 * }} TwilioIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {ResponsePromise<TwilioIntegrationFetchResponse,never>}
 */
export function fetchTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchTwilioIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {TwilioIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TwilioIntegrationCreateRequest} request
 * @returns {Promise<TwilioIntegrationCreateResponse>}
 */
export async function createTwilioIntegration(client, request) {
  const url = `/api/v1/integration/twilio/create`

  /** @type {import('../../types/api/v1.js').operations['createTwilioIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createTwilioIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {TwilioIntegrationOptions & {
 *   model?: import('../../model/v1.js').Model
 * }} TwilioIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @param {TwilioIntegrationUpdateRequest} request
 * @returns {Promise<TwilioIntegrationUpdateResponse>}
 */
export async function updateTwilioIntegration(client, twilioId, request) {
  const url = `/api/v1/integration/twilio/${twilioId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateTwilioIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateTwilioIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationDeleteResponse>}
 */
export async function deleteTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteTwilioIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} TwilioIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} twilioId
 * @returns {Promise<TwilioIntegrationSetupResponse>}
 */
export async function setupTwilioIntegration(client, twilioId) {
  const url = `/api/v1/integration/twilio/${twilioId}/setup`

  /** @type {import('../../types/api/v1.js').operations['setupTwilioIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['setupTwilioIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
