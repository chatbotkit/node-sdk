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
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/json']} MemoryListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/jsonl']} MemoryListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryListRequest} [request]
 * @returns {ResponsePromise<MemoryListResponse,MemoryListStreamType>}
 */
export function listMemories(client, request) {
  let url = `/api/v1/memory/list`

  /** @type {ResponsePromise<MemoryListResponse,MemoryListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchMemory']['responses']['200']['content']['application/json']} MemoryFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {ResponsePromise<MemoryFetchResponse,never>}
 */
export function fetchMemory(client, memoryId) {
  const url = `/api/v1/memory/${memoryId}/fetch`

  /** @type {ResponsePromise<MemoryFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text?: string,
 *   meta?: Record<string,any>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createMemory']['requestBody']['content']['application/json']} MemoryCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createMemory']['responses']['200']['content']['application/json']} MemoryCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryCreateRequest} request
 * @returns {Promise<MemoryCreateResponse>}
 */
export async function createMemory(client, request) {
  const url = `/api/v1/memory/create`

  /** @type {MemoryCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MemoryCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text?: string,
 *   meta?: Record<string,any>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateMemory']['requestBody']['content']['application/json']} MemoryUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateMemory']['responses']['200']['content']['application/json']} MemoryUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @param {MemoryUpdateRequest} request
 * @returns {Promise<MemoryUpdateResponse>}
 */
export async function updateMemory(client, memoryId, request) {
  const url = `/api/v1/memory/${memoryId}/update`

  /** @type {MemoryUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MemoryUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteMemory']['requestBody']['content']['application/json']} MemoryDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteMemory']['responses']['200']['content']['application/json']} MemoryDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {Promise<MemoryDeleteResponse>}
 */
export async function deleteMemory(client, memoryId) {
  const url = `/api/v1/memory/${memoryId}/delete`

  /** @type {MemoryDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MemoryDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryExportRequest
 *
 * @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/json']} MemoryExportResponse
 *
 * @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/jsonl']} MemoryExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryExportRequest} [request]
 * @returns {ResponsePromise<MemoryExportResponse,MemoryExportStreamType>}
 */
export function exportMemories(client, request) {
  let url = `/api/v1/memory/export`

  /** @type {ResponsePromise<MemoryExportResponse,MemoryExportStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {{
 *   search: string,
 *   contactId?: string,
 *   botId?: string
 * }} MemorySearchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['searchMemory']['requestBody']['content']['application/json']} MemorySearchRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['searchMemory']['responses']['200']['content']['application/json']} MemorySearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemorySearchRequest} request
 * @returns {Promise<MemorySearchResponse>}
 */
export async function searchMemory(client, request) {
  const url = `/api/v1/memory/search`

  /** @type {MemorySearchResponse} */
  const response = await client.clientFetch(url, {
    /** @type {MemorySearchRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
