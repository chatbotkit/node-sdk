/**
 * Create a FetchError from a Response object.
 *
 * @param {Response} response
 * @param {Record<string,any>} [meta]
 * @returns {Promise<FetchError>}
 */
export function getFetchError(response: Response, meta?: Record<string, any>): Promise<FetchError>;
/**
 * @param {string|URL} url
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 */
export function fetch(url: string | URL, init?: RequestInit): Promise<Response>;
/**
 * @param {(AbortSignal|null|undefined)[]} signals
 * @returns {AbortSignal}
 */
export function anySignal(signals: (AbortSignal | null | undefined)[]): AbortSignal;
/**
 * @template T
 * @typedef {(url: string|URL, options?: RequestInit & T) => Promise<Response>} FetchFn
 */
/**
 * @typedef {{
 *   timeout?: number
 * }} withTimeoutOptions
 *
 * Add timeout capabilities to any fetch implementation.
 *
 * @param {FetchFn<{}>} fetch
 * @param {withTimeoutOptions} [defaultOptions]
 * @returns {FetchFn<withTimeoutOptions>}
 */
export function withTimeout(fetch: FetchFn<{}>, defaultOptions?: withTimeoutOptions): FetchFn<withTimeoutOptions>;
/**
 * @typedef {{
 *   retries?: number,
 *   retryDelay?: number,
 *   retryTimeout?: boolean
 *   retryStatuses?: number[]
 * }} withRetryOptions
 *
 * Add retry capabilities to any fetch implementation.
 *
 * @param {FetchFn<{}>} fetch
 * @param {withRetryOptions} [defaultOptions]
 * @returns {FetchFn<withRetryOptions>}
 */
export function withRetry(fetch: FetchFn<{}>, defaultOptions?: withRetryOptions): FetchFn<withRetryOptions>;
/**
 * Expose a JSONL stream as an async iterable.
 *
 * @param {ReadableStream<Uint8Array> & {[Symbol.asyncIterator](): AsyncIterator<Uint8Array>}} body
 * @returns {AsyncGenerator<Record<string,any>>}
 */
