/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Encodes a storage path for use in URLs by encoding each segment.
 *
 * @param {string} path
 * @returns {string}
 */
function encodeStoragePath(path) {
  return path.split('/').map(encodeURIComponent).join('/')
}

/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['listSpaceStoragePath']['parameters']['query']>} SpaceStorageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} [path]
 * @param {SpaceStorageListRequest} [request]
 * @returns {ResponsePromise<SpaceStorageListResponse,never>}
 */
export function listSpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/list${
    path ? `/${encodeStoragePath(path)}` : ''
  }`

  /** @type {ResponsePromise<SpaceStorageListResponse,never>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['downloadSpaceStoragePath']['parameters']['query']>} SpaceStorageDownloadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['downloadSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageDownloadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageDownloadRequest} [request]
 * @returns {ResponsePromise<SpaceStorageDownloadResponse,never>}
 */
export function downloadSpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/download/${encodeStoragePath(
    path
  )}`

  /** @type {ResponsePromise<SpaceStorageDownloadResponse,never>} */
  const response = client.clientFetch(url, {
    headers: { Accept: 'application/json' },
    query: request,
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['uploadSpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageUploadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['uploadSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageUploadRequest} request
 * @returns {Promise<SpaceStorageUploadResponse>}
 */
export async function uploadSpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/upload/${encodeStoragePath(
    path
  )}`

  /** @type {SpaceStorageUploadResponse} */
  const response = await client.clientFetch(url, {
    record: { ...request },
  })

  return response
}

/**
 * @typedef {NonNullable<import('../../types/api/v1.js').operations['deleteSpaceStoragePath']['requestBody']>['content']['application/json']} SpaceStorageDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageDeleteRequest} [request]
 * @returns {Promise<SpaceStorageDeleteResponse>}
 */
export async function deleteSpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/delete/${encodeStoragePath(
    path
  )}`

  /** @type {SpaceStorageDeleteResponse} */
  const response = await client.clientFetch(url, {
    record: request ? { ...request } : {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['copySpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageCopyRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['copySpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageCopyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageCopyRequest} request
 * @returns {Promise<SpaceStorageCopyResponse>}
 */
export async function copySpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/copy/${encodeStoragePath(path)}`

  /** @type {SpaceStorageCopyResponse} */
  const response = await client.clientFetch(url, {
    record: { ...request },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['moveSpaceStoragePath']['requestBody']['content']['application/json']} SpaceStorageMoveRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['moveSpaceStoragePath']['responses']['200']['content']['application/json']} SpaceStorageMoveResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} spaceId
 * @param {string} path
 * @param {SpaceStorageMoveRequest} request
 * @returns {Promise<SpaceStorageMoveResponse>}
 */
export async function moveSpaceStorage(client, spaceId, path, request) {
  const url = `/api/v1/space/${spaceId}/storage/move/${encodeStoragePath(path)}`

  /** @type {SpaceStorageMoveResponse} */
  const response = await client.clientFetch(url, {
    record: { ...request },
  })

  return response
}
