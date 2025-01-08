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
 * }} PlatformSecretOptions
 *
 * @typedef {PlatformSecretOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PlatformSecretInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} PlatformSecretListRequest
 *
 * @typedef {{items: PlatformSecretInstance[]}} PlatformSecretListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PlatformSecretInstance
 * }} PlatformSecretListStreamItemType
 *
 * @typedef {PlatformSecretListStreamItemType} PlatformSecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretListRequest} [request]
 * @returns {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>}
 */
export function listPlatformSecrets(client, request) {
  let url = `/api/v1/platform/secret/list`

  /** @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
