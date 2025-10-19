/**
 * @typedef {import('@chatbotkit/fetch').FetchFn<import('@chatbotkit/fetch').withRetryOptions & import('@chatbotkit/fetch').withTimeoutOptions>} FetchFunction
 */
/**
 * @template T
 * @template U
 */
export class ResponsePromise<T, U> {
    /**
     * @param {URL|string} url
     * @param {{
     *   method: string,
     *   headers: Record<string,any>,
     *   data?: any,
     *   timeout?: number,
     *   retries?: number,
     *   retryDelay?: number,
     *   retryTimeout?: boolean,
     *   fetchFn?: FetchFunction
     * }} request
     * @param {Map<string,Promise<T>>} [cacheMap]
     */
    constructor(url: URL | string, request: {
        method: string;
        headers: Record<string, any>;
        data?: any;
        timeout?: number;
        retries?: number;
        retryDelay?: number;
        retryTimeout?: boolean;
        fetchFn?: FetchFunction;
    }, cacheMap?: Map<string, Promise<T>>);
    url: string | URL;
    request: {
        method: string;
        headers: Record<string, any>;
        data?: any;
        timeout?: number;
        retries?: number;
        retryDelay?: number;
        retryTimeout?: boolean;
        fetchFn?: FetchFunction;
    };
    decoder: TextDecoder;
    fetchPromise: Promise<Response> | null;
    streamPromise: Promise<Response> | null;
    cacheMap: Map<string, Promise<T>>;
    /**
     * @param {{
     *   method?: string,
     *   headers?: Record<string,any>,
     *   data?: any,
     *   timeout?: number,
     *   retries?: number,
     *   retryDelay?: number,
     *   retryTimeout?: boolean,
     *   fetchFn?: FetchFunction
     * }} [params]
     */
    getRequest(params?: {
        method?: string;
        headers?: Record<string, any>;
        data?: any;
        timeout?: number;
        retries?: number;
        retryDelay?: number;
        retryTimeout?: boolean;
        fetchFn?: FetchFunction;
    }): Promise<Response>;
    getFetchPromise(): Promise<Response>;
    getStreamPromise(): Promise<Response>;
    /**
     * @param {(...args: any[]) => any} onSuccess
     * @param {(...args: any[]) => any} onFail
     * @returns {Promise<T>}
     */
    then(onSuccess: (...args: any[]) => any, onFail: (...args: any[]) => any): Promise<T>;
    /**
     * @param {(...args: any[]) => any} fn
     */
    catch(fn: (...args: any[]) => any): Promise<any>;
    /**
     * @param {(...args: any[]) => any} fn
     */
    finally(fn: (...args: any[]) => any): Promise<Response>;
    /**
     * @returns {AsyncGenerator<U>}
     */
    stream(): AsyncGenerator<U>;
    /**
     * @param {string} [key]
     * @returns {Promise<T>}
     */
    cache(key?: string): Promise<T>;
    get [Symbol.toStringTag](): string;
}
/**
 * @typedef {Object} ChatBotKitClientOptions
 * @property {string} secret A token to authenticate with the API
 * @property {string} [host] An optional hostname to use for the API
 * @property {'http:'|'https:'} [protocol] An optional protocol to use for the API
 * @property {Record<string,string>} [endpoints] An optional map of endpoints to override
 * @property {string} [runAsUserId] An optional user ID to run as
 * @property {string} [runAsChildUserEmail] An optional child user email to run as (experimental)
 * @property {string} [timezone] An optional timezone to use for the API
 * @property {Record<string,string>} [headers] An optional map of headers to add to the request
 * @property {number} [timeout] An optional timeout in milliseconds for the request
 * @property {number} [retries] An optional number of retries for the request
 * @property {number} [retryDelay] An optional delay in milliseconds between retries
 * @property {boolean} [retryTimeout] An optional flag to retry on timeout errors
 * @property {FetchFunction} [fetchFn] An optional fetch implementation function to use instead
 */
export class ChatBotKitClient {
    /**
     * @param {ChatBotKitClientOptions} options
     */
    constructor(options: ChatBotKitClientOptions);
    secret: string;
    url: URL;
    endpoints: Record<string, string>;
    runAsUserId: string | undefined;
    runAsChildUserEmail: string | undefined;
    timezone: string | undefined;
    headers: Record<string, string>;
    timeout: number | undefined;
    retries: number | undefined;
    retryDelay: number | undefined;
    retryTimeout: boolean | undefined;
    fetchFn: FetchFunction;
    cacheMap: Map<any, any>;
    /**
     * @template T
     * @template U
     * @param {string} path
     * @param {{
     *   method?: string,
     *   headers?: Record<string,any>,
     *   query?: Record<string,any>,
     *   record?: Record<string,any>,
     *   buffer?: ArrayBuffer,
     *   file?: { name?: string, type?: string, data: string|ArrayBuffer },
     *   external?: boolean,
     *   endpoint?: string,
     *   timeout?: number,
     *   retries?: number,
     *   retryDelay?: number,
     *   retryTimeout?: boolean,
     *   fetchFn?: FetchFunction
     * }} [options]
     * @returns {ResponsePromise<T,U>}
     */
    clientFetch<T, U>(path: string, options?: {
        method?: string;
        headers?: Record<string, any>;
        query?: Record<string, any>;
        record?: Record<string, any>;
        buffer?: ArrayBuffer;
        file?: {
            name?: string;
            type?: string;
            data: string | ArrayBuffer;
        };
        external?: boolean;
        endpoint?: string;
        timeout?: number;
        retries?: number;
        retryDelay?: number;
        retryTimeout?: boolean;
        fetchFn?: FetchFunction;
    }): ResponsePromise<T, U>;
}
export type FetchFunction = import("@chatbotkit/fetch").FetchFn<import("@chatbotkit/fetch").withRetryOptions & import("@chatbotkit/fetch").withTimeoutOptions>;
export type ChatBotKitClientOptions = {
    /**
     * A token to authenticate with the API
     */
    secret: string;
    /**
     * An optional hostname to use for the API
     */
    host?: string | undefined;
    /**
     * An optional protocol to use for the API
     */
    protocol?: "http:" | "https:" | undefined;
    /**
     * An optional map of endpoints to override
     */
    endpoints?: Record<string, string> | undefined;
    /**
     * An optional user ID to run as
     */
    runAsUserId?: string | undefined;
    /**
     * An optional child user email to run as (experimental)
     */
    runAsChildUserEmail?: string | undefined;
    /**
     * An optional timezone to use for the API
     */
    timezone?: string | undefined;
    /**
     * An optional map of headers to add to the request
     */
    headers?: Record<string, string> | undefined;
    /**
     * An optional timeout in milliseconds for the request
     */
    timeout?: number | undefined;
    /**
     * An optional number of retries for the request
     */
    retries?: number | undefined;
    /**
     * An optional delay in milliseconds between retries
     */
    retryDelay?: number | undefined;
    /**
     * An optional flag to retry on timeout errors
     */
    retryTimeout?: boolean | undefined;
    /**
     * An optional fetch implementation function to use instead
     */
    fetchFn?: FetchFunction | undefined;
};
