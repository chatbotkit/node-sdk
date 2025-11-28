/**
 * @typedef {import('@chatbotkit/widget/v2').NotificationDefinition} NotificationDefinition
 * @typedef {import('@chatbotkit/widget/v2').ChatBotKitWidgetElementV2} ChatBotKitWidgetElementV2
 *
 * @param {{
 *   selector?: string,
 *   notifications?: Record<string,NotificationDefinition|null> | null
 * }} [params]
 * @param {any[]} [deps]
 * @returns {ChatBotKitWidgetElementV2|null}
 */
export function useWidgetInstanceNotifications(params?: {
    selector?: string;
    notifications?: Record<string, NotificationDefinition | null> | null;
}, deps?: any[]): ChatBotKitWidgetElementV2 | null;
export default useWidgetInstanceNotifications;
export type NotificationDefinition = import("@chatbotkit/widget/v2").NotificationDefinition;
export type ChatBotKitWidgetElementV2 = import("@chatbotkit/widget/v2").ChatBotKitWidgetElementV2;
