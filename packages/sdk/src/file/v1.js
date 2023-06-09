/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   meta?: Record<string,any>
 * }} FileOptions
 *
 * @typedef {{
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * } & FileOptions} FileInstance
 */

/**
 * @typedef {FileInstance} FileListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: FileInstance
 * }} FileListStreamItemType
 *
 * @typedef {FileListStreamItemType} FileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @returns {import('../client.js').ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function fileList(client) {
  return client.clientFetch(`/api/v1/file/list`)
}

/**
 * @typedef {FileInstance} FileFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileFetchResponse>}
 */
export async function fileFetch(client, fileId) {
  return client.clientFetch(`/api/v1/file/${fileId}/fetch`)
}

/**
 * @typedef {FileOptions} FileCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} FileCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {FileCreateRequest} request
 * @returns {Promise<FileCreateResponse>}
 */
export async function fileCreate(client, request) {
  return client.clientFetch(`/api/v1/file/create`, {
    data: request,
  })
}

/**
 * @typedef {FileOptions} FileUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} FileUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUpdateRequest} request
 * @returns {Promise<FileUpdateResponse>}
 */
export async function fileUpdate(client, fileId, request) {
  return client.clientFetch(`/api/v1/file/${fileId}/update`, {
    data: request,
  })
}

/**
 * @typedef {{
 *   id: string
 * }} FileDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDeleteResponse>}
 */
export async function fileDelete(client, fileId) {
  return client.clientFetch(`/api/v1/file/${fileId}/delete`, {
    data: {},
  })
}
