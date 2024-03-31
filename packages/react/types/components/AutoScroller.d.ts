/**
 * @param {{
 *   anchor?: 'top'|'bottom',
 *   childList?: boolean,
 *   subtree?: boolean,
 *   block?: 'start'|'end',
 *   delay?: number,
 *   [name: string]: any
 * }} [props]
 */
export function AutoScroller(props?: {
    [name: string]: any;
    anchor?: "bottom" | "top" | undefined;
    childList?: boolean | undefined;
    subtree?: boolean | undefined;
    block?: "end" | "start" | undefined;
    delay?: number | undefined;
} | undefined): import("react/jsx-runtime").JSX.Element;
export default AutoScroller;
