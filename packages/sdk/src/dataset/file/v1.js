/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   type: 'source'
 * }} FileAttachRequest
 *
 * @typedef {{
 *   id: string
 * }} FileAttachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {FileAttachRequest} request
 * @returns {Promise<FileAttachResponse>}
 */
export async function fileAttach(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/attach`

  /** @type {import('../../types/api/v1.js').operations['attachDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['attachDatasetFile']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{}} FileDetachRequest
 *
 * @typedef {{
 *   id: string
 * }} FileDetachResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {FileDetachRequest} request
 * @returns {Promise<FileDetachResponse>}
 */
export async function fileDetach(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/detach`

  /** @type {import('../../types/api/v1.js').operations['detachDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['detachDatasetFile']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}

/**
 * @typedef {{}} FileSyncRequest
 *
 * @typedef {{
 *   id: string
 * }} FileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} fileId
 * @param {FileSyncRequest} request
 * @returns {Promise<FileSyncResponse>}
 */
export async function fileSync(client, datasetId, fileId, request) {
  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/sync`

  /** @type {import('../../types/api/v1.js').operations['syncDatasetFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['syncDatasetFile']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
}
