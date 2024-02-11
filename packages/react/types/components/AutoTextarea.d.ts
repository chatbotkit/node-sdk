/**
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onInputFn
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onFocusFn
 *
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 *
 * @param {{
 *   onInput?: onInputFn?,
 *   onFocus?: onFocusFn?,
 *   adjustOnInput?: boolean?,
 *   adjustOnFocus?: boolean?,
 *   [name: string]: any
 * }} [props]
 */
export function AutoTextarea(props?: {
    [name: string]: any;
    onInput?: onInputFn | null | undefined;
    onFocus?: onFocusFn | null | undefined;
    adjustOnInput?: boolean | null | undefined;
    adjustOnFocus?: boolean | null | undefined;
} | undefined): import("react/jsx-runtime").JSX.Element;
export default AutoTextarea;
export type onInputFn = (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
/**
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 */
export type onFocusFn = (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
import React from 'react';
