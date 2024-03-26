/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../../file/v1.js').FileInstance} DatasetFileInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} DatasetFileListRequest
 * @typedef {{items: DatasetFileInstance[]}} DatasetFileListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetFileInstance
 * }} DatasetFileListStreamItemType
 *
 * @typedef {DatasetFileListStreamItemType} DatasetFileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetFileListRequest} [request]
 * @returns {ResponsePromise<DatasetFileListResponse,DatasetFileListStreamType>}
 */
export function listDatasetFiles(client, datasetId, request) {
  let url = `/api/v1/dataset/${datasetId}/file/list`

  /** @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {{
 *   type: 'source'
 * }} DatasetFileAttachRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetFileAttachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileAttachRequest} request
 * @returns {Promise<DatasetFileAttachResponse>}
 */
export async function attachDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/attach`

  /** @type {import('../../types/api/v1.js').operations['attachDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['attachDatasetFile']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{}} DatasetFileDetachRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetFileDetachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileDetachRequest} request
 * @returns {Promise<DatasetFileDetachResponse>}
 */
export async function detachDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/detach`

  /** @type {import('../../types/api/v1.js').operations['detachDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['detachDatasetFile']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{}} DatasetFileSyncRequest
 *
 * @typedef {{
 *   id: string
 * }} DatasetFileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileSyncRequest} request
 * @returns {Promise<DatasetFileSyncResponse>}
 */
export async function syncDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/sync`

  /** @type {import('../../types/api/v1.js').operations['syncDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['syncDatasetFile']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}
