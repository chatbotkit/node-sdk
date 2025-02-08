/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   type?: string,
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
 * @param {string} contactId
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/secret/list`

  /** @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretDeleteResponse>}
 */
export async function deleteSecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/delete`

  /** @type {import('../../types/api/v1.js').operations['deleteContactSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['deleteContactSecret']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string,
 *   status: 'unauthenticated'|'authenticated',
 *   action?: {type: 'authenticate', url: string}
 * }} SecretVerifyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretVerifyResponse>}
 */
export async function verifySecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/verify`

  /** @type {import('../../types/api/v1.js').operations['verifyContactSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['verifyContactSecret']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 *   url: string
 * }} SecretAuthenticateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretAuthenticateResponse>}
 */
export async function authenticateSecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/authenticate`

  /** @type {import('../../types/api/v1.js').operations['authenticateContactSecret']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['authenticateContactSecret']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}
