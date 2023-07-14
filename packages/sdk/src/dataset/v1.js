/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   store?: string,
 *   recordMaxTokens?: number,
 *   searchMaxRecords?: number,
 *   searchMaxTokens?: number,
 *   matchInstruction?: string,
 *   mismatchInstruction?: string,
 *   meta?: Record<string,any>,
 * }} DatasetOptions
 *
 * @typedef {{
 *   id: string,
 *   store: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & DatasetOptions} DatasetInstance
 */

/**
 * @typedef {{items: DatasetInstance[]}} DatasetListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: DatasetInstance
 * }} DatasetListStreamItemType
 *
 * @typedef {DatasetListStreamItemType} DatasetListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} [cursor]
 * @returns {import('../client.js').ResponsePromise<DatasetListResponse,DatasetListStreamType>}
 */
export function datasetList(client, cursor) {
  let url = `/api/v1/dataset/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
}

/**
 * @typedef {DatasetInstance} DatasetFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @returns {Promise<DatasetFetchResponse>}
 */
export async function datasetFetch(client, datasetId) {
  const url = `/api/v1/dataset/${datasetId}/fetch`

  return client.clientFetch(url)
}

/**
 * @typedef {DatasetOptions & {
 *   store: string
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
  const url = `/api/v1/dataset/create`

  return client.clientFetch(url, {
    data: request,
  })
}

/**
 * @typedef {DatasetOptions} DatasetUpdateRequest
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
  const url = `/api/v1/dataset/${datasetId}/update`

  return client.clientFetch(url, {
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
  const url = `/api/v1/dataset/${datasetId}/delete`

  return client.clientFetch(url, {
    data: {},
  })
}

/**
 * @typedef {{
 *   records: import('./record/v1.js').RecordInstance[]
 * }} DatasetSearchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} datasetId
 * @param {string} search
 * @returns {Promise<DatasetSearchResponse>}
 */
export async function datasetSearch(client, datasetId, search) {
  const url = `/api/v1/dataset/${datasetId}/search`

  return client.clientFetch(url, {
    data: {
      search,
    },
  })
}
