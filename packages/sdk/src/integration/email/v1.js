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
 * }} EmailIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/json']} EmailIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listEmailIntegrations']['responses']['200']['content']['application/jsonl']} EmailIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationListRequest} [request]
 * @returns {ResponsePromise<EmailIntegrationListResponse,EmailIntegrationListStreamType>}
 */
export function listEmailIntegrations(client, request) {
  let url = `/api/v1/integration/email/list`

  /** @type {ResponsePromise<EmailIntegrationListResponse,EmailIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {ResponsePromise<EmailIntegrationFetchResponse,never>}
 */
export function fetchEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/fetch`

  /** @type {ResponsePromise<EmailIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationCreateRequestBody
 *
 * @typedef {EmailIntegrationCreateRequestBody} EmailIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationCreateResponseBody
 *
 * @typedef {EmailIntegrationCreateResponseBody} EmailIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {EmailIntegrationCreateRequest} request
 * @returns {Promise<EmailIntegrationCreateResponse>}
 */
export async function createEmailIntegration(client, request) {
  const url = `/api/v1/integration/email/create`

  /** @type {EmailIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {EmailIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationUpdateRequestBody
 *
 * @typedef {EmailIntegrationUpdateRequestBody} EmailIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationUpdateResponseBody
 *
 * @typedef {EmailIntegrationUpdateResponseBody} EmailIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @param {EmailIntegrationUpdateRequest} request
 * @returns {Promise<EmailIntegrationUpdateResponse>}
 */
export async function updateEmailIntegration(client, emailId, request) {
  const url = `/api/v1/integration/email/${emailId}/update`

  /** @type {EmailIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {EmailIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationDeleteRequestBody
 *
 * @typedef {EmailIntegrationDeleteRequestBody} EmailIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationDeleteResponseBody
 *
 * @typedef {EmailIntegrationDeleteResponseBody} EmailIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationDeleteResponse>}
 */
export async function deleteEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/delete`

  /** @type {EmailIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {EmailIntegrationDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupEmailIntegration']['requestBody']['content']['application/json']} EmailIntegrationSetupRequestBody
 *
 * @typedef {EmailIntegrationSetupRequestBody} EmailIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupEmailIntegration']['responses']['200']['content']['application/json']} EmailIntegrationSetupResponseBody
 *
 * @typedef {EmailIntegrationSetupResponseBody} EmailIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} emailId
 * @returns {Promise<EmailIntegrationSetupResponse>}
 */
export async function setupEmailIntegration(client, emailId) {
  const url = `/api/v1/integration/email/${emailId}/setup`

  /** @type {EmailIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {EmailIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}
