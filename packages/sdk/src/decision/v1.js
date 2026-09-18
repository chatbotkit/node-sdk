/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {import('../types/api/v1.js').components['schemas']['DecisionQuestion']} DecisionQuestion
 *
 * @typedef {import('../types/api/v1.js').components['schemas']['DecisionAnswer']} DecisionAnswer
 */

/**
 * @typedef {import('../types/api/v1.js').operations['createDecision']['requestBody']['content']['application/json']} DecisionCreateRequestBody
 *
 * @typedef {DecisionCreateRequestBody} DecisionCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createDecision']['responses']['200']['content']['application/json']} DecisionCreateResponseBody
 *
 * @typedef {DecisionCreateResponseBody} DecisionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {DecisionCreateRequest} request
 * @returns {Promise<DecisionCreateResponse>}
 */
export async function createDecision(client, request) {
  const url = `/api/v1/decision/create`

  /** @type {DecisionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {DecisionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
