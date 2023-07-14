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
 * @typedef {{items: FileInstance[]}} FileListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: FileInstance
 * }} FileListStreamItemType
 *
 * @typedef {FileListStreamItemType} FileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} [cursor]
 * @returns {import('../client.js').ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function fileList(client, cursor) {
  let url = `/api/v1/file/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  return client.clientFetch(url)
}

/**
 * @typedef {FileInstance} FileFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileFetchResponse>}
 */
export async function fileFetch(client, fileId) {
  const url = `/api/v1/file/${fileId}/fetch`

  return client.clientFetch(url)
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
  const url = `/api/v1/file/create`

  return client.clientFetch(url, {
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
  const url = `/api/v1/file/${fileId}/update`

  return client.clientFetch(url, {
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
  const url = `/api/v1/file/${fileId}/delete`

  return client.clientFetch(url, {
    data: {},
  })
}

/**
 * @typedef {{
 *   name?: string,
 *   type?: string,
 *   data: string|ArrayBuffer
 * }} FileUploadRequest
 *
 * @typedef {{
 *   id: string
 * }} FileUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUploadRequest} request
 * @returns {Promise<FileUploadResponse>}
 */
export async function fileUpload(client, fileId, request) {
  const url = `/api/v1/file/${fileId}/upload`

  return client.clientFetch(url, {
    file: request,
  })
}

/**
 * @typedef {{
 *   data: ArrayBuffer
 * }} FileDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDownloadResponse>}
 */
export async function fileDownload(client, fileId) {
  const url = `/api/v1/file/${fileId}/download`

  return client.clientFetch(url)
}
