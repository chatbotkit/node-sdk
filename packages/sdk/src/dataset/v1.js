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
 *   store: string,
 *   reranker?: string,
 *   recordMaxTokens?: number,
 *   searchMinScore?: number,
 *   searchMaxRecords?: number,
 *   searchMaxTokens?: number,
 *   matchInstruction?: string,
 *   mismatchInstruction?: string,
 *   separators?: string,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} DatasetOptions
 *
 * @typedef {DatasetOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} DatasetInstance
 */

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} DatasetListRequest
 *
 * @typedef {{items: DatasetInstance[]}} DatasetListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetInstance
 * }} DatasetListStreamItemType
 *
 * @typedef {DatasetListStreamItemType} DatasetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetListRequest} [request]
 * @returns {ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function listDatasets(client, request) {
  let url = `/api/v1/dataset/list`

  /** @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {DatasetInstance & {
 * }} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {ResponsePromise<DatasetFetchResponse,never>}
 */
export function fetchDataset(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/fetch`

  /** @typedef {import('../types/api/v1.js').operations['fetchDataset']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {Omit<DatasetOptions,'store'> & {
 *   store?: string
 * }} DatasetCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetCreateRequest} request
 * @returns {Promise<DatasetCreateResponse>}
 */
export async function createDataset(client, request) {
  const url = `/api/v1/dataset/create`

  /** @type {import('../types/api/v1.js').operations['createDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createDataset']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {Omit<DatasetOptions,'store'> & {
 * }} DatasetUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetUpdateRequest} request
 * @returns {Promise<DatasetUpdateResponse>}
 */
export async function updateDataset(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/update`

  /** @type {import('../types/api/v1.js').operations['updateDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateDataset']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} DatasetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetDeleteResponse>}
 */
export async function deleteDataset(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteDataset']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string,
 *   records: {
 *     id: string,
 *     text: string,
 *     score: number,
 *     source?: string,
 *     meta?: Record<string,any>
 *   }[]
 * }} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export async function searchDataset(client, datasetId, search) {
  const url = `/api/v1/dataset/${datasetId}/search`

  /** @type {import('../types/api/v1.js').operations['searchDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['searchDataset']['requestBody']['content']['application/json']} */
    record: {
      search,
    },
  })

  return response
}
