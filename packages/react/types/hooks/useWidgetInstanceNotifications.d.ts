/**
 * @typedef {import('./useWidgetInstance.js').WidgetNotification} WidgetNotification
 *
 * @param {{
 *   selector?: string,
 *   notifications?: Record<string, WidgetNotification>?
 * }} [params]
 * @param {any[]} [deps]
 * @returns {import('./useWidgetInstance.js').ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstanceNotifications(params?: {
    selector?: string;
    notifications?: Record<string, WidgetNotification> | null;
}, deps?: any[]): import("./useWidgetInstance.js").ChatBotKitWidgetInstance | null;
export default useWidgetInstanceNotifications;
export type WidgetNotification = import("./useWidgetInstance.js").WidgetNotification;
