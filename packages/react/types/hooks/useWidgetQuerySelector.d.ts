/**
 * @typedef {import('./useWidgetInstance.js').ChatBotKitWidgetInstance} ChatBotKitWidgetInstance
 */
/**
 * @param {string} selector
 * @param {{
 *   waitForReady?: boolean
 * }} [options]
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetQuerySelector(selector: string, options?: {
    waitForReady?: boolean | undefined;
} | undefined): ChatBotKitWidgetInstance | null;
export default useWidgetQuerySelector;
export type ChatBotKitWidgetInstance = import('./useWidgetInstance.js').ChatBotKitWidgetInstance;
