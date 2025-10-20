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
 *   meta?: Record<string,any>,
 *   blueprintId?: string,
 *   skillsetId?: string
 * }} McpServerIntegrationOptions
 *
 * @typedef {McpServerIntegrationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} McpServerIntegrationInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} McpServerIntegrationListRequest
 *
 * @typedef {{items: McpServerIntegrationInstance[]}} McpServerIntegrationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: McpServerIntegrationInstance
 * }} McpServerIntegrationListStreamItem
 *
 * @typedef {McpServerIntegrationListStreamItem} McpServerIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationListRequest} [request]
 * @returns {ResponsePromise<McpServerIntegrationListResponse,McpServerIntegrationListStreamType>}
 */
export function listMcpServerIntegrations(client, request) {
  let url = `/api/v1/integration/mcpserver/list`

  /** @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listMcpServerIntegrations']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {McpServerIntegrationInstance & {
 * }} McpServerIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {ResponsePromise<McpServerIntegrationFetchResponse,never>}
 */
export function fetchMcpServerIntegration(client, mcpserverId) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/fetch`

  /** @typedef {import('../../types/api/v1.js').operations['fetchMcpServerIntegration']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {McpServerIntegrationOptions & {
 * }} McpServerIntegrationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {McpServerIntegrationCreateRequest} request
 * @returns {Promise<McpServerIntegrationCreateResponse>}
 */
export async function createMcpServerIntegration(client, request) {
  const url = `/api/v1/integration/mcpserver/create`

  /** @type {import('../../types/api/v1.js').operations['createMcpServerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createMcpServerIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {McpServerIntegrationOptions & {
 * }} McpServerIntegrationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @param {McpServerIntegrationUpdateRequest} request
 * @returns {Promise<McpServerIntegrationUpdateResponse>}
 */
export async function updateMcpServerIntegration(client, mcpserverId, request) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateMcpServerIntegration']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} McpServerIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} mcpserverId
 * @returns {Promise<McpServerIntegrationDeleteResponse>}
 */
export async function deleteMcpServerIntegration(client, mcpserverId) {
  const url = `/api/v1/integration/mcpserver/${mcpserverId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteMcpServerIntegration']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
