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
 * @typedef {PlatformAbilityListResponse['items'][number]} PlatformAbilityListItem
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

/**
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformAbilities']['requestBody']['content']['application/json']} PlatformAbilitySearchRequestBody
 *
 * @typedef {PlatformAbilitySearchRequestBody} PlatformAbilitySearchRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['searchPlatformAbilities']['responses']['200']['content']['application/json']} PlatformAbilitySearchResponseBody
 *
 * @typedef {PlatformAbilitySearchResponseBody} PlatformAbilitySearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformAbilitySearchRequest} request
 * @returns {Promise<PlatformAbilitySearchResponse>}
 */
export async function searchPlatformAbilities(client, request) {
  const url = `/api/v1/platform/ability/search`

  /** @type {PlatformAbilitySearchResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PlatformAbilitySearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
