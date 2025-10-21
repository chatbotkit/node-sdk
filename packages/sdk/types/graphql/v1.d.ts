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
export function call(client: ChatBotKitClient, body: GraphqlRequest): Promise<GraphqlResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type GraphqlRequest = {
    query: string;
    variables?: {
        [key: string]: unknown;
    };
    operationName?: string;
};
export type GraphqlRequestBody = import("../types/api/v1.js").operations["graphql"]["requestBody"]["content"]["application/json"];
export type GraphqlResponse = import("../types/api/v1.js").operations["graphql"]["responses"]["200"]["content"]["application/json"];
