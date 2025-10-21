/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SkillsetListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/json']} SkillsetListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/jsonl']} SkillsetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetListRequest} [request]
 * @returns {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function listSkillsets(client, request) {
  let url = `/api/v1/skillset/list`

  /** @type {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchSkillset']['responses']['200']['content']['application/json']} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {ResponsePromise<SkillsetFetchResponse,never>}
 */
export function fetchSkillset(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/fetch`

  /** @type {ResponsePromise<SkillsetFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createSkillset']['requestBody']['content']['application/json']} SkillsetCreateRequestBody
 *
 * @typedef {SkillsetCreateRequestBody} SkillsetCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSkillset']['responses']['200']['content']['application/json']} SkillsetCreateResponseBody
 *
 * @typedef {SkillsetCreateResponseBody} SkillsetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetCreateRequest} request
 * @returns {Promise<SkillsetCreateResponse>}
 */
export async function createSkillset(client, request) {
  const url = `/api/v1/skillset/create`

  /** @type {SkillsetCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateSkillset']['requestBody']['content']['application/json']} SkillsetUpdateRequestBody
 *
 * @typedef {SkillsetUpdateRequestBody} SkillsetUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSkillset']['responses']['200']['content']['application/json']} SkillsetUpdateResponseBody
 *
 * @typedef {SkillsetUpdateResponseBody} SkillsetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetUpdateRequest} request
 * @returns {Promise<SkillsetUpdateResponse>}
 */
export async function updateSkillset(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/update`

  /** @type {SkillsetUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteSkillset']['requestBody']['content']['application/json']} SkillsetDeleteRequestBody
 *
 * @typedef {SkillsetDeleteRequestBody} SkillsetDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSkillset']['responses']['200']['content']['application/json']} SkillsetDeleteResponseBody
 *
 * @typedef {SkillsetDeleteResponseBody} SkillsetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetDeleteResponse>}
 */
export async function deleteSkillset(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/delete`

  /** @type {SkillsetDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SkillsetDeleteRequestBody} */
    record: {},
  })

  return response
}
