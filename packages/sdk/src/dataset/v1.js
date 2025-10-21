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
 * }} DatasetListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/json']} DatasetListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listDatasets']['responses']['200']['content']['application/jsonl']} DatasetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetListRequest} [request]
 * @returns {ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function listDatasets(client, request) {
  let url = `/api/v1/dataset/list`

  /** @type {ResponsePromise<DatasetListResponse,DatasetListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchDataset']['responses']['200']['content']['application/json']} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {ResponsePromise<DatasetFetchResponse,never>}
 */
export function fetchDataset(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/fetch`

  /** @type {ResponsePromise<DatasetFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   store?: string,
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
 * }} DatasetCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createDataset']['requestBody']['content']['application/json']} DatasetCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createDataset']['responses']['200']['content']['application/json']} DatasetCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DatasetCreateRequest} request
 * @returns {Promise<DatasetCreateResponse>}
 */
export async function createDataset(client, request) {
  const url = `/api/v1/dataset/create`

  /** @type {DatasetCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetCreateRequestBody} */
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
 * }} DatasetUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateDataset']['requestBody']['content']['application/json']} DatasetUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateDataset']['responses']['200']['content']['application/json']} DatasetUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetUpdateRequest} request
 * @returns {Promise<DatasetUpdateResponse>}
 */
export async function updateDataset(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/update`

  /** @type {DatasetUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteDataset']['requestBody']['content']['application/json']} DatasetDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteDataset']['responses']['200']['content']['application/json']} DatasetDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetDeleteResponse>}
 */
export async function deleteDataset(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/delete`

  /** @type {DatasetDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   search: string
 * }} DatasetSearchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['searchDataset']['requestBody']['content']['application/json']} DatasetSearchRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['searchDataset']['responses']['200']['content']['application/json']} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export async function searchDataset(client, datasetId, search) {
  const url = `/api/v1/dataset/${datasetId}/search`

  /** @type {DatasetSearchResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetSearchRequestBody} */
    record: {
      search,
    },
  })

  return response
}