export function jsonl(body: ReadableStream<Uint8Array> & {
    [Symbol.asyncIterator](): AsyncIterator<Uint8Array>;
}): AsyncGenerator<Record<string, any>>;
export const Blob: {
    new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
    prototype: Blob;
};
export const FormData: {
    new (form?: HTMLFormElement, submitter?: HTMLElement | null): FormData;
    prototype: FormData;
};
export const OK_STATUS: 200;
export const NOT_MODIFIED_STATUS: 304;
export const BAD_REQUEST_STATUS: 400;
export const NOT_AUTHENTICATED_STATUS: 401;
export const NO_SUBSCRIPTION_STATUS: 402;
export const NOT_AUTHORIZED_STATUS: 403;
export const NOT_FOUND_STATUS: 404;
export const METHOD_NOT_ALLOWED_STATUS: 405;
export const TIMEOUT_STATUS: 408;
export const CONFLICT_STATUS: 409;
export const UNPROCESSABLE_ENTITY_STATUS: 422;
export const TOO_MANY_REQUESTS_STATUS: 429;
export const LIMITS_REACHED_STATUS: 429;
export const INTERNAL_SERVER_ERROR_STATUS: 500;
export const NOT_IMPLEMENTED_STATUS: 501;
export const BAD_GATEWAY_STATUS: 502;
export const SERVICE_UNAVAILABLE_STATUS: 503;
export const GATEWAY_TIMEOUT_STATUS: 504;
export const OK_MESSAGE: "OK";
export const NOT_MODIFIED_MESSAGE: "Not modified";
export const BAD_REQUEST_MESSAGE: "Bad request";
export const NOT_AUTHENTICATED_MESSAGE: "Not authenticated";
export const NOT_AUTHORIZED_MESSAGE: "Not authorized";
export const NO_SUBSCRIPTION_MESSAGE: "No subscription";
export const NOT_FOUND_MESSAGE: "Not found";
export const METHOD_NOT_ALLOWED_MESSAGE: "Method not allowed";
export const TIMEOUT_MESSAGE: "Timeout";
export const CONFLICT_MESSAGE: "Conflict";
export const UNPROCESSABLE_ENTITY_STATUS_MESSAGE: "Unprocessable entity";
export const TOO_MANY_REQUESTS_MESSAGE: "Too many requests";
export const LIMITS_REACHED_MESSAGE: "Limits reached";
export const INTERNAL_SERVER_ERROR_MESSAGE: "Internal server error";
export const NOT_IMPLEMENTED_MESSAGE: "Not implemented";
export const BAD_GATEWAY_MESSAGE: "Bad gateway";
export const SERVICE_UNAVAILABLE_MESSAGE: "Service unavailable";
export const GATEWAY_TIMEOUT_MESSAGE: "Gateway timeout";
export const OK_CODE: "OK";
export const NOT_MODIFIED_CODE: "NOT_MODIFIED";
export const BAD_REQUEST_CODE: "BAD_REQUEST";
export const NOT_AUTHENTICATED_CODE: "NOT_AUTHENTICATED";
export const NOT_AUTHORIZED_CODE: "NOT_AUTHORIZED";
export const NO_SUBSCRIPTION_CODE: "NO_SUBSCRIPTION";
export const NOT_FOUND_CODE: "NOT_FOUND";
export const METHOD_NOT_ALLOWED_CODE: "METHOD_NOT_ALLOWED";
export const TIMEOUT_CODE: "TIMEOUT";
export const CONFLICT_CODE: "CONFLICT";
export const UNPROCESSABLE_ENTITY_CODE: "UNPROCESSABLE_ENTITY";
export const TOO_MANY_REQUESTS_CODE: "TOO_MANY_REQUESTS";
export const LIMITS_REACHED_CODE: "LIMITS_REACHED";
export const INTERNAL_SERVER_ERROR_CODE: "INTERNAL_SERVER_ERROR";
export const NOT_IMPLEMENTED_CODE: "NOT_IMPLEMENTED";
export const BAD_GATEWAY_CODE: "BAD_GATEWAY";
export const SERVICE_UNAVAILABLE_CODE: "SERVICE_UNAVAILABLE";
export const GATEWAY_TIMEOUT_CODE: "GATEWAY_TIMEOUT";
/**
 * @type {Record<number,string>}
 */
export const statusToCodeMap: Record<number, string>;
/**
 * A FetchError is thrown when a fetch request fails.
 */
export class FetchError extends Error {
    /**
     * @param {string} message
     * @param {string} code
     * @param {Record<string,any>} [meta]
     */
    constructor(message: string, code: string, meta?: Record<string, any>);
    code: string;
}
export const ABORT_ERROR_NAME: "AbortError";
export const TIMEOUT_ERROR_NAME: "TimeoutError";
export const DEFAULT_TIMEOUT: 30000;
export const DEFAULT_RETRIES: 5;
export const DEFAULT_RETRY_DELAY: 250;
export const DEFAULT_RETRY_TIMEOUT: false;
export const DEFAULT_RETRY_STATUSES: number[];
/**
 * A AbortError is thrown when a fetch request is aborted.
 */
export class AbortError extends Error {
    code: string;
}
/**
 * A TimeoutError is thrown when a fetch request times out.
 */
export class TimeoutError extends Error {
    code: string;
}
export default fetch;
export type FetchFn<T> = (url: string | URL, options?: RequestInit & T) => Promise<Response>;
/**
 * Add timeout capabilities to any fetch implementation.
 */
export type withTimeoutOptions = {
    timeout?: number;
};
/**
 * Add retry capabilities to any fetch implementation.
 */
export type withRetryOptions = {
    retries?: number;
    retryDelay?: number;
    retryTimeout?: boolean;
    retryStatuses?: number[];
};
