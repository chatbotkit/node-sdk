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
 *   name?: string,
 *   description?: string,
 *   visibility?: 'private'|'protected'|'public'
 *   meta?: Record<string,any>
 * }} SkillsetOptions
 *
 * @typedef {SkillsetOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SkillsetInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SkillsetListRequest
 *
 * @typedef {{items: SkillsetInstance[]}} SkillsetListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SkillsetInstance
 * }} SkillsetListStreamItemType
 *
 * @typedef {SkillsetListStreamItemType} SkillsetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetListRequest} [request]
 * @returns {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function listSkillsets(client, request) {
  let url = `/api/v1/skillset/list`

  /** @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listSkillsets']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SkillsetInstance & {
 * }} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetFetchResponse>}
 */
export async function fetchSkillset(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SkillsetOptions & {
 * }} SkillsetCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetCreateRequest} request
 * @returns {Promise<SkillsetCreateResponse>}
 */
export async function createSkillset(client, request) {
  const url = `/api/v1/skillset/create`

  /** @type {import('../types/api/v1.js').operations['createSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createSkillset']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {SkillsetOptions & {
 * }} SkillsetUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetUpdateRequest} request
 * @returns {Promise<SkillsetUpdateResponse>}
 */
export async function updateSkillset(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/update`

  /** @type {import('../types/api/v1.js').operations['updateSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateSkillset']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SkillsetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetDeleteResponse>}
 */
export async function deleteSkillset(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteSkillset']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
