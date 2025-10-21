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
 * }} DatasetRecordListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/json']} DatasetRecordListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/jsonl']} DatasetRecordListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordListRequest} [request]
 * @returns {ResponsePromise<DatasetRecordListResponse,DatasetRecordListStreamType>}
 */
export function listDatasetRecords(client, datasetId, request) {
  let url = `/api/v1/dataset/${datasetId}/record/list`

  /** @type {ResponsePromise<DatasetRecordListResponse,DatasetRecordListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {ResponsePromise<DatasetRecordFetchResponse,never>}
 */
export function fetchDatasetRecord(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/fetch`

  /** @type {ResponsePromise<DatasetRecordFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   text: string,
 *   source?: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordCreateRequest} request
 * @returns {Promise<DatasetRecordCreateResponse>}
 */
export async function createDatasetRecord(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/record/create`

  /** @type {DatasetRecordCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetRecordCreateRequestBody} */
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
 *   source?: string,
 *   meta?: Record<string,any>
 * }} DatasetRecordUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordUpdateResponse
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

  /** @type {DatasetRecordUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetRecordUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteDatasetRecord']['requestBody']['content']['application/json']} DatasetRecordDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteDatasetRecord']['responses']['200']['content']['application/json']} DatasetRecordDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<DatasetRecordDeleteResponse>}
 */
export async function deleteDatasetRecord(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/delete`

  /** @type {DatasetRecordDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetRecordDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} DatasetRecordExportRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['exportDatasetRecords']['responses']['200']['content']['application/json']} DatasetRecordExportResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['exportDatasetRecords']['responses']['200']['content']['application/jsonl']} DatasetRecordExportStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetRecordExportRequest} [request]
 * @returns {ResponsePromise<DatasetRecordExportResponse,DatasetRecordExportStreamType>}
 */
export function exportDatasetRecords(client, datasetId, request) {
  let url = `/api/v1/dataset/${datasetId}/record/export`

  /** @type {ResponsePromise<DatasetRecordExportResponse,DatasetRecordExportStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
