/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../../types/api/v1.js').operations['createComputerSession']['requestBody']['content']['application/json']} ComputerSessionCreateRequestBody
 *
 * @typedef {ComputerSessionCreateRequestBody} ComputerSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createComputerSession']['responses']['200']['content']['application/json']} ComputerSessionCreateResponseBody
 *
 * @typedef {ComputerSessionCreateResponseBody} ComputerSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerSessionCreateRequest} [request]
 * @returns {Promise<ComputerSessionCreateResponse>}
 */
export async function createComputerSession(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/session/create`

  /** @type {ComputerSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
