/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   store?: string,
 *   recordMaxTokens?: number,
 *   searchMaxRecords?: number,
 *   searchMaxTokens?: number,
 *   matchInstruction?: string,
 *   mismatchInstruction?: string,
 *   meta?: Record<string,any>,
 * }} DatasetOptions
 *
 * @typedef {{
 *   id: string,
 *   store: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & DatasetOptions} DatasetInstance
 */

/**
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
 * @param {string} [cursor]
 * @returns {import('../client.js').ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function datasetList(client, cursor) {
  let url = `/api/v1/dataset/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
}

/**
 * @typedef {DatasetInstance} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetFetchResponse>}
 */
export async function datasetFetch(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {DatasetOptions & {
 *   store: string
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
export async function datasetCreate(client, request) {
  const url = `/api/v1/dataset/create`

  /** @type {import('../types/api/v1.js').operations['createDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createDataset']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {DatasetOptions} DatasetUpdateRequest
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
export async function datasetUpdate(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/update`

  /** @type {import('../types/api/v1.js').operations['updateDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateDataset']['requestBody']['content']['application/json']} */
    data: request,
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
export async function datasetDelete(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteDataset']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}

/**
 * @typedef {{
 *   records: {id: string, text: string}[]
 * }} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export async function datasetSearch(client, datasetId, search) {
  const url = `/api/v1/dataset/${datasetId}/search`

  /** @type {import('../types/api/v1.js').operations['searchDataset']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['searchDataset']['requestBody']['content']['application/json']} */
    data: {
      search,
    },
  })

  return response
}
