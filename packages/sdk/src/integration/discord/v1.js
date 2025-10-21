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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DiscordIntegrationCreateRequest} request
 * @returns {Promise<DiscordIntegrationCreateResponse>}
 */
export async function createDiscordIntegration(client, request) {
  const url = `/api/v1/integration/discord/create`

  /** @type {DiscordIntegrationCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationCreateRequestBody} */
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
 *   appId?: string,
 *   botToken?: string,
 *   publicKey?: string,
 *   handle?: string,
 *   contactCollection?: boolean,
 *   sessionDuration?: number,
 *   meta?: Record<string,any>,
 *   botId?: string,
 *   blueprintId?: string,
 *   model?: import('../../model/v1.js').Model
 * }} DiscordIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @param {DiscordIntegrationUpdateRequest} request
 * @returns {Promise<DiscordIntegrationUpdateResponse>}
 */
export async function updateDiscordIntegration(client, discordId, request) {
  const url = `/api/v1/integration/discord/${discordId}/update`

  /** @type {DiscordIntegrationUpdateResponse} */
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
 * @typedef {import('../../types/api/v1.js').operations['deleteDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationDeleteResponse>}
 */
export async function deleteDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/delete`

  /** @type {DiscordIntegrationDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['requestBody']['content']['application/json']} DiscordIntegrationSetupRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['setupDiscordIntegration']['responses']['200']['content']['application/json']} DiscordIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} discordId
 * @returns {Promise<DiscordIntegrationSetupResponse>}
 */
export async function setupDiscordIntegration(client, discordId) {
  const url = `/api/v1/integration/discord/${discordId}/setup`

  /** @type {DiscordIntegrationSetupResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DiscordIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
