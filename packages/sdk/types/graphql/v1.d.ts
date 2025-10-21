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
export function call(client: ChatBotKitClient, request: GraphqlRequest): Promise<GraphqlResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type GraphqlRequestBody = import("../types/api/v1.js").operations["graphql"]["requestBody"]["content"]["application/json"];
export type GraphqlRequest = GraphqlRequestBody;
export type GraphqlResponseBody = import("../types/api/v1.js").operations["graphql"]["responses"]["200"]["content"]["application/json"];
export type GraphqlResponse = GraphqlResponseBody;
