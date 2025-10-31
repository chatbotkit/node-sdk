/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
export class UsageSeriesClient extends ChatBotKitClient {
    /**
     * Fetches usage.
     *
     * @returns {ResponsePromise<import('./v1.js').UsageSeriesFetchResponse,never>}
     */
    fetch(): ResponsePromise<import("./v1.js").UsageSeriesFetchResponse, never>;
}
export default UsageSeriesClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
