/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {import('../../types/api/v1.js').operations['createBotSession']['requestBody']['content']['application/json']} BotSessionCreateRequestBody
 *
 * @typedef {BotSessionCreateRequestBody} BotSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createBotSession']['responses']['200']['content']['application/json']} BotSessionCreateResponseBody
 *
 * @typedef {BotSessionCreateResponseBody} BotSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotSessionCreateRequest} request
 * @returns {Promise<BotSessionCreateResponse>}
 */
export async function createBotSession(client, botId, request) {
  const url = `/api/v1/bot/${botId}/session/create`

  /** @type {BotSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {BotSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
