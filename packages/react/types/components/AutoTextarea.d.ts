/**
 * @typedef {(event: React.ChangeEvent<HTMLTextAreaElement>) => any} onInputFn
 *
 * @param {{
 *   onInput?: onInputFn?,
 *   [name: string]: any
 * }} [props]
 */
export function AutoTextarea(props?: {
    [name: string]: any;
    onInput?: onInputFn | null | undefined;
} | undefined): import("react/jsx-runtime").JSX.Element;
export default AutoTextarea;
export type onInputFn = (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
import React from 'react';
