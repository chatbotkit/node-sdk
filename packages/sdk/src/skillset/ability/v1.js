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
 *   name: string,
 *   description: string,
 *   instruction: string,
 *   meta?: Record<string,any>
 * }} SkillsetAbilityOptions
 *
 * @typedef {SkillsetAbilityOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SkillsetAbilityInstance
 */

/**
 * @typedef {{cursor?: string, take?: number, meta?: Record<string,string>}} SkillsetAbilityListRequest
 *
 * @typedef {{items: SkillsetAbilityInstance[]}} SkillsetAbilityListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SkillsetAbilityInstance
 * }} SkillsetAbilityListStreamItem
 *
 * @typedef {SkillsetAbilityListStreamItem} SkillsetAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityListRequest} [request]
 * @returns {ResponsePromise<SkillsetAbilityListResponse,SkillsetAbilityListStreamType>}
 */
export function listSkillsetAbilities(client, skillsetId, request) {
  let url = `/api/v1/skillset/${skillsetId}/ability/list`

  /** @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listSkillsetAbilities']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SkillsetAbilityInstance & {
 * }} SkillsetAbilityFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<SkillsetAbilityFetchResponse>}
 */
export async function fetchSkillsetAbility(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SkillsetAbilityOptions & {
 * }} SkillsetAbilityCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {SkillsetAbilityCreateRequest} request
 * @returns {Promise<SkillsetAbilityCreateResponse>}
 */
export async function createSkillsetAbility(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/ability/create`

  /** @type {import('../../types/api/v1.js').operations['createSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createSkillsetAbility']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {SkillsetAbilityOptions & {
 * }} SkillsetAbilityUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {SkillsetAbilityUpdateRequest} request
 * @returns {Promise<SkillsetAbilityUpdateResponse>}
 */
export async function updateSkillsetAbility(
  client,
  skillsetId,
  abilityId,
  request
) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateSkillsetAbility']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SkillsetAbilityDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<SkillsetAbilityDeleteResponse>}
 */
export async function deleteSkillsetAbility(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
