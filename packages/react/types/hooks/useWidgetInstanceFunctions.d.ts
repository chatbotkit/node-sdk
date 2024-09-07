/**
 * @typedef {import('./useWidgetInstance.js').WidgetFunction} WidgetFunction
 *
 * @param {{
 *   functions?: Record<string, WidgetFunction>?
 * }} [params]
 */
export function useWidgetInstanceFunctions(params?: {
    functions?: Record<string, import("./useWidgetInstance.js").WidgetFunction> | null | undefined;
} | undefined): void;
export default useWidgetInstanceFunctions;
export type WidgetFunction = import('./useWidgetInstance.js').WidgetFunction;
