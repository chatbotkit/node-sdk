/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
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
 * @returns {ResponsePromise<UsageSeriesFetchResponse,never>}
 */
export function fetchUsageSeries(client: ChatBotKitClient): ResponsePromise<UsageSeriesFetchResponse, never>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
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
