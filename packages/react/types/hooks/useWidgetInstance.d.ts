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
 * @typedef {() => void} WidgteRestartConversationFn
 *
 * @typedef {(options: string|(({message: string} | {text: string}) & {hidden?: boolean, respond?: boolean})) => void} WidgetSendMessageFn
 *
 * @typedef {HTMLElement & {
 *   ready: boolean,
 *   readyPromise: Promise<boolean>,
 *   messages?: WidgetMessage[]?,
 *   notifications?: Record<string, WidgetNotification>?,
 *   functions?: Record<string, WidgetFunction>?,
 *   restartConversation: WidgteRestartConversationFn,
 *   sendMessage: WidgetSendMessageFn,
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
export type WidgteRestartConversationFn = () => void;
export type WidgetSendMessageFn = (options: string | (({
    message: string;
} | {
    text: string;
}) & {
    hidden?: boolean;
    respond?: boolean;
})) => void;
export type ChatBotKitWidgetInstance = HTMLElement & {
    ready: boolean;
    readyPromise: Promise<boolean>;
    messages?: WidgetMessage[] | null;
    notifications?: Record<string, WidgetNotification> | null;
    functions?: Record<string, WidgetFunction> | null;
    restartConversation: WidgteRestartConversationFn;
    sendMessage: WidgetSendMessageFn;
};
