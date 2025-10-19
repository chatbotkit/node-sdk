/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class UsageClient extends ChatBotKitClient {
    /**
     * @type {UsageSeriesClient} series client
     */
    series: UsageSeriesClient;
    /**
     * Fetches usage.
     *
     * @returns {ResponsePromise<import('./v1.js').UsageFetchResponse,never>}
     */
    fetch(): ResponsePromise<import("./v1.js").UsageFetchResponse, never>;
}
export default UsageClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { UsageSeriesClient } from './series/index.js';
