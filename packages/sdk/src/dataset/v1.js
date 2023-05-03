/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   id: string
 * }} DatasetListResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<DatasetListResponse>}
 */
export async function datasetList(client) {
  return client.clientFetch(`/api/v1/dataset/list`)
}

/**
 * @typedef {{
 *   id: string,
 *   name?: string,
 *   description?: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetFetchResponse>}
 */
export async function datasetFetch(client, datasetId) {
  return client.clientFetch(`/api/v1/dataset/${datasetId}/fetch`)
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string
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
 * @typedef {{
 *   name?: string,
 *   description?: string
 * }} DatasetUpdateRequest
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
  return client.clientFetch(`/api/v1/dataset/${datasetId}/delete`)
}
