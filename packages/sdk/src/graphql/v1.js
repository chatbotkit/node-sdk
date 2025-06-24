/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {import('../types/api/v1.js').operations['graphql']['requestBody']['content']['application/json']} GraphqlRequest
 * @typedef {import('../types/api/v1.js').operations['graphql']['responses']['200']['content']['application/json']} GraphqlResponse
 */

/**
 * @param {ChatBotKitClient} client
 * @param {GraphqlRequest} body
 * @returns {Promise<GraphqlResponse>}
 */
export async function call(client, body) {
  const url = `/api/v1/graphql`

  const response = client.clientFetch(url, {
    method: 'POST',
    record: body,
  })

  return response
}
