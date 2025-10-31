/**
 * A textarea that automatically adjusts its height based on its content. The
 * height is adjusted on input and focus events.
 *
 * @param {{
 *   [name: string]: any
 * }} [props]
 * @param {React.Ref<HTMLTextAreaElement>} [forwardedRef]
 * @todo remove this component once field-sizing is supported in all browsers
 */
export function AutoTextarea(props?: {
    [name: string]: any;
}, forwardedRef?: React.Ref<HTMLTextAreaElement>): import("react/jsx-runtime").JSX.Element;
declare const _default: React.ForwardRefExoticComponent<Omit<{
    [name: string]: any;
}, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
import React from 'react';
