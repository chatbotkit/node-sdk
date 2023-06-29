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
 * @returns {import('../client.js').ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function datasetList(client) {
  return client.clientFetch(`/api/v1/dataset/list`)
}

/**
 * @typedef {DatasetInstance} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetFetchResponse>}
 */
export async function datasetFetch(client, datasetId) {
  return client.clientFetch(`/api/v1/dataset/${datasetId}/fetch`)
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
  return client.clientFetch(`/api/v1/dataset/create`, {
    data: request,
  })
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
  return client.clientFetch(`/api/v1/dataset/${datasetId}/update`, {
    data: request,
  })
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
  return client.clientFetch(`/api/v1/dataset/${datasetId}/delete`, {
    data: {},
  })
}

/**
 * @typedef {{
 *   records: import('./record/v1.js').RecordInstance[]
 * }} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export async function datasetSearch(client, datasetId, search) {
  return client.clientFetch(`/api/v1/dataset/${datasetId}/search`)
}
