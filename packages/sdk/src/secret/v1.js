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
 * }} SecretListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/json']} SecretListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/jsonl']} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client, request) {
  let url = `/api/v1/secret/list`

  /** @type {ResponsePromise<SecretListResponse,SecretListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchSecret']['responses']['200']['content']['application/json']} SecretFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {ResponsePromise<SecretFetchResponse,never>}
 */
export function fetchSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/fetch`

  /** @type {ResponsePromise<SecretFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   kind?: 'shared'|'personal',
 *   type?: 'plain'|'basic'|'bearer'|'oauth'|'template'|'reference',
 *   value?: string,
 *   config?: Record<string,any>,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SecretCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['requestBody']['content']['application/json']} SecretCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['responses']['200']['content']['application/json']} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export async function createSecret(client, request) {
  const url = `/api/v1/secret/create`

  /** @type {SecretCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SecretCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   kind?: 'shared'|'personal',
 *   type?: 'plain'|'basic'|'bearer'|'oauth'|'template'|'reference',
 *   value?: string,
 *   config?: Record<string,any>,
 *   visibility?: 'private'|'protected'|'public',
 *   meta?: Record<string,any>,
 *   blueprintId?: string
 * }} SecretUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['requestBody']['content']['application/json']} SecretUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['responses']['200']['content']['application/json']} SecretUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretUpdateRequest} request
 * @returns {Promise<SecretUpdateResponse>}
 */
export async function updateSecret(client, secretId, request) {
  const url = `/api/v1/secret/${secretId}/update`

  /** @type {SecretUpdateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SecretUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['requestBody']['content']['application/json']} SecretDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['responses']['200']['content']['application/json']} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretDeleteResponse>}
 */
export async function deleteSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/delete`

  /** @type {SecretDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {SecretDeleteRequestBody} */
    record: {},
  })

  return response
}
