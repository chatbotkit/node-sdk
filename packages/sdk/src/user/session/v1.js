/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   durationInSeconds?: number | null,
 *   config?: {
 *     allowedRoutes?: string[] | null,
 *     contactId?: string | null,
 *     namespace?: string | null,
 *   } | null,
 * }} UserSessionCreateRequestBody
 *
 * @typedef {UserSessionCreateRequestBody} UserSessionCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   expiresAt: number,
 * }} UserSessionCreateResponseBody
 *
 * @typedef {UserSessionCreateResponseBody} UserSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {UserSessionCreateRequest} request
 * @returns {Promise<UserSessionCreateResponse>}
 */
export async function createUserSession(client, userId, request) {
  const url = `/api/v1/user/${userId}/session/create`

  /** @type {UserSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {UserSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
