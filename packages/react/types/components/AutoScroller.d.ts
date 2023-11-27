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
    anchor?: "top" | "bottom" | undefined;
    childList?: boolean | undefined;
    subtree?: boolean | undefined;
    block?: "start" | "end" | undefined;
    delay?: number | undefined;
} | undefined): import("react/jsx-runtime").JSX.Element;
export default AutoScroller;
