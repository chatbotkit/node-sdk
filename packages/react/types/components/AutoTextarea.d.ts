/**
 * A textarea that automatically adjusts its height based on its content.
 *
 * @param {{
 *   [name: string]: any
 * }} [props]
 * @param {React.Ref<HTMLTextAreaElement>} [forwardedRef]
 */
export function AutoTextarea(props?: {
    [name: string]: any;
} | undefined, forwardedRef?: React.Ref<HTMLTextAreaElement> | undefined): import("react/jsx-runtime").JSX.Element;
declare const _default: React.ForwardRefExoticComponent<Omit<{
    [name: string]: any;
}, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
import React from 'react';
