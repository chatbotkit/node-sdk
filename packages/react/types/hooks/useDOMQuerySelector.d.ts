/**
 * @template T
 * @param {string} selector
 * @param {{
 *   waitForElements?: boolean
 * }} [options]
 * @returns {T[]}
 */
export function useDOMQuerySelector<T>(selector: string, options?: {
    waitForElements?: boolean | undefined;
} | undefined): T[];
export default useDOMQuerySelector;
