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
 * @typedef {{
 *   data?: {
 *     [key: string]: unknown
 *   },
 *   errors?: {
 *     message?: string
 *   }[]
 * }} GraphqlResponse
 */

/**
 * @param {ChatBotKitClient} client
 * @param {GraphqlRequest} body
 * @returns {Promise<GraphqlResponse>}
 */
export async function call(client, body) {
  const url = `/api/v1/graphql`

  /** @typedef {import('../types/api/v1.js').operations['graphql']['responses']['200']['content']['application/json']} T */
  /** @type {ResponsePromise<T,never>} */
  const response = client.clientFetch(url, {
    method: 'POST',
    /** @type {import('../types/api/v1.js').operations['graphql']['requestBody']['content']['application/json']} */
    record: {
      ...body,
    },
  })

  return response
}
