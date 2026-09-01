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
 * @typedef {import('../types/api/v1.js').operations['createSecret']['requestBody']['content']['application/json']} SecretCreateRequestBody
 *
 * @typedef {SecretCreateRequestBody} SecretCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createSecret']['responses']['200']['content']['application/json']} SecretCreateResponseBody
 *
 * @typedef {SecretCreateResponseBody} SecretCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {SecretCreateRequest} request
 * @returns {Promise<SecretCreateResponse>}
 */
export async function createSecret(client, request) {
  const url = `/api/v1/secret/create`

  /** @type {SecretCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['requestBody']['content']['application/json']} SecretUpdateRequestBody
 *
 * @typedef {SecretUpdateRequestBody} SecretUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateSecret']['responses']['200']['content']['application/json']} SecretUpdateResponseBody
 *
 * @typedef {SecretUpdateResponseBody} SecretUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretUpdateRequest} request
 * @returns {Promise<SecretUpdateResponse>}
 */
export async function updateSecret(client, secretId, request) {
  const url = `/api/v1/secret/${secretId}/update`

  /** @type {SecretUpdateResponseBody} */
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
 * @typedef {SecretDeleteRequestBody} SecretDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteSecret']['responses']['200']['content']['application/json']} SecretDeleteResponseBody
 *
 * @typedef {SecretDeleteResponseBody} SecretDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretDeleteRequest} [request]
 * @returns {Promise<SecretDeleteResponse>}
 */
export async function deleteSecret(client, secretId, request) {
  const url = `/api/v1/secret/${secretId}/delete`

  /** @type {SecretDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['revokeSecret']['requestBody']['content']['application/json']} SecretRevokeRequestBody
 *
 * @typedef {SecretRevokeRequestBody} SecretRevokeRequest
 *
 * @typedef {import('../types/api/v1.js').operations['revokeSecret']['responses']['200']['content']['application/json']} SecretRevokeResponseBody
 *
 * @typedef {SecretRevokeResponseBody} SecretRevokeResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretRevokeResponse>}
 */
export async function revokeSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/revoke`

  /** @type {SecretRevokeResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretRevokeRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['verifySecret']['requestBody']['content']['application/json']} SecretVerifyRequestBody
 *
 * @typedef {SecretVerifyRequestBody} SecretVerifyRequest
 *
 * @typedef {import('../types/api/v1.js').operations['verifySecret']['responses']['200']['content']['application/json']} SecretVerifyResponseBody
 *
 * @typedef {SecretVerifyResponseBody} SecretVerifyResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretVerifyResponse>}
 */
export async function verifySecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/verify`

  /** @type {SecretVerifyResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretVerifyRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['authenticateSecret']['requestBody']['content']['application/json']} SecretAuthenticateRequestBody
 *
 * @typedef {SecretAuthenticateRequestBody} SecretAuthenticateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['authenticateSecret']['responses']['200']['content']['application/json']} SecretAuthenticateResponseBody
 *
 * @typedef {SecretAuthenticateResponseBody} SecretAuthenticateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretAuthenticateResponse>}
 */
export async function authenticateSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/authenticate`

  /** @type {SecretAuthenticateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {SecretAuthenticateRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['proxySecret']['requestBody']['content']['application/json']} SecretProxyRequestBody
 *
 * @typedef {SecretProxyRequestBody} SecretProxyRequest
 *
 * Proxies a request through the secret. The secret is injected into the request
 * headers server-side (it never leaves the platform). The upstream response -
 * success or error - is returned as a raw `Response` (inspect `.status`/`.json()`/
 * `.text()` as you would a `fetch` response, including streaming and binary
 * bodies). The one exception is a CBK `authorization_required` signal, which is
 * thrown as an {@link AuthorizationRequiredError} carrying the `url` the user
 * must visit to authenticate.
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @param {SecretProxyRequest} request
 * @returns {Promise<Response>}
 */
export async function proxySecret(client, secretId, request) {
  const url = `/api/v1/secret/${secretId}/proxy`

  return client.clientProxy(url, {
    /** @type {SecretProxyRequestBody} */
    record: request,
  })
}

/**
 * @typedef {import('../types/api/v1.js').operations['mintSecret']['responses']['200']['content']['application/json']} SecretMintResponseBody
 *
 * @typedef {SecretMintResponseBody} SecretMintResponse
 *
 * Mints a usable token from the secret (a refreshed OAuth access token or a
 * freshly signed JWT). Owner-only; only `oauth`/`jwt` secrets are mintable.
 *
 * @param {ChatBotKitClient} client
 * @param {string} secretId
 * @returns {Promise<SecretMintResponse>}
 */
export async function mintSecret(client, secretId) {
  const url = `/api/v1/secret/${secretId}/mint`

  /** @type {SecretMintResponseBody} */
  const response = await client.clientFetch(url, {
    record: {},
  })

  return response
}
