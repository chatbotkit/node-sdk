/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} StreamSource
 * @typedef {any} StreamResult
 *
 * @param {StreamSource} source
 * @returns {StreamResult}
 */
export function stream(source: StreamSource): StreamResult;
/**
 * @todo come up with a better type for source and result
 *
 * @typedef {any} ConsumeSource
 * @typedef {any} ConsumeResult
 *
 * @param {ConsumeSource} source
 * @returns {ConsumeResult}
 */
export function consume(source: ConsumeSource): ConsumeResult;
export type StreamSource = any;
export type StreamResult = any;
export type ConsumeSource = any;
export type ConsumeResult = any;
