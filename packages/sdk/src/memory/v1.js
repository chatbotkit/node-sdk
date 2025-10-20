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
 *   text?: string,
 *   meta?: Record<string,any>,
 *   contactId?: string,
 *   botId?: string
 * }} MemoryOptions
 *
 * @typedef {MemoryOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} MemoryInstance
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
 * @typedef {{items: MemoryInstance[]}} MemoryListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MemoryInstance
 * }} MemoryListStreamItemType
 *
 * @typedef {MemoryListStreamItemType} MemoryListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryListRequest} [request]
 * @returns {ResponsePromise<MemoryListResponse,MemoryListStreamType>}
 */
export function listMemories(client, request) {
  let url = `/api/v1/memory/list`

  /** @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listMemories']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {MemoryInstance & {
 * }} MemoryFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {ResponsePromise<MemoryFetchResponse,never>}
 */
export function fetchMemory(client, memoryId) {
  const url = `/api/v1/memory/${memoryId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchMemory']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {MemoryOptions & {
 * }} MemoryCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} MemoryCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryCreateRequest} request
 * @returns {Promise<MemoryCreateResponse>}
 */
export async function createMemory(client, request) {
  const url = `/api/v1/memory/create`

  /** @type {import('../types/api/v1.js').operations['createMemory']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createMemory']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {MemoryOptions & {
 * }} MemoryUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} MemoryUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @param {MemoryUpdateRequest} request
 * @returns {Promise<MemoryUpdateResponse>}
 */
export async function updateMemory(client, memoryId, request) {
  const url = `/api/v1/memory/${memoryId}/update`

  /** @type {import('../types/api/v1.js').operations['updateMemory']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateMemory']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} MemoryDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} memoryId
 * @returns {Promise<MemoryDeleteResponse>}
 */
export async function deleteMemory(client, memoryId) {
  const url = `/api/v1/memory/${memoryId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteMemory']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteMemory']['requestBody']['content']['application/json']} */
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
 * @typedef {{items: MemoryInstance[]}} MemoryExportResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: MemoryInstance
 * }} MemoryExportStreamItemType
 *
 * @typedef {MemoryExportStreamItemType} MemoryExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {MemoryExportRequest} [request]
 * @returns {ResponsePromise<MemoryExportResponse,MemoryExportStreamType>}
 */
export function exportMemories(client, request) {
  let url = `/api/v1/memory/export`

  /** @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['exportMemories']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
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
 * @typedef {{
 *   id: string,
 *   text: string,
 *   meta?: Record<string,any>
 * }} MemorySearchItem
 *
 * @typedef {{
 *   items: MemorySearchItem[]
 * }} MemorySearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {MemorySearchRequest} request
 * @returns {Promise<MemorySearchResponse>}
 */
export async function searchMemory(client, request) {
  const url = `/api/v1/memory/search`

  /** @type {import('../types/api/v1.js').operations['searchMemory']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['searchMemory']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}
