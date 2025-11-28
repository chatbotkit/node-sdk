/**
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitGlobalObject} ChatBotKitGlobalObject
 */
/**
 * @param {string} [selector]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
 */
export function useWidgetInstance(selector?: string, deps?: any[]): ChatBotKitWidgetElementV2 | null;
export default useWidgetInstance;
export type ChatBotKitWidgetElementV2 = import("@chatbotkit/widget/v2").ChatBotKitWidgetElementV2;
export type ChatBotKitGlobalObject = import("@chatbotkit/widget/v2").ChatBotKitGlobalObject;
