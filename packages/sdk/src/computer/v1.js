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
 * }} ComputerListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listComputers']['responses']['200']['content']['application/json']} ComputerListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listComputers']['responses']['200']['content']['application/jsonl']} ComputerListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ComputerListRequest} [request]
 * @returns {ResponsePromise<ComputerListResponse,ComputerListStreamType>}
 */
export function listComputers(client, request) {
  let url = `/api/v1/computer/list`

  /** @type {ResponsePromise<ComputerListResponse,ComputerListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['fetchComputer']['responses']['200']['content']['application/json']} ComputerFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {ResponsePromise<ComputerFetchResponse,never>}
 */
export function fetchComputer(client, computerId) {
  const url = `/api/v1/computer/${computerId}/fetch`

  /** @type {ResponsePromise<ComputerFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['createComputer']['requestBody']['content']['application/json']} ComputerCreateRequestBody
 *
 * @typedef {ComputerCreateRequestBody} ComputerCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createComputer']['responses']['200']['content']['application/json']} ComputerCreateResponseBody
 *
 * @typedef {ComputerCreateResponseBody} ComputerCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ComputerCreateRequest} request
 * @returns {Promise<ComputerCreateResponse>}
 */
export async function createComputer(client, request) {
  const url = `/api/v1/computer/create`

  /** @type {ComputerCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['updateComputer']['requestBody']['content']['application/json']} ComputerUpdateRequestBody
 *
 * @typedef {ComputerUpdateRequestBody} ComputerUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateComputer']['responses']['200']['content']['application/json']} ComputerUpdateResponseBody
 *
 * @typedef {ComputerUpdateResponseBody} ComputerUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerUpdateRequest} request
 * @returns {Promise<ComputerUpdateResponse>}
 */
export async function updateComputer(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/update`

  /** @type {ComputerUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {{}} ComputerDeleteRequest
 *
 * @typedef {{ id: string }} ComputerDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerDeleteRequest} [request]
 * @returns {Promise<ComputerDeleteResponse>}
 */
export async function deleteComputer(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/delete`

  /** @type {ComputerDeleteResponse} */
  const response = await client.clientFetch(url, {
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['startComputer']['responses']['200']['content']['application/json']} ComputerStartResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerStartResponse>}
 */
export async function startComputer(client, computerId) {
  const url = `/api/v1/computer/${computerId}/start`

  /** @type {ComputerStartResponse} */
  const response = await client.clientFetch(url, {
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['stopComputer']['responses']['200']['content']['application/json']} ComputerStopResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerStopResponse>}
 */
export async function stopComputer(client, computerId) {
  const url = `/api/v1/computer/${computerId}/stop`

  /** @type {ComputerStopResponse} */
  const response = await client.clientFetch(url, {
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['restartComputer']['responses']['200']['content']['application/json']} ComputerRestartResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @returns {Promise<ComputerRestartResponse>}
 */
export async function restartComputer(client, computerId) {
  const url = `/api/v1/computer/${computerId}/restart`

  /** @type {ComputerRestartResponse} */
  const response = await client.clientFetch(url, {
    record: {},
  })

  return response
}

/**
 * @typedef {import('../types/api/v1.js').operations['execComputer']['requestBody']['content']['application/json']} ComputerExecRequestBody
 *
 * @typedef {ComputerExecRequestBody} ComputerExecRequest
 *
 * @typedef {import('../types/api/v1.js').operations['execComputer']['responses']['200']['content']['application/json']} ComputerExecResponseBody
 *
 * @typedef {ComputerExecResponseBody} ComputerExecResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerExecRequest} request
 * @returns {Promise<ComputerExecResponse>}
 */
export async function execComputer(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/exec`

  /** @type {ComputerExecResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerExecRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
