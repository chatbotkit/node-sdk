/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../../types/api/v1.js').operations['readComputerFile']['requestBody']['content']['application/json']} ComputerFileReadRequestBody
 *
 * @typedef {ComputerFileReadRequestBody} ComputerFileReadRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['readComputerFile']['responses']['200']['content']['application/json']} ComputerFileReadResponseBody
 *
 * @typedef {ComputerFileReadResponseBody} ComputerFileReadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerFileReadRequest} request
 * @returns {Promise<ComputerFileReadResponse>}
 */
export async function readComputerFile(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/file/read`

  /** @type {ComputerFileReadResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerFileReadRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

/**
 * @typedef {import('../../types/api/v1.js').operations['writeComputerFile']['requestBody']['content']['application/json']} ComputerFileWriteRequestBody
 *
 * @typedef {ComputerFileWriteRequestBody} ComputerFileWriteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['writeComputerFile']['responses']['200']['content']['application/json']} ComputerFileWriteResponseBody
 *
 * @typedef {ComputerFileWriteResponseBody} ComputerFileWriteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} computerId
 * @param {ComputerFileWriteRequest} request
 * @returns {Promise<ComputerFileWriteResponse>}
 */
export async function writeComputerFile(client, computerId, request) {
  const url = `/api/v1/computer/${computerId}/file/write`

  /** @type {ComputerFileWriteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {ComputerFileWriteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
