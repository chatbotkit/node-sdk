/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>,
 *   createdAt: number,
 *   updatedAt: number
 * }} SkillsetOptions
 *
 * @typedef {{
 *   id: string
 * } & SkillsetOptions} SkillsetInstance
 */

/**
 * @typedef {SkillsetInstance} SkillsetListResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<SkillsetListResponse>}
 */
export async function skillsetList(client) {
  return client.clientFetch(`/api/v1/skillset/list`)
}

/**
 * @typedef {SkillsetInstance} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetFetchResponse>}
 */
export async function skillsetFetch(client, skillsetId) {
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/fetch`)
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
  return client.clientFetch(`/api/v1/skillset/create`, {
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
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/update`, {
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
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/delete`)
}
