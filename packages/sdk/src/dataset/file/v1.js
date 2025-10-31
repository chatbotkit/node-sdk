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
 * }} DatasetFileListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/json']} DatasetFileListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listDatasetFiles']['responses']['200']['content']['application/jsonl']} DatasetFileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {DatasetFileListRequest} [request]
 * @returns {ResponsePromise<DatasetFileListResponse,DatasetFileListStreamType>}
 */
export function listDatasetFiles(client, datasetId, request) {
  let url = `/api/v1/dataset/${datasetId}/file/list`

  /** @type {ResponsePromise<DatasetFileListResponse,DatasetFileListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['attachDatasetFile']['requestBody']['content']['application/json']} DatasetFileAttachRequestBody
 *
 * @typedef {DatasetFileAttachRequestBody} DatasetFileAttachRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['attachDatasetFile']['responses']['200']['content']['application/json']} DatasetFileAttachResponseBody
 *
 * @typedef {DatasetFileAttachResponseBody} DatasetFileAttachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileAttachRequest} request
 * @returns {Promise<DatasetFileAttachResponse>}
 */
export async function attachDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/attach`

  /** @type {DatasetFileAttachResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetFileAttachRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['detachDatasetFile']['requestBody']['content']['application/json']} DatasetFileDetachRequestBody
 *
 * @typedef {DatasetFileDetachRequestBody} DatasetFileDetachRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['detachDatasetFile']['responses']['200']['content']['application/json']} DatasetFileDetachResponseBody
 *
 * @typedef {DatasetFileDetachResponseBody} DatasetFileDetachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileDetachRequest} request
 * @returns {Promise<DatasetFileDetachResponse>}
 */
export async function detachDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/detach`

  /** @type {DatasetFileDetachResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetFileDetachRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['syncDatasetFile']['requestBody']['content']['application/json']} DatasetFileSyncRequestBody
 *
 * @typedef {DatasetFileSyncRequestBody} DatasetFileSyncRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['syncDatasetFile']['responses']['200']['content']['application/json']} DatasetFileSyncResponseBody
 *
 * @typedef {DatasetFileSyncResponseBody} DatasetFileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {DatasetFileSyncRequest} request
 * @returns {Promise<DatasetFileSyncResponse>}
 */
export async function syncDatasetFile(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/sync`

  /** @type {DatasetFileSyncResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DatasetFileSyncRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
