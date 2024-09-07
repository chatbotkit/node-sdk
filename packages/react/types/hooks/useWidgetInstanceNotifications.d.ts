/**
 * @typedef {import('./useWidgetInstance.js').WidgetNotification} WidgetNotification
 *
 * @param {{
 *   notifications?: Record<string, WidgetNotification>?
 * }} [params]
 */
export function useWidgetInstanceNotifications(params?: {
    notifications?: Record<string, import("./useWidgetInstance.js").WidgetNotification> | null | undefined;
} | undefined): void;
export default useWidgetInstanceNotifications;
export type WidgetNotification = import('./useWidgetInstance.js').WidgetNotification;
