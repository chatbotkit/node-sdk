/**
 * @typedef {import('../client.js').ChatFileKitClient} ChatFileKitClient
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
 * @param {ChatFileKitClient} client
 * @returns {import('../client.js').ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function fileList(client) {
  return client.clientFetch(`/api/v1/file/list`)
}

/**
 * @typedef {FileInstance} FileFetchResponse
 *
 * @param {ChatFileKitClient} client
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
 * @param {ChatFileKitClient} client
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
 * @param {ChatFileKitClient} client
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
 * @param {ChatFileKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDeleteResponse>}
 */
export async function fileDelete(client, fileId) {
  return client.clientFetch(`/api/v1/file/${fileId}/delete`, {
    data: {},
  })
}

/**
 * @typedef {{
 *   id: string
 * }} FileUploadResponse
 *
 * @param {ChatFileKitClient} client
 * @param {string} fileId
 * @param {ArrayBuffer} data
 * @returns {Promise<FileUploadResponse>}
 */
export async function fileUpload(client, fileId, data) {
  return client.clientFetch(`/api/v1/file/${fileId}/upload`, {
    data: data,
  })
}

/**
 * @param {ChatFileKitClient} client
 * @param {string} fileId
 * @returns {Promise<ArrayBuffer>}
 */
export async function fileDownload(client, fileId) {
  const response = await client.clientFetchRaw(
    `/api/v1/file/${fileId}/download`
  )

  return await response.arrayBuffer()
}
