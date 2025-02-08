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
 *   fingerprint?: string,
 *   email?: string,
 *   phone?: string,
 *   nick?: string,
 *   meta?: Record<string,any>
 * }} ContactOptions
 *
 * @typedef {ContactOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ContactInstance
 */

/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} ContactListRequest
 *
 * @typedef {{items: ContactInstance[]}} ContactListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ContactInstance
 * }} ContactListStreamItemType
 *
 * @typedef {ContactListStreamItemType} ContactListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ContactListRequest} [request]
 * @returns {ResponsePromise<ContactListResponse,ContactListStreamType>}
 */
export function listContacts(client, request) {
  let url = `/api/v1/contact/list`

  /** @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listContacts']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {ContactInstance & {
 * }} ContactFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactFetchResponse>}
 */
export async function fetchContact(client, contactId) {
  const url = `/api/v1/contact/${contactId}/fetch`

  /** @type {import('../types/api/v1.js').operations['fetchContact']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url)

  return response
}

/**
 * @typedef {ContactOptions & {
 * }} ContactCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactCreateRequest} request
 * @returns {Promise<ContactCreateResponse>}
 */
export async function createContact(client, request) {
  const url = `/api/v1/contact/create`

  /** @type {import('../types/api/v1.js').operations['createContact']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createContact']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {ContactOptions & {
 * }} ContactUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ContactUpdateRequest} request
 * @returns {Promise<ContactUpdateResponse>}
 */
export async function updateContact(client, contactId, request) {
  const url = `/api/v1/contact/${contactId}/update`

  /** @type {import('../types/api/v1.js').operations['updateContact']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['updateContact']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   id: string
 * }} ContactDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @returns {Promise<ContactDeleteResponse>}
 */
export async function deleteContact(client, contactId) {
  const url = `/api/v1/contact/${contactId}/delete`

  /** @type {import('../types/api/v1.js').operations['deleteContact']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['deleteContact']['requestBody']['content']['application/json']} */
    record: {},
  })

  return response
}

/**
 * @typedef {ContactOptions & {
 *   fingerprint: string
 * }} ContactEnsureRequest
 *
 * @typedef {{
 *   id: string
 * }} ContactEnsureResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ContactEnsureRequest} request
 * @returns {Promise<ContactEnsureResponse>}
 */
export async function ensureContact(client, request) {
  const url = `/api/v1/contact/ensure`

  /** @type {import('../types/api/v1.js').operations['ensureContact']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['ensureContact']['requestBody']['content']['application/json']} */
    record: {
      ...request,
    },
  })

  return response
}
