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
 *   type?: 'bearer'|'plain'|'basic',
 *   value?: string,
 *   meta?: Record<string,any>
 * }} SecretOptions
 *
 * @typedef {SecretOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} SecretInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} SecretListRequest
 *
 * @typedef {{items: SecretInstance[]}} SecretListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: SecretInstance
 * }} SecretListStreamItemType
 *
 * @typedef {SecretListStreamItemType} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client, request) {
  let url = `/api/v1/secret/list`

  /** @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listSecrets']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {SecretInstance & {
 * }} SecretFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretFetchResponse>}
 */
export async function fetchSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {SecretOptions & {
 *   model?: import('../model/v1.js').Model,
 * }} SecretCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export async function createSecret(client, request) {
  const url = `/api/v1/secret/create`

  /** @type {import('../types/api/v1.js').operations['createSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createSecret']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {SecretOptions & {
 *   model?: import('../model/v1.js').Model,
 * }} SecretUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} SecretUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretUpdateRequest} request
 * @returns {Promise<SecretUpdateResponse>}
 */
export async function updateSecret(client, secretId, request) {
  const url = `/api/v1/secret/${secretId}/update`

  /** @type {import('../types/api/v1.js').operations['updateSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateSecret']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretDeleteResponse>}
 */
export async function deleteSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteSecret']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
