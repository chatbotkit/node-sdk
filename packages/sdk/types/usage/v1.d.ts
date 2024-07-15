/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
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
 * @returns {Promise<UsageFetchResponse>}
 */
export function fetchUsage(client: ChatBotKitClient): Promise<UsageFetchResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
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
