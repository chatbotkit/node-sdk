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
 * }} MicrosoftteamsIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMicrosoftteamsIntegrations']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMicrosoftteamsIntegrations']['responses']['200']['content']['application/jsonl']} MicrosoftteamsIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MicrosoftteamsIntegrationListRequest} [request]
 * @returns {ResponsePromise<MicrosoftteamsIntegrationListResponse,MicrosoftteamsIntegrationListStreamType>}
 */
export function listMicrosoftteamsIntegrations(client, request) {
  let url = `/api/v1/integration/microsoftteams/list`

  /** @type {ResponsePromise<MicrosoftteamsIntegrationListResponse,MicrosoftteamsIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @returns {ResponsePromise<MicrosoftteamsIntegrationFetchResponse,never>}
 */
export function fetchMicrosoftteamsIntegration(client, microsoftteamsId) {
  const url = `/api/v1/integration/microsoftteams/${microsoftteamsId}/fetch`

  /** @type {ResponsePromise<MicrosoftteamsIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationCreateRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationCreateRequestBody} MicrosoftteamsIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationCreateResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationCreateResponseBody} MicrosoftteamsIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MicrosoftteamsIntegrationCreateRequest} request
 * @returns {Promise<MicrosoftteamsIntegrationCreateResponse>}
 */
export async function createMicrosoftteamsIntegration(client, request) {
  const url = `/api/v1/integration/microsoftteams/create`

  /** @type {MicrosoftteamsIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MicrosoftteamsIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationUpdateRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationUpdateRequestBody} MicrosoftteamsIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationUpdateResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationUpdateResponseBody} MicrosoftteamsIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsIntegrationUpdateRequest} request
 * @returns {Promise<MicrosoftteamsIntegrationUpdateResponse>}
 */
export async function updateMicrosoftteamsIntegration(
  client,
  microsoftteamsId,
  request
) {
  const url = `/api/v1/integration/microsoftteams/${microsoftteamsId}/update`

  /** @type {MicrosoftteamsIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MicrosoftteamsIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationDeleteRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationDeleteRequestBody} MicrosoftteamsIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationDeleteResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationDeleteResponseBody} MicrosoftteamsIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsIntegrationDeleteRequest} [request]
 * @returns {Promise<MicrosoftteamsIntegrationDeleteResponse>}
 */
export async function deleteMicrosoftteamsIntegration(
  client,
  microsoftteamsId,
  request
) {
  const url = `/api/v1/integration/microsoftteams/${microsoftteamsId}/delete`

  /** @type {MicrosoftteamsIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MicrosoftteamsIntegrationDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupMicrosoftteamsIntegration']['requestBody']['content']['application/json']} MicrosoftteamsIntegrationSetupRequestBody
 *
 * @typedef {MicrosoftteamsIntegrationSetupRequestBody} MicrosoftteamsIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupMicrosoftteamsIntegration']['responses']['200']['content']['application/json']} MicrosoftteamsIntegrationSetupResponseBody
 *
 * @typedef {MicrosoftteamsIntegrationSetupResponseBody} MicrosoftteamsIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @returns {Promise<MicrosoftteamsIntegrationSetupResponse>}
 */
export async function setupMicrosoftteamsIntegration(
  client,
  microsoftteamsId
) {
  const url = `/api/v1/integration/microsoftteams/${microsoftteamsId}/setup`

  /** @type {MicrosoftteamsIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MicrosoftteamsIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['initiateTeams']['requestBody']['content']['application/json']} MicrosoftteamsInitiateRequestBody
 *
 * @typedef {MicrosoftteamsInitiateRequestBody} MicrosoftteamsInitiateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['initiateTeams']['responses']['200']['content']['application/json']} MicrosoftteamsInitiateResponseBody
 *
 * @typedef {MicrosoftteamsInitiateResponseBody} MicrosoftteamsInitiateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} microsoftteamsId
 * @param {MicrosoftteamsInitiateRequest} request
 * @returns {Promise<MicrosoftteamsInitiateResponse>}
 */
export async function initiateMicrosoftteams(
  client,
  microsoftteamsId,
  request
) {
  const url = `/api/v1/integration/microsoftteams/${microsoftteamsId}/initiate`

  /** @type {MicrosoftteamsInitiateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {MicrosoftteamsInitiateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
