import { getBuffer } from '../buffer.js'

// @todo improve types

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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} FileListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listFiles']['responses']['200']['content']['application/json']} FileListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listFiles']['responses']['200']['content']['application/jsonl']} FileListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {FileListRequest} [request]
 * @returns {ResponsePromise<FileListResponse,FileListStreamType>}
 */
export function listFiles(client, request) {
  let url = `/api/v1/file/list`

  /** @type {ResponsePromise<FileListResponse,FileListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchFile']['responses']['200']['content']['application/json']} FileFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {ResponsePromise<FileFetchResponse,never>}
 */
export function fetchFile(client, fileId) {
  const url = `/api/v1/file/${fileId}/fetch`

  /** @type {ResponsePromise<FileFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createFile']['requestBody']['content']['application/json']} FileCreateRequestBody
 *
 * @typedef {FileCreateRequestBody} FileCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createFile']['responses']['200']['content']['application/json']} FileCreateResponseBody
 *
 * @typedef {FileCreateResponseBody} FileCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {FileCreateRequest} request
 * @returns {Promise<FileCreateResponse>}
 */
export async function createFile(client, request) {
  const url = `/api/v1/file/create`

  /** @type {FileCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {FileCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateFile']['requestBody']['content']['application/json']} FileUpdateRequestBody
 *
 * @typedef {FileUpdateRequestBody} FileUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateFile']['responses']['200']['content']['application/json']} FileUpdateResponseBody
 *
 * @typedef {FileUpdateResponseBody} FileUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUpdateRequest} request
 * @returns {Promise<FileUpdateResponse>}
 */
export async function updateFile(client, fileId, request) {
  const url = `/api/v1/file/${fileId}/update`

  /** @type {FileUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {FileUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteFile']['requestBody']['content']['application/json']} FileDeleteRequestBody
 *
 * @typedef {FileDeleteRequestBody} FileDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteFile']['responses']['200']['content']['application/json']} FileDeleteResponseBody
 *
 * @typedef {FileDeleteResponseBody} FileDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDeleteResponse>}
 */
export async function deleteFile(client, fileId) {
  const url = `/api/v1/file/${fileId}/delete`

  /** @type {FileDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {FileDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['uploadFile']['requestBody']['content']['application/json']} FileUploadRequestBody
 *
 * @typedef {{
 *   data: string|ArrayBuffer
 *   type: string,
 *   name?: string,
 * }} FileUploadRequest
 *
 * @typedef {import('../types/api/v1.js').operations['uploadFile']['responses']['200']['content']['application/json']} FileUploadResponseBody
 *
 * @typedef {FileUploadResponseBody} FileUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @param {FileUploadRequest} request
 * @returns {Promise<FileUploadResponse>}
 */
export async function uploadFile(client, fileId, request) {
  const url = `/api/v1/file/${fileId}/upload`

  const buffer = getBuffer(request.data)

  /** @type {FileUploadResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {FileUploadRequestBody} */
    record: {
      file: {
        size: buffer.byteLength,
        type: request.type,
        name: request.name,
      },
    },
  })

  const { uploadRequest } = response

  if (!uploadRequest) {
    throw new Error('Missing upload request')
  }

  await client.clientFetch(uploadRequest.url, {
    method: uploadRequest.method,

    headers: uploadRequest.headers,

    buffer: buffer,

    external: true,
  })

  return {
    id: response.id,
  }
}

/**
 * @typedef {{
 *   url: string,
 *   headers: Headers,
 *   data: ArrayBuffer
 * }} FileDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileDownloadResponse>}
 */
export async function downloadFile(client, fileId) {
  const url = `/api/v1/file/${fileId}/download`

  // @todo add api types
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['syncFile']['requestBody']['content']['application/json']} FileSyncRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['syncFile']['responses']['200']['content']['application/json']} FileSyncResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} fileId
 * @returns {Promise<FileSyncResponse>}
 */
export async function syncFile(client, fileId) {
  const url = `/api/v1/file/${fileId}/sync`

  /** @type {FileSyncResponse} */
  const response = await client.clientFetch(url, {
    /** @type {FileSyncRequestBody} */
    record: {},
  })

  return response
}
