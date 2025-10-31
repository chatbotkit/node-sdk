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
 * }} PolicyListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/json']} PolicyListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listPolicies']['responses']['200']['content']['application/jsonl']} PolicyListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyListRequest} [request]
 * @returns {ResponsePromise<PolicyListResponse,PolicyListStreamType>}
 */
export function listPolicies(client, request) {
  let url = `/api/v1/policy/list`

  /** @type {ResponsePromise<PolicyListResponse,PolicyListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchPolicy']['responses']['200']['content']['application/json']} PolicyFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {ResponsePromise<PolicyFetchResponse,never>}
 */
export function fetchPolicy(client, policyId) {
  const url = `/api/v1/policy/${policyId}/fetch`

  /** @type {ResponsePromise<PolicyFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['requestBody']['content']['application/json']} PolicyCreateRequestBody
 *
 * @typedef {PolicyCreateRequestBody} PolicyCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createPolicy']['responses']['200']['content']['application/json']} PolicyCreateResponseBody
 *
 * @typedef {PolicyCreateResponseBody} PolicyCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {PolicyCreateRequest} request
 * @returns {Promise<PolicyCreateResponse>}
 */
export async function createPolicy(client, request) {
  const url = `/api/v1/policy/create`

  /** @type {PolicyCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PolicyCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['requestBody']['content']['application/json']} PolicyUpdateRequestBody
 *
 * @typedef {PolicyUpdateRequestBody} PolicyUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updatePolicy']['responses']['200']['content']['application/json']} PolicyUpdateResponseBody
 *
 * @typedef {PolicyUpdateResponseBody} PolicyUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @param {PolicyUpdateRequest} request
 * @returns {Promise<PolicyUpdateResponse>}
 */
export async function updatePolicy(client, policyId, request) {
  const url = `/api/v1/policy/${policyId}/update`

  /** @type {PolicyUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PolicyUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deletePolicy']['requestBody']['content']['application/json']} PolicyDeleteRequestBody
 *
 * @typedef {PolicyDeleteRequestBody} PolicyDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deletePolicy']['responses']['200']['content']['application/json']} PolicyDeleteResponseBody
 *
 * @typedef {PolicyDeleteResponseBody} PolicyDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} policyId
 * @returns {Promise<PolicyDeleteResponse>}
 */
export async function deletePolicy(client, policyId) {
  const url = `/api/v1/policy/${policyId}/delete`

  /** @type {PolicyDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PolicyDeleteRequestBody} */
    record: {},
  })

  return response
}
