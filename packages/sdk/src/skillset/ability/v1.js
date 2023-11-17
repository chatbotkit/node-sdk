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
 * }} AbilityOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & AbilityOptions} AbilityInstance
 */

/**
 * @typedef {{items: AbilityInstance[]}} AbilityListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: AbilityInstance
 * }} AbilityListStreamItem
 *
 * @typedef {AbilityListStreamItem} AbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} [cursor]
 * @returns {ResponsePromise<AbilityListResponse,AbilityListStreamType>}
 */
export function abilityList(client, skillsetId, cursor) {
  let url = `/api/v1/skillset/${skillsetId}/ability/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {AbilityInstance} AbilityFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<AbilityFetchResponse>}
 */
export async function abilityFetch(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {AbilityOptions} AbilityCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} AbilityCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {AbilityCreateRequest} request
 * @returns {Promise<AbilityCreateResponse>}
 */
export async function abilityCreate(client, skillsetId, request) {
  const url = `/api/v1/skillset/${skillsetId}/ability/create`

  /** @type {import('../../types/api/v1.js').operations['createSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createSkillsetAbility']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {AbilityOptions} AbilityUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} AbilityUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @param {AbilityUpdateRequest} request
 * @returns {Promise<AbilityUpdateResponse>}
 */
export async function abilityUpdate(client, skillsetId, abilityId, request) {
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
 * }} AbilityDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} skillsetId
 * @param {string} abilityId
 * @returns {Promise<AbilityDeleteResponse>}
 */
export async function abilityDelete(client, skillsetId, abilityId) {
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteSkillsetAbility']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
