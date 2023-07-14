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
 * @param {string} [cursor]
 * @returns {import('../../client.js').ResponsePromise<RecordListResponse,RecordListStreamType>}
 */
export function recordList(client, datasetId, cursor) {
  let url = `/api/v1/dataset/${datasetId}/record/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
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

  return client.clientFetch(url)
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

  return client.clientFetch(url, {
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
  const url = `/api/v1/dataset/${datasetId}/record/${recordId}/update`

  return client.clientFetch(url, {
    data: request,
  })
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

  return client.clientFetch(url, {
    data: {},
  })
}
