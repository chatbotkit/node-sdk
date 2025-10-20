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
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} TeamOptions
 *
 * @typedef {TeamOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} TeamInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} TeamListRequest
 *
 * @typedef {{items: TeamInstance[]}} TeamListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: TeamInstance
 * }} TeamListStreamItemType
 *
 * @typedef {TeamListStreamItemType} TeamListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {TeamListRequest} [request]
 * @returns {ResponsePromise<TeamListResponse,TeamListStreamType>}
 */
export function listTeams(client, request) {
  let url = `/api/v1/team/list`

  /** @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listTeams']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
