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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PlatformAbilityListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/json']} PlatformAbilityListResponse
 *
 * @typedef {PlatformAbilityListResponse['items'][number]} PlatformAbilityInstance
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformAbilities']['responses']['200']['content']['application/jsonl']} PlatformAbilityListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformAbilityListRequest} [request]
 * @returns {ResponsePromise<PlatformAbilityListResponse,PlatformAbilityListStreamType>}
 */
export function listPlatformAbilities(client, request) {
  let url = `/api/v1/platform/ability/list`

  /** @type {ResponsePromise<PlatformAbilityListResponse,PlatformAbilityListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
