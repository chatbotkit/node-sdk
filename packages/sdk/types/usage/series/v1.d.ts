/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchUsageSeries']['responses']['200']['content']['application/json']} UsageSeriesFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageSeriesFetchResponse,never>}
 */
export function fetchUsageSeries(client: ChatBotKitClient): ResponsePromise<UsageSeriesFetchResponse, never>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type UsageSeriesFetchResponse = import("../../types/api/v1.js").operations["fetchUsageSeries"]["responses"]["200"]["content"]["application/json"];
