/**
 * @typedef {(url: string, options?: RequestInit) => Promise<Response>} FetchFn
 */
/**
 * @typedef {{
 *   timeout?: number
 * }} withTimeoutOptions
 *
 * Add timeout capabilities to any fetch implementation.
 *
 * @param {FetchFn} fetch
 * @param {withTimeoutOptions} [defaultOptions]
 * @returns {FetchFn}
 */
export function withTimeout(fetch: FetchFn, defaultOptions?: withTimeoutOptions | undefined): FetchFn;
/**
 * @typedef {{
 *   retries?: number,
 *   retryDelay?: number,
 *   retryTimeout?: boolean
 *   retryStatuses?: number[]
 * }} withRetryOptions
 *
 * @param {FetchFn} fetch
 * @param {withRetryOptions} [defaultOptions]
 * @returns {FetchFn}
 */
export function withRetry(fetch: FetchFn, defaultOptions?: withRetryOptions | undefined): FetchFn;
/**
 * Expose a JSONL stream as an async iterable.
 *
 * @param {ReadableStream<Uint8Array> & {[Symbol.asyncIterator](): AsyncIterator<Uint8Array>}} body
 * @returns {AsyncGenerator<Record<string,any>>}
 */
export function jsonl(body: ReadableStream<Uint8Array> & {
    [Symbol.asyncIterator](): AsyncIterator<Uint8Array>;
}): AsyncGenerator<Record<string, any>>;
export const ABORT_ERROR_NAME: "AbortError";
export const TIMEOUT_ERROR_NAME: "TimeoutError";
/**
 */
export class FetchError extends Error {
    /**
     * @param {string} message
     * @param {number|string} code
     * @param {string} url
     * @param {RequestInit & withTimeoutOptions & withRetryOptions} request
     * @param {Response} response
     */
    constructor(message: string, code: number | string, url: string, request: RequestInit & withTimeoutOptions & withRetryOptions, response: Response);
    code: string | number;
    url: string;
    request: RequestInit & withTimeoutOptions & withRetryOptions;
    response: Response;
}
export type FetchFn = (url: string, options?: RequestInit) => Promise<Response>;
/**
 * Add timeout capabilities to any fetch implementation.
 */
export type withTimeoutOptions = {
    timeout?: number;
};
export type withRetryOptions = {
    retries?: number;
    retryDelay?: number;
    retryTimeout?: boolean;
    retryStatuses?: number[];
};
import { fetch } from 'node-fetch-native';
import { Blob } from 'node-fetch-native';
import { FormData } from 'node-fetch-native';
export { fetch, Blob, FormData };
