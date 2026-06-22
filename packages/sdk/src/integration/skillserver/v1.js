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
 * }} SkillServerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillServerIntegrations']['responses']['200']['content']['application/json']} SkillServerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listSkillServerIntegrations']['responses']['200']['content']['application/jsonl']} SkillServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<SkillServerIntegrationListResponse,SkillServerIntegrationListStreamType>}
 */
export function listSkillServerIntegrations(client, request) {
  let url = `/api/v1/integration/skillserver/list`

  /** @type {ResponsePromise<SkillServerIntegrationListResponse,SkillServerIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @returns {ResponsePromise<SkillServerIntegrationFetchResponse,never>}
 */
export function fetchSkillServerIntegration(client, skillserverId) {
  const url = `/api/v1/integration/skillserver/${skillserverId}/fetch`

  /** @type {ResponsePromise<SkillServerIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationCreateRequestBody
 *
 * @typedef {SkillServerIntegrationCreateRequestBody} SkillServerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationCreateResponseBody
 *
 * @typedef {SkillServerIntegrationCreateResponseBody} SkillServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillServerIntegrationCreateRequest} request
 * @returns {Promise<SkillServerIntegrationCreateResponse>}
 */
export async function createSkillServerIntegration(client, request) {
  const url = `/api/v1/integration/skillserver/create`

  /** @type {SkillServerIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillServerIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationUpdateRequestBody
 *
 * @typedef {SkillServerIntegrationUpdateRequestBody} SkillServerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationUpdateResponseBody
 *
 * @typedef {SkillServerIntegrationUpdateResponseBody} SkillServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @param {SkillServerIntegrationUpdateRequest} request
 * @returns {Promise<SkillServerIntegrationUpdateResponse>}
 */
export async function updateSkillServerIntegration(
  client,
  skillserverId,
  request
) {
  const url = `/api/v1/integration/skillserver/${skillserverId}/update`

  /** @type {SkillServerIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillServerIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillServerIntegration']['requestBody']['content']['application/json']} SkillServerIntegrationDeleteRequestBody
 *
 * @typedef {SkillServerIntegrationDeleteRequestBody} SkillServerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSkillServerIntegration']['responses']['200']['content']['application/json']} SkillServerIntegrationDeleteResponseBody
 *
 * @typedef {SkillServerIntegrationDeleteResponseBody} SkillServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillserverId
 * @param {SkillServerIntegrationDeleteRequest} [request]
 * @returns {Promise<SkillServerIntegrationDeleteResponse>}
 */
export async function deleteSkillServerIntegration(
  client,
  skillserverId,
  request
) {
  const url = `/api/v1/integration/skillserver/${skillserverId}/delete`

  /** @type {SkillServerIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillServerIntegrationDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
