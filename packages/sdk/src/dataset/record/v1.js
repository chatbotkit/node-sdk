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
 * }} RecordOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & RecordOptions} RecordInstance
 */

/**
 * @typedef {{items: RecordInstance[]}} RecordListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: RecordInstance
 * }} RecordListStreamItem
 *
 * @typedef {RecordListStreamItem} RecordListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} [cursor]
 * @returns {ResponsePromise<RecordListResponse,RecordListStreamType>}
 */
export function recordList(client, datasetId, cursor) {
  let url = `/api/v1/dataset/${datasetId}/record/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  /** @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listDatasetRecords']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {RecordInstance} RecordFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<RecordFetchResponse>}
 */
export async function recordFetch(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/fetch`

  /** @type {import('../../types/api/v1.js').operations['fetchDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {RecordOptions} RecordCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} RecordCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {RecordCreateRequest} request
 * @returns {Promise<RecordCreateResponse>}
 */
export async function recordCreate(client, datasetId, request) {
  const url = `/api/v1/dataset/${datasetId}/record/create`

  /** @type {import('../../types/api/v1.js').operations['createDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['createDatasetRecord']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {RecordOptions} RecordUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} RecordUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @param {RecordUpdateRequest} request
 * @returns {Promise<RecordUpdateResponse>}
 */
export async function recordUpdate(client, datasetId, recordId, request) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/update`

  /** @type {import('../../types/api/v1.js').operations['updateDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['updateDatasetRecord']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} RecordDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} recordId
 * @returns {Promise<RecordDeleteResponse>}
 */
export async function recordDelete(client, datasetId, recordId) {
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteDatasetRecord']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteDatasetRecord']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
}
