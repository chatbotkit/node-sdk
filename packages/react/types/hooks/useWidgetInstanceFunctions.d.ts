/**
 * @typedef {import('./useWidgetInstance.js').WidgetFunction} WidgetFunction
 *
 * @param {{
 *   selector?: string,
 *   functions?: Record<string, WidgetFunction>?
 * }} [params]
 * @param {any[]} [deps]
 * @returns {import('./useWidgetInstance.js').ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstanceFunctions(params?: {
    selector?: string;
    functions?: Record<string, WidgetFunction> | null;
}, deps?: any[]): import("./useWidgetInstance.js").ChatBotKitWidgetInstance | null;
export default useWidgetInstanceFunctions;
export type WidgetFunction = import("./useWidgetInstance.js").WidgetFunction;
