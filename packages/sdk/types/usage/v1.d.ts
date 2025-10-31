/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../types/api/v1.js').operations['fetchUsage']['responses']['200']['content']['application/json']} UsageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageFetchResponse,never>}
 */
export function fetchUsage(client: ChatBotKitClient): ResponsePromise<UsageFetchResponse, never>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type UsageFetchResponse = import("../types/api/v1.js").operations["fetchUsage"]["responses"]["200"]["content"]["application/json"];
