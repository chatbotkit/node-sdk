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
    anchor?: "top" | "bottom";
    childList?: boolean;
    subtree?: boolean;
    block?: "start" | "end";
    delay?: number;
    [name: string]: any;
}): import("react/jsx-runtime").JSX.Element;
export default AutoScroller;
