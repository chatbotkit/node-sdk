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
 * }} PlatformSecretListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/json']} PlatformSecretListResponse
 *
 * @typedef {PlatformSecretListResponse['items'][number]} PlatformSecretListItem
 *
 * @typedef {import('../../types/api/v1.js').operations['listPlatformSecrets']['responses']['200']['content']['application/jsonl']} PlatformSecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PlatformSecretListRequest} [request]
 * @returns {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>}
 */
export function listPlatformSecrets(client, request) {
  let url = `/api/v1/platform/secret/list`

  /** @type {ResponsePromise<PlatformSecretListResponse,PlatformSecretListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
