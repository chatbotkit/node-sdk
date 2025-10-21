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
 * }} McpServerIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/json']} McpServerIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/jsonl']} McpServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<McpServerIntegrationListResponse,McpServerIntegrationListStreamType>}
 */
export function listMcpServerIntegrations(client, request) {
  let url = `/api/v1/integration/mcpserver/list`

  /** @type {ResponsePromise<McpServerIntegrationListResponse,McpServerIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {ResponsePromise<McpServerIntegrationFetchResponse,never>}
 */
export function fetchMcpServerIntegration(client, mcpserverId) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/fetch`

  /** @type {ResponsePromise<McpServerIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationCreateRequestBody
 *
 * @typedef {McpServerIntegrationCreateRequestBody} McpServerIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationCreateResponseBody
 *
 * @typedef {McpServerIntegrationCreateResponseBody} McpServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationCreateRequest} request
 * @returns {Promise<McpServerIntegrationCreateResponse>}
 */
export async function createMcpServerIntegration(client, request) {
  const url = `/api/v1/integration/mcpserver/create`

  /** @type {McpServerIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {McpServerIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationUpdateRequestBody
 *
 * @typedef {McpServerIntegrationUpdateRequestBody} McpServerIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationUpdateResponseBody
 *
 * @typedef {McpServerIntegrationUpdateResponseBody} McpServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @param {McpServerIntegrationUpdateRequest} request
 * @returns {Promise<McpServerIntegrationUpdateResponse>}
 */
export async function updateMcpServerIntegration(client, mcpserverId, request) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/update`

  /** @type {McpServerIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {McpServerIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['requestBody']['content']['application/json']} McpServerIntegrationDeleteRequestBody
 *
 * @typedef {McpServerIntegrationDeleteRequestBody} McpServerIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['responses']['200']['content']['application/json']} McpServerIntegrationDeleteResponseBody
 *
 * @typedef {McpServerIntegrationDeleteResponseBody} McpServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {Promise<McpServerIntegrationDeleteResponse>}
 */
export async function deleteMcpServerIntegration(client, mcpserverId) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/delete`

  /** @type {McpServerIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {McpServerIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}
