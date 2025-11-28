/**
 * @typedef {import('@chatbotkit/widget/v2').FunctionDefinition} FunctionDefinition
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 *
 * @param {{
 *   selector?: string,
 *   functions?: Record<string,FunctionDefinition|null> | null
 * }} [params]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
 */
export function useWidgetInstanceFunctions(params?: {
    selector?: string;
    functions?: Record<string, FunctionDefinition | null> | null;
}, deps?: any[]): ChatBotKitWidgetElementV2 | null;
export default useWidgetInstanceFunctions;
export type FunctionDefinition = import("@chatbotkit/widget/v2").FunctionDefinition;
export type ChatBotKitWidgetElementV2 = import("@chatbotkit/widget/v2").ChatBotKitWidgetElementV2;
