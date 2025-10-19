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
 *   tokens: number,
 *   conversations: number,
 *   messages: number,
 *   database: {
 *     datasets: number,
 *     records: number,
 *     skillsets: number,
 *     abilities: number,
 *     files: number,
 *     users: number
 *   }
 * }} UsageOptions
 *
 * @typedef {UsageOptions & {
 * }} UsageInstance
 */
/**
 * @typedef {UsageInstance & {
 * }} UsageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {ResponsePromise<UsageFetchResponse,never>}
 */
export function fetchUsage(client: ChatBotKitClient): ResponsePromise<UsageFetchResponse, never>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type UsageOptions = {
    tokens: number;
    conversations: number;
    messages: number;
    database: {
        datasets: number;
        records: number;
        skillsets: number;
        abilities: number;
        files: number;
        users: number;
    };
};
export type UsageInstance = UsageOptions & {};
export type UsageFetchResponse = UsageInstance & {};
