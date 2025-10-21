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
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} SecretListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/json']} SecretListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactSecrets']['responses']['200']['content']['application/jsonl']} SecretListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {SecretListRequest} [request]
 * @returns {ResponsePromise<SecretListResponse,SecretListStreamType>}
 */
export function listSecrets(client, contactId, request) {
  let url = `/api/v1/contact/${contactId}/secret/list`

  /** @type {ResponsePromise<SecretListResponse,SecretListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['revokeContactSecret']['requestBody']['content']['application/json']} SecretRevokeRequestBody
 *
 * @typedef {SecretRevokeRequestBody} SecretRevokeRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['revokeContactSecret']['responses']['200']['content']['application/json']} SecretRevokeResponseBody
 *
 * @typedef {SecretRevokeResponseBody} SecretRevokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretRevokeResponse>}
 */
export async function revokeSecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/revoke`

  /** @type {SecretRevokeResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretRevokeRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['verifyContactSecret']['requestBody']['content']['application/json']} SecretVerifyRequestBody
 *
 * @typedef {SecretVerifyRequestBody} SecretVerifyRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['verifyContactSecret']['responses']['200']['content']['application/json']} SecretVerifyResponseBody
 *
 * @typedef {SecretVerifyResponseBody} SecretVerifyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretVerifyResponse>}
 */
export async function verifySecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/verify`

  /** @type {SecretVerifyResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretVerifyRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['authenticateContactSecret']['requestBody']['content']['application/json']} SecretAuthenticateRequestBody
 *
 * @typedef {SecretAuthenticateRequestBody} SecretAuthenticateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['authenticateContactSecret']['responses']['200']['content']['application/json']} SecretAuthenticateResponseBody
 *
 * @typedef {SecretAuthenticateResponseBody} SecretAuthenticateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {string} secretId
 * @returns {Promise<SecretAuthenticateResponse>}
 */
export async function authenticateSecret(client, contactId, secretId) {
  const url = `/api/v1/contact/${contactId}/secret/${secretId}/authenticate`

  /** @type {SecretAuthenticateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretAuthenticateRequestBody} */
    record: {},
  })

  return response
}
