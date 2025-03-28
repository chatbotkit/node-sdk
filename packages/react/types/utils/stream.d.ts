/**
 * @typedef {{} & Handlers} StreamOptions
 *
 * This function is used on the server to stream data to the client.
 *
 * @internal
 * @param {StreamSource} source
 * @param {StreamOptions} [options]
 * @returns {StreamResult}
 */
export function stream(source: StreamSource, options?: Handlers | undefined): StreamResult;
/**
 * @typedef {{} & Handlers} ConsumeOptions
 *
 * This function is used on the client to consume a server stream.
 *
 * @internal
 * @param {ConsumeSource} source
 * @param {ConsumeOptions} [options]
 * @returns {ConsumeResult}
 */
export function consume(source: ConsumeSource, options?: Handlers | undefined): ConsumeResult;
export class StreamError extends Error {
    /**
     * @param {string} message
     * @param {string} code
     */
    constructor(message: string, code: string);
    /**
     * @type {string}
     * @public
     */
    public code: string;
}
export type Handlers = {
    onFinish?: () => any;
};
export type StreamSource = any;
/**
 * This function is used on the server to stream data to the client.
 */
export type StreamResult = any;
/**
 * This function is used on the server to stream data to the client.
 */
export type StreamOptions = {} & Handlers;
export type ConsumeSource = any;
/**
 * This function is used on the client to consume a server stream.
 */
export type ConsumeResult = any;
/**
 * This function is used on the client to consume a server stream.
 */
export type ConsumeOptions = {} & Handlers;
