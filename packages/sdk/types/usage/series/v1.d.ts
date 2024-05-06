/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {{
 *   tokens: {date: number, total: number}[],
 *   conversations: {date: number, total: number}[],
 *   messages: {date: number, total: number}[]
 * }} UsageSeriesOptions
 *
 * @typedef {UsageSeriesOptions & {
 * }} UsageSeriesInstance
 */
/**
 * @typedef {UsageSeriesInstance & {
 * }} UsageSeriesFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @returns {Promise<UsageSeriesFetchResponse>}
 */
export function fetchUsageSeries(client: ChatBotKitClient): Promise<UsageSeriesFetchResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type UsageSeriesOptions = {
    tokens: {
        date: number;
        total: number;
    }[];
    conversations: {
        date: number;
        total: number;
    }[];
    messages: {
        date: number;
        total: number;
    }[];
};
export type UsageSeriesInstance = UsageSeriesOptions & {};
export type UsageSeriesFetchResponse = UsageSeriesInstance & {};
