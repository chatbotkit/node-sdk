/**
 * @typedef {{
 *   id: string,
 *   type: string,
 *   text: string
 * }} WidgetMessage
 *
 * @typedef {{
 *   text: string
 * }} WidgetNotification
 *
 * @typedef {{
 *   description: string,
 *   parameters: Record<string, any>,
 *   results: {
 *     data: any
 *   }
 * }} WidgetFunction
 *
 * @typedef {{
 *   messages?: WidgetMessage[]?,
 *   notifications?: Record<string, WidgetNotification>?,
 *   functions?: Record<string, WidgetFunction>?
 * }} ChatBotKitWidgetInstance
 *
 * @returns {ChatBotKitWidgetInstance|null}
 */
export function useWidgetInstance(): ChatBotKitWidgetInstance | null;
export default useWidgetInstance;
export type WidgetMessage = {
    id: string;
    type: string;
    text: string;
};
export type WidgetNotification = {
    text: string;
};
export type WidgetFunction = {
    description: string;
    parameters: Record<string, any>;
    results: {
        data: any;
    };
};
export type ChatBotKitWidgetInstance = {
    messages?: WidgetMessage[] | null;
    notifications?: Record<string, WidgetNotification> | null;
    functions?: Record<string, WidgetFunction> | null;
};
