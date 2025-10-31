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
 * }} ContactListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/json']} ContactListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/jsonl']} ContactListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ContactListRequest} [request]
 * @returns {ResponsePromise<ContactListResponse,ContactListStreamType>}
 */
export function listContacts(client, request) {
  let url = `/api/v1/contact/list`

  /** @type {ResponsePromise<ContactListResponse,ContactListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchContact']['responses']['200']['content']['application/json']} ContactFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {ResponsePromise<ContactFetchResponse,never>}
 */
export function fetchContact(client, contactId) {
  const url = `/api/v1/contact/${contactId}/fetch`

  /** @type {ResponsePromise<ContactFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createContact']['requestBody']['content']['application/json']} ContactCreateRequestBody
 *
 * @typedef {ContactCreateRequestBody} ContactCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['responses']['200']['content']['application/json']} ContactCreateResponseBody
 *
 * @typedef {ContactCreateResponseBody} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export async function createContact(client, request) {
  const url = `/api/v1/contact/create`

  /** @type {ContactCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ContactCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateContact']['requestBody']['content']['application/json']} ContactUpdateRequestBody
 *
 * @typedef {ContactUpdateRequestBody} ContactUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['responses']['200']['content']['application/json']} ContactUpdateResponseBody
 *
 * @typedef {ContactUpdateResponseBody} ContactUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ContactUpdateRequest} request
 * @returns {Promise<ContactUpdateResponse>}
 */
export async function updateContact(client, contactId, request) {
  const url = `/api/v1/contact/${contactId}/update`

  /** @type {ContactUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ContactUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['requestBody']['content']['application/json']} ContactDeleteRequestBody
 *
 * @typedef {ContactDeleteRequestBody} ContactDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['responses']['200']['content']['application/json']} ContactDeleteResponseBody
 *
 * @typedef {ContactDeleteResponseBody} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export async function deleteContact(client, contactId) {
  const url = `/api/v1/contact/${contactId}/delete`

  /** @type {ContactDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ContactDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['requestBody']['content']['application/json']} ContactEnsureRequestBody
 *
 * @typedef {ContactEnsureRequestBody} ContactEnsureRequest
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['responses']['200']['content']['application/json']} ContactEnsureResponseBody
 *
 * @typedef {ContactEnsureResponseBody} ContactEnsureResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactEnsureRequest} request
 * @returns {Promise<ContactEnsureResponse>}
 */
export async function ensureContact(client, request) {
  const url = `/api/v1/contact/ensure`

  /** @type {ContactEnsureResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ContactEnsureRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
