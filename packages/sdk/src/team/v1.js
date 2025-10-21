/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TeamListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/json']} TeamListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/jsonl']} TeamListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamListRequest} [request]
 * @returns {ResponsePromise<TeamListResponse,TeamListStreamType>}
 */
export function listTeams(client, request) {
  let url = `/api/v1/team/list`

  /** @type {ResponsePromise<TeamListResponse,TeamListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
