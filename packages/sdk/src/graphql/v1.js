/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * @typedef {import('../types/api/v1.js').operations['graphql']['requestBody']['content']['application/json']} GraphqlRequestBody
 *
 * @typedef {GraphqlRequestBody} GraphqlRequest
 *
 * @typedef {import('../types/api/v1.js').operations['graphql']['responses']['200']['content']['application/json']} GraphqlResponseBody
 *
 * @typedef {GraphqlResponseBody} GraphqlResponse
 *
 * @param {ChatBotKitClient} client
 * @param {GraphqlRequest} request
 * @returns {Promise<GraphqlResponse>}
 */
export async function call(client, request) {
  const url = `/api/v1/graphql`

  /** @type {GraphqlResponseBody} */
  const response = await client.clientFetch(url, {
    method: 'POST',
    /** @type {GraphqlRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
