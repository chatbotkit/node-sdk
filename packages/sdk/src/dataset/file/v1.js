/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

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
    data: request,
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
    data: request,
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
    data: request,
  })

  return response
}
