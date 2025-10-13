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
 * }} WidgetFunctionBase
 *
 * @typedef {WidgetFunctionBase & {
 *   result: {
 *     data: any
 *   }
 * }} WidgetFunctionWithResult
 *
 * @typedef {WidgetFunctionBase & {
 *  handler: (args: any) => any
 * }} WidgetFunctionWithHandler
 *
 * @typedef {WidgetFunctionWithResult|WidgetFunctionWithHandler} WidgetFunction
 *
 * @typedef {() => void} WidgetRestartConversationFn
 *
 * @typedef {(options: string|(({message: string} | {text: string}) & {hidden?: boolean, respond?: boolean})) => void} WidgetSendMessageFn
 *
 * @typedef {HTMLElement & {
 *   ready: boolean,
 *   readyPromise: Promise<boolean>,
 *   messages?: WidgetMessage[]?,
 *   notifications?: Record<string, WidgetNotification>?,
 *   functions?: Record<string, WidgetFunction>?,
 *   restartConversation: WidgetRestartConversationFn,
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
export type WidgetFunctionBase = {
    description: string;
    parameters: Record<string, any>;
};
export type WidgetFunctionWithResult = WidgetFunctionBase & {
    result: {
        data: any;
    };
};
export type WidgetFunctionWithHandler = WidgetFunctionBase & {
    handler: (args: any) => any;
};
export type WidgetFunction = WidgetFunctionWithResult | WidgetFunctionWithHandler;
export type WidgetRestartConversationFn = () => void;
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
    restartConversation: WidgetRestartConversationFn;
    sendMessage: WidgetSendMessageFn;
};
