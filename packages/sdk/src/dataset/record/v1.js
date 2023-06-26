/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {import('../../client.js').ResponsePromise<RecordListResponse,RecordListStreamType>}
 */
export function recordList(client, datasetId) {
  return client.clientFetch(`/api/v1/dataset/${datasetId}/record/list`)
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
  return client.clientFetch(
    `/api/v1/dataset/${datasetId}/record/${recordId}/fetch`
  )
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
  return client.clientFetch(`/api/v1/dataset/${datasetId}/record/create`, {
    data: request,
  })
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
  return client.clientFetch(
    `/api/v1/dataset/${datasetId}/record/${recordId}/update`,
    {
      data: request,
    }
  )
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
  return client.clientFetch(
    `/api/v1/dataset/${datasetId}/record/${recordId}/delete`,
    {
      data: {},
    }
  )
}
