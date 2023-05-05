/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @typedef {AbilityInstance} AbilityListResponse
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
 * @returns {import('../../client.js').ResponsePromise<AbilityListResponse,AbilityListStreamType>}
 */
export function abilityList(client, skillsetId) {
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/ability/list`)
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
  return client.clientFetch(
    `/api/v1/skillset/${skillsetId}/ability/${abilityId}/fetch`
  )
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
  return client.clientFetch(`/api/v1/skillset/${skillsetId}/ability/create`, {
    data: request,
  })
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
  return client.clientFetch(
    `/api/v1/skillset/${skillsetId}/ability/${abilityId}/update`,
    {
      data: request,
    }
  )
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
  return client.clientFetch(
    `/api/v1/skillset/${skillsetId}/ability/${abilityId}/delete`,
    {
      data: {},
    }
  )
}
