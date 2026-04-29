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
 * }} TeamsIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listTeamsIntegrations']['responses']['200']['content']['application/json']} TeamsIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listTeamsIntegrations']['responses']['200']['content']['application/jsonl']} TeamsIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamsIntegrationListRequest} [request]
 * @returns {ResponsePromise<TeamsIntegrationListResponse,TeamsIntegrationListStreamType>}
 */
export function listTeamsIntegrations(client, request) {
  let url = `/api/v1/integration/teams/list`

  /** @type {ResponsePromise<TeamsIntegrationListResponse,TeamsIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @returns {ResponsePromise<TeamsIntegrationFetchResponse,never>}
 */
export function fetchTeamsIntegration(client, teamsId) {
  const url = `/api/v1/integration/teams/${teamsId}/fetch`

  /** @type {ResponsePromise<TeamsIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationCreateRequestBody
 *
 * @typedef {TeamsIntegrationCreateRequestBody} TeamsIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationCreateResponseBody
 *
 * @typedef {TeamsIntegrationCreateResponseBody} TeamsIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {TeamsIntegrationCreateRequest} request
 * @returns {Promise<TeamsIntegrationCreateResponse>}
 */
export async function createTeamsIntegration(client, request) {
  const url = `/api/v1/integration/teams/create`

  /** @type {TeamsIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TeamsIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationUpdateRequestBody
 *
 * @typedef {TeamsIntegrationUpdateRequestBody} TeamsIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationUpdateResponseBody
 *
 * @typedef {TeamsIntegrationUpdateResponseBody} TeamsIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @param {TeamsIntegrationUpdateRequest} request
 * @returns {Promise<TeamsIntegrationUpdateResponse>}
 */
export async function updateTeamsIntegration(client, teamsId, request) {
  const url = `/api/v1/integration/teams/${teamsId}/update`

  /** @type {TeamsIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TeamsIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationDeleteRequestBody
 *
 * @typedef {TeamsIntegrationDeleteRequestBody} TeamsIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationDeleteResponseBody
 *
 * @typedef {TeamsIntegrationDeleteResponseBody} TeamsIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @param {TeamsIntegrationDeleteRequest} [request]
 * @returns {Promise<TeamsIntegrationDeleteResponse>}
 */
export async function deleteTeamsIntegration(client, teamsId, request) {
  const url = `/api/v1/integration/teams/${teamsId}/delete`

  /** @type {TeamsIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TeamsIntegrationDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupTeamsIntegration']['requestBody']['content']['application/json']} TeamsIntegrationSetupRequestBody
 *
 * @typedef {TeamsIntegrationSetupRequestBody} TeamsIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupTeamsIntegration']['responses']['200']['content']['application/json']} TeamsIntegrationSetupResponseBody
 *
 * @typedef {TeamsIntegrationSetupResponseBody} TeamsIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} teamsId
 * @returns {Promise<TeamsIntegrationSetupResponse>}
 */
export async function setupTeamsIntegration(client, teamsId) {
  const url = `/api/v1/integration/teams/${teamsId}/setup`

  /** @type {TeamsIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {TeamsIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
