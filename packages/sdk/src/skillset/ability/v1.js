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
 * @returns {import('../../client.js').ResponsePromise<AbilityListResponse,AbilityListStreamType>}
 */
export function abilityList(client, skillsetId, cursor) {
  let url = `/api/v1/skillset/${skillsetId}/ability/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
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
  const url = `/api/v1/skillset/${skillsetId}/ability/${abilityId}/update`

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
