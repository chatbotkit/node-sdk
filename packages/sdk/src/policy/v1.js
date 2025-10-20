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
 *   meta?: Record<string,any>,
 *   type: 'retention',
 *   config?: Record<string,any>
 * }} PolicyOptions
 *
 * @typedef {PolicyOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} PolicyInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} PolicyListRequest
 *
 * @typedef {{items: PolicyInstance[]}} PolicyListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: PolicyInstance
 * }} PolicyListStreamItemType
 *
 * @typedef {PolicyListStreamItemType} PolicyListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyListRequest} [request]
 * @returns {ResponsePromise<PolicyListResponse,PolicyListStreamType>}
 */
export function listPolicies(client, request) {
  let url = `/api/v1/policy/list`

  /** @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {PolicyOptions & {
 *   type: string
 * }} PolicyFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {ResponsePromise<PolicyFetchResponse,never>}
 */
export function fetchPolicy(client, policyId) {
  const url = `/api/v1/policy/${policyId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchPolicy']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {PolicyOptions & {
 * }} PolicyCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} PolicyCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyCreateRequest} request
 * @returns {Promise<PolicyCreateResponse>}
 */
export async function createPolicy(client, request) {
  const url = `/api/v1/policy/create`

  /** @type {import('../types/api/v1.js').operations['createPolicy']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createPolicy']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {PolicyOptions & {
 * }} PolicyUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} PolicyUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @param {PolicyUpdateRequest} request
 * @returns {Promise<PolicyUpdateResponse>}
 */
export async function updatePolicy(client, policyId, request) {
  const url = `/api/v1/policy/${policyId}/update`

  /** @type {import('../types/api/v1.js').operations['updatePolicy']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updatePolicy']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} PolicyDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {Promise<PolicyDeleteResponse>}
 */
export async function deletePolicy(client, policyId) {
  const url = `/api/v1/policy/${policyId}/delete`

  /** @type {import('../types/api/v1.js').operations['deletePolicy']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deletePolicy']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
