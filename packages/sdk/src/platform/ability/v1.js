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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} PlatformAbilityOptions
 *
 * @typedef {PlatformAbilityOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformAbilityInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 * }} PlatformAbilityListRequest
 *
 * @typedef {{items: PlatformAbilityInstance[]}} PlatformAbilityListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformAbilityInstance
 * }} PlatformAbilityListStreamItemType
 *
 * @typedef {PlatformAbilityListStreamItemType} PlatformAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformAbilityListRequest} [request]
 * @returns {ResponsePromise<PlatformAbilityListResponse,PlatformAbilityListStreamType>}
 */
export function listPlatformAbilities(client, request) {
  let url = `/api/v1/platform/ability/list`

  /** @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
