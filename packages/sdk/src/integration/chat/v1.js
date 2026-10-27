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
 * }} ChatIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrations']['responses']['200']['content']['application/json']} ChatIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrations']['responses']['200']['content']['application/jsonl']} ChatIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ChatIntegrationListRequest} [request]
 * @returns {ResponsePromise<ChatIntegrationListResponse,ChatIntegrationListStreamType>}
 */
export function listChatIntegrations(client, request) {
  let url = `/api/v1/integration/chat/list`

  /** @type {ResponsePromise<ChatIntegrationListResponse,ChatIntegrationListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['fetchChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationFetchResponse,never>}
 */
export function fetchChatIntegration(client, chatId) {
  const url = `/api/v1/integration/chat/${chatId}/fetch`

  /** @type {ResponsePromise<ChatIntegrationFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationCreateRequestBody
 *
 * @typedef {ChatIntegrationCreateRequestBody} ChatIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationCreateResponseBody
 *
 * @typedef {ChatIntegrationCreateResponseBody} ChatIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ChatIntegrationCreateRequest} request
 * @returns {Promise<ChatIntegrationCreateResponse>}
 */
export async function createChatIntegration(client, request) {
  const url = `/api/v1/integration/chat/create`

  /** @type {ChatIntegrationCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['updateChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationUpdateRequestBody
 *
 * @typedef {ChatIntegrationUpdateRequestBody} ChatIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationUpdateResponseBody
 *
 * @typedef {ChatIntegrationUpdateResponseBody} ChatIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationUpdateRequest} request
 * @returns {Promise<ChatIntegrationUpdateResponse>}
 */
export async function updateChatIntegration(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/update`

  /** @type {ChatIntegrationUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['deleteChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationDeleteRequestBody
 *
 * @typedef {ChatIntegrationDeleteRequestBody} ChatIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationDeleteResponseBody
 *
 * @typedef {ChatIntegrationDeleteResponseBody} ChatIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationDeleteRequest} [request]
 * @returns {Promise<ChatIntegrationDeleteResponse>}
 */
export async function deleteChatIntegration(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/delete`

  /** @type {ChatIntegrationDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['setupChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationSetupRequestBody
 *
 * @typedef {ChatIntegrationSetupRequestBody} ChatIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationSetupResponseBody
 *
 * @typedef {ChatIntegrationSetupResponseBody} ChatIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {Promise<ChatIntegrationSetupResponse>}
 */
export async function setupChatIntegration(client, chatId) {
  const url = `/api/v1/integration/chat/${chatId}/setup`

  /** @type {ChatIntegrationSetupResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationSetupRequestBody} */
    record: {},
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['initiateChat']['requestBody']['content']['application/json']} ChatInitiateRequestBody
 *
 * @typedef {ChatInitiateRequestBody} ChatInitiateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['initiateChat']['responses']['200']['content']['application/json']} ChatInitiateResponseBody
 *
 * @typedef {ChatInitiateResponseBody} ChatInitiateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatInitiateRequest} request
 * @returns {Promise<ChatInitiateResponse>}
 */
export async function initiateChat(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/initiate`

  /** @type {ChatInitiateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatInitiateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationMembers']['responses']['200']['content']['application/json']} ChatIntegrationMemberListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationMemberListResponse,never>}
 */
export function listChatIntegrationMembers(client, chatId) {
  const url = `/api/v1/integration/chat/${chatId}/member/list`

  /** @type {ResponsePromise<ChatIntegrationMemberListResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationGroups']['responses']['200']['content']['application/json']} ChatIntegrationGroupListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationGroupListResponse,never>}
 */
export function listChatIntegrationGroups(client, chatId) {
  const url = `/api/v1/integration/chat/${chatId}/group/list`

  /** @type {ResponsePromise<ChatIntegrationGroupListResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegrationSession']['requestBody']['content']['application/json']} ChatIntegrationSessionCreateRequestBody
 *
 * @typedef {ChatIntegrationSessionCreateRequestBody} ChatIntegrationSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegrationSession']['responses']['200']['content']['application/json']} ChatIntegrationSessionCreateResponseBody
 *
 * @typedef {ChatIntegrationSessionCreateResponseBody} ChatIntegrationSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationSessionCreateRequest} request
 * @returns {Promise<ChatIntegrationSessionCreateResponse>}
 */
export async function createChatIntegrationSession(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/session/create`

  /** @type {ChatIntegrationSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['sendChatIntegrationMessage']['requestBody']['content']['application/json']} ChatIntegrationMessageSendRequestBody
 *
 * @typedef {ChatIntegrationMessageSendRequestBody} ChatIntegrationMessageSendRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['sendChatIntegrationMessage']['responses']['200']['content']['application/json']} ChatIntegrationMessageSendResponseBody
 *
 * @typedef {ChatIntegrationMessageSendResponseBody} ChatIntegrationMessageSendResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationMessageSendRequest} request
 * @returns {Promise<ChatIntegrationMessageSendResponse>}
 */
export async function sendChatIntegrationMessage(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/message/send`

  /** @type {ChatIntegrationMessageSendResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ChatIntegrationMessageSendRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{
 *   group?: string,
 *   handle?: string,
 *   contactId?: string,
 *   since?: string,
 *   limit?: number
 * }} ChatIntegrationMessageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationMessages']['responses']['200']['content']['application/json']} ChatIntegrationMessageListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationMessageListRequest} request
 * @returns {ResponsePromise<ChatIntegrationMessageListResponse,never>}
 */
export function listChatIntegrationMessages(client, chatId, request) {
  const url = `/api/v1/integration/chat/${chatId}/message/list`

  /** @type {ResponsePromise<ChatIntegrationMessageListResponse,never>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
