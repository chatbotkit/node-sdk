/**
 * @param {string|null|undefined} selector
 * @param {{ waitForElements?: boolean, disconnectOnFirstMatch?: boolean, parent?: ParentNode }} [options]
 * @param {any[]} [deps]
 * @returns {Element[]}
 */
export default function useDOMQuerySelector(selector: string | null | undefined, options?: {
    waitForElements?: boolean;
    disconnectOnFirstMatch?: boolean;
    parent?: ParentNode;
}, deps?: any[]): Element[];
