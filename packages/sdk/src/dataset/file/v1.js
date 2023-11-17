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

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: request,
  })
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
  request

  const url = `/api/v1/dataset/${datasetId}/file/${fileId}/sync`

  return client.clientFetch(url, {
    data: {},
  })
}
