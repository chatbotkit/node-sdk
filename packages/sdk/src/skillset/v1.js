/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {import('../client.js').ResponsePromise<SkillsetListResponse,SkillsetListStreamType>}
 */
export function skillsetList(client, cursor) {
  let url = `/api/v1/skillset/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
