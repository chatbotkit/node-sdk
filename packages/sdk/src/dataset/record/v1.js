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
 *   text: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordOptions
 *
 * @typedef {DatasetRecordOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} DatasetRecordInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} DatasetRecordListRequest
 *
 * @typedef {{items: DatasetRecordInstance[]}} DatasetRecordListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetRecordInstance
 * }} DatasetRecordListStreamItem
 *
 * @typedef {DatasetRecordListStreamItem} DatasetRecordListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordListRequest} [request]
 * @returns {ResponsePromise<DatasetRecordListResponse,DatasetRecordListStreamType>}
 */
export function listDatasetRecords(client, datasetId, request) {
  let url = `/api/v1/dataset/${datasetId}/record/list`

  /** @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {DatasetRecordInstance & {
 * }} DatasetRecordFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<DatasetRecordFetchResponse>}
 */
export async function fetchDatasetRecord(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {DatasetRecordOptions & {
 * }} DatasetRecordCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetRecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordCreateRequest} request
 * @returns {Promise<DatasetRecordCreateResponse>}
 */
export async function createDatasetRecord(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/record/create`

  /** @type {import('../../types/api/v1.js').operations['createDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createDatasetRecord']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {DatasetRecordOptions & {
 * }} DatasetRecordUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetRecordUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @param {DatasetRecordUpdateRequest} request
 * @returns {Promise<DatasetRecordUpdateResponse>}
 */
export async function updateDatasetRecord(
  client,
  datasetId,
  recordId,
  request
) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateDatasetRecord']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} DatasetRecordDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<DatasetRecordDeleteResponse>}
 */
export async function deleteDatasetRecord(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteDatasetRecord']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
