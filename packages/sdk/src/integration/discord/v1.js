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
 * }} DiscordIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/json']} DiscordIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDiscordIntegrations']['responses']['200']['content']['application/jsonl']} DiscordIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationListRequest} [request]
 * @returns {ResponsePromise<DiscordIntegrationListResponse,DiscordIntegrationListStreamType>}
 */
export function listDiscordIntegrations(client, request) {
  let url = `/api/v1/integration/discord/list`

  /** @type {ResponsePromise<DiscordIntegrationListResponse,DiscordIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {ResponsePromise<DiscordIntegrationFetchResponse,never>}
 */
export function fetchDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/fetch`

  /** @type {ResponsePromise<DiscordIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationCreateRequestBody
 *
 * @typedef {DiscordIntegrationCreateRequestBody} DiscordIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationCreateResponseBody
 *
 * @typedef {DiscordIntegrationCreateResponseBody} DiscordIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationCreateRequest} request
 * @returns {Promise<DiscordIntegrationCreateResponse>}
 */
export async function createDiscordIntegration(client, request) {
  const url = `/api/v1/integration/discord/create`

  /** @type {DiscordIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationUpdateRequestBody
 *
 * @typedef {DiscordIntegrationUpdateRequestBody} DiscordIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationUpdateResponseBody
 *
 * @typedef {DiscordIntegrationUpdateResponseBody} DiscordIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @param {DiscordIntegrationUpdateRequest} request
 * @returns {Promise<DiscordIntegrationUpdateResponse>}
 */
export async function updateDiscordIntegration(client, discordId, request) {
  const url = `/api/v1/integration/discord/${discordId}/update`

  /** @type {DiscordIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationDeleteRequestBody
 *
 * @typedef {DiscordIntegrationDeleteRequestBody} DiscordIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationDeleteResponseBody
 *
 * @typedef {DiscordIntegrationDeleteResponseBody} DiscordIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationDeleteResponse>}
 */
export async function deleteDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/delete`

  /** @type {DiscordIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationSetupRequestBody
 *
 * @typedef {DiscordIntegrationSetupRequestBody} DiscordIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationSetupResponseBody
 *
 * @typedef {DiscordIntegrationSetupResponseBody} DiscordIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationSetupResponse>}
 */
export async function setupDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/setup`

  /** @type {DiscordIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
