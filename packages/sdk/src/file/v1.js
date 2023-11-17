/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
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
 * @returns {ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function fileList(client, cursor) {
  let url = `/api/v1/file/list`

  if (cursor) {
    url += `?cursor=${encodeURIComponent(cursor)}`
  }

  const response = client.clientFetch(url)

  return response
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

  /** @type {import('../types/api/v1.js').operations['fetchFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
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

  /** @type {import('../types/api/v1.js').operations['createFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createFile']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
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

  /** @type {import('../types/api/v1.js').operations['updateFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateFile']['requestBody']['content']['application/json']} */
    data: request,
  })

  return response
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

  /** @type {import('../types/api/v1.js').operations['deleteFile']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteFile']['requestBody']['content']['application/json']} */
    data: {},
  })

  return response
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

  const response = client.clientFetch(url, {
    file: request,
  })

  return response
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

  const response = client.clientFetch(url)

  return response
}
