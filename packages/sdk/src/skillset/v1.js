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
 *   meta?: Record<string,any>
 * }} SkillsetOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & SkillsetOptions} SkillsetInstance
 */

/**
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
 * @param {string} [cursor]
 * @returns {ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function skillsetList(client, cursor) {
  let url = `/api/v1/skillset/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {SkillsetInstance} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetFetchResponse>}
 */
export async function skillsetFetch(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SkillsetOptions} SkillsetCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SkillsetCreateRequest} request
 * @returns {Promise<SkillsetCreateResponse>}
 */
export async function skillsetCreate(client, request) {
  const url = `/api/v1/skillset/create`

  /** @type {import('../types/api/v1.js').operations['createSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createSkillset']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {SkillsetOptions} SkillsetUpdateRequest
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
export async function skillsetUpdate(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/update`

  /** @type {import('../types/api/v1.js').operations['updateSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateSkillset']['requestBody']['content']['application/json']} */
    data: request,
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
export async function skillsetDelete(client, skillsetId) {
  const url = `/api/v1/skillset/${skillsetId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteSkillset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteSkillset']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
