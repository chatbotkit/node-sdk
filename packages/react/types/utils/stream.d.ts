/**
 * @typedef {{} & Handlers} StreamOptions
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
 * @internal
 * @param {ConsumeSource} source
 * @param {ConsumeOptions} [options]
 * @returns {ConsumeResult}
 */
export function consume(source: ConsumeSource, options?: Handlers | undefined): ConsumeResult;
export type Handlers = {
    onFinish?: () => any;
};
export type StreamSource = any;
export type StreamResult = any;
export type StreamOptions = {} & Handlers;
export type ConsumeSource = any;
export type ConsumeResult = any;
export type ConsumeOptions = {} & Handlers;
