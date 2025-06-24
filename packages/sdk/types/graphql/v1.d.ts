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
export function call(client: ChatBotKitClient, body: GraphqlRequest): Promise<GraphqlResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type GraphqlRequest = import('../types/api/v1.js').operations['graphql']['requestBody']['content']['application/json'];
export type GraphqlResponse = import('../types/api/v1.js').operations['graphql']['responses']['200']['content']['application/json'];
