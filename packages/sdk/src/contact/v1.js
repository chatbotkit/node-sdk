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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['requestBody']['content']['application/json']} ContactCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createContact']['responses']['200']['content']['application/json']} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export async function createContact(client, request) {
  const url = `/api/v1/contact/create`

  /** @type {ContactCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ContactCreateRequestBody} */
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
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['requestBody']['content']['application/json']} ContactUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateContact']['responses']['200']['content']['application/json']} ContactUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ContactUpdateRequest} request
 * @returns {Promise<ContactUpdateResponse>}
 */
export async function updateContact(client, contactId, request) {
  const url = `/api/v1/contact/${contactId}/update`

  /** @type {ContactUpdateResponse} */
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
 * @typedef {import('../types/api/v1.js').operations['deleteContact']['responses']['200']['content']['application/json']} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export async function deleteContact(client, contactId) {
  const url = `/api/v1/contact/${contactId}/delete`

  /** @type {ContactDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ContactDeleteRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   fingerprint: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   preferences?: string,
 *   verifiedAt?: number,
 *   meta?: Record<string,any>
 * }} ContactEnsureRequest
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['requestBody']['content']['application/json']} ContactEnsureRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['ensureContact']['responses']['200']['content']['application/json']} ContactEnsureResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactEnsureRequest} request
 * @returns {Promise<ContactEnsureResponse>}
 */
export async function ensureContact(client, request) {
  const url = `/api/v1/contact/ensure`

  /** @type {ContactEnsureResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ContactEnsureRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
