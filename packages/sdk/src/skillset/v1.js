/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 * id: string
 * }} SkillsetListResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<SkillsetListResponse>}
 */
export async function skillsetList(client) {
  return client.clientFetch(`/api/v1/skillset/list`)
}

/**
 * @typedef {{
 * id: string,
 * name?: string,
 * description?: string,
 * createdAt: number,
 * updatedAt: number
 * }} SkillsetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetFetchResponse>}
 */
export async function skillsetFetch(client, skillsetId) {
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/fetch`)
}

/**
 * @typedef {{
 * name?: string,
 * description?: string
 * }} SkillsetCreateRequest
 *
 * @typedef {{
 * id: string
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
 * @typedef {{
 * name?: string,
 * description?: string
 * }} SkillsetUpdateRequest
 *
 * @typedef {{
 * id: string
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
 * id: string
 * }} SkillsetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @returns {Promise<SkillsetDeleteResponse>}
 */
export async function skillsetDelete(client, skillsetId) {
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/delete`)
}
