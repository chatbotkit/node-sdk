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
     *   data?: Record<string,any>
     * }} request
     */
    constructor(url: URL | string, request: {
        method: string;
        headers: Record<string, any>;
        data?: Record<string, any>;
    });
    url: string | URL;
    request: {
        method: string;
        headers: Record<string, any>;
        data?: Record<string, any> | undefined;
    };
    decoder: TextDecoder;
    fetchPromise: Promise<Response> | null;
    streamPromise: Promise<Response> | null;
    /**
     * @param {{headers?: Record<string,any>, data?: Record<string,any>}} [params]
     */
    getRequest(params?: {
        headers?: Record<string, any> | undefined;
        data?: Record<string, any> | undefined;
    } | undefined): Promise<Response>;
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
    get [Symbol.toStringTag](): string;
}
/**
 * @typedef {{
 *   secret: string,
 *   host?: string,
 *   protocol?: 'http:'|'https',
 *   endpoints?: Record<string,string>
 * }} ChatBotKitClientOptions
 */
export class ChatBotKitClient {
    /**
     * @param {ChatBotKitClientOptions} options
     */
    constructor(options: ChatBotKitClientOptions);
    secret: string;
    url: URL;
    endpoints: Record<string, string>;
    /**
     * @template T
     * @template U
     * @param {string} path
     * @param {{query?: Record<string,any>, data?: Record<string,any>, file?: { name?: string, type?: string, data: string|ArrayBuffer }}} [options]
     * @returns {ResponsePromise<T,U>}
     */
    clientFetch<T, U>(path: string, options?: {
        query?: Record<string, any> | undefined;
        data?: Record<string, any> | undefined;
        file?: {
            name?: string | undefined;
            type?: string | undefined;
            data: string | ArrayBuffer;
        } | undefined;
    } | undefined): ResponsePromise<T, U>;
}
export type ChatBotKitClientOptions = {
    secret: string;
    host?: string;
    protocol?: 'http:' | 'https';
    endpoints?: Record<string, string>;
};
