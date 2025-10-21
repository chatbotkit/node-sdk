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
 *   query: string,
 *   variables?: {
 *     [key: string]: unknown
 *   }
 *   operationName?: string
 * }} GraphqlRequest
 *
 * @typedef {import('../types/api/v1.js').operations['graphql']['requestBody']['content']['application/json']} GraphqlRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['graphql']['responses']['200']['content']['application/json']} GraphqlResponse
 *
 * @param {ChatBotKitClient} client
 * @param {GraphqlRequest} body
 * @returns {Promise<GraphqlResponse>}
 */
export async function call(client, body) {
  const url = `/api/v1/graphql`

  /** @type {GraphqlResponse} */
  const response = await client.clientFetch(url, {
    method: 'POST',
    /** @type {GraphqlRequestBody} */
    record: {
      ...body,
    },
  })

  return response
}
