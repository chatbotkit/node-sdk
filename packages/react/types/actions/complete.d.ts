/**
 * A wrapper around the complete function that will return a generator that will
 * yield various events. Similarly to the complete function it will handle the
 * current message state as well as correctly handling function calls.
 *
 * @param {Options} options
 * @returns {import('../utils/stream.js').StreamResult}
 */
export function streamComplete(options: Options): import("../utils/stream.js").StreamResult;
export default complete;
export type ReactElement = import("react").ReactElement;
export type ReactNode = import("react").ReactNode;
export type Item = {
    type: string;
    data: object;
};
export type BasicParametersSchema = Record<string, any>;
export type ValidatingParametersSchema = {
    schema: BasicParametersSchema;
    validate(value: any): Promise<{
        valid: boolean;
        error?: Error;
    }>;
};
export type InputMessage = {
    type: "bot" | "user" | "reasoning" | "context" | "instruction" | "backstory" | "activity";
    text: string;
    meta?: Record<string, any>;
};
export type OutputMessage = {
    type: "bot" | "activity";
    text: string;
    meta?: Record<string, any>;
};
export type Message = InputMessage | OutputMessage;
export type RenderFunction = () => AsyncGenerator<ReactNode> | ReactNode | Promise<ReactNode>;
export type HandlerArgs = any;
export type HandlerOptions = {
    messages: InputMessage[];
    functions?: InputFunction[];
    controllers: {
        continuation: AbortController;
    };
    signals: {
        abort: AbortSignal;
    };
};
export type HandlerResult = string | ReactElement | {
    text?: string;
    children?: ReactNode;
    render?: RenderFunction;
    result?: any;
};
export type InputFunction = {
    name: string;
    description: string;
    parameters: BasicParametersSchema | ValidatingParametersSchema;
    handler?: (args: HandlerArgs, options: HandlerOptions) => Promise<HandlerResult>;
};
export type OnItemHandler = (arg0: Item) => any;
export type OnStartHandler = () => any;
export type OnFinishHandler = (arg0: {
    messages: Message[];
}) => any;
export type Options = Omit<import("@chatbotkit/sdk/conversation/v1.js").ConversationCompleteRequest, "messages" | "functions"> & {
    client: import("@chatbotkit/sdk").ConversationClient;
    messages: InputMessage[];
    functions?: (InputFunction | (() => InputFunction | Promise<InputFunction>))[];
    maxRecusion?: number;
    onItem?: OnItemHandler;
    onStart?: OnStartHandler;
    onFinish?: OnFinishHandler;
};
/**
 * @typedef {import('react').ReactElement} ReactElement
 * @typedef {import('react').ReactNode} ReactNode
 */
/**
 * @todo come up with a better type for item
 *
 * @typedef {{type: string, data: object}} Item
 */
/**
 * @typedef {Record<string,any>} BasicParametersSchema
 *
 * @typedef {{
 *   schema: BasicParametersSchema,
 *   validate(value: any): Promise<{valid: boolean, error?: Error}>
 * }} ValidatingParametersSchema
 */
/**
 * @typedef {{
 *   type: 'bot'|'user'|'reasoning'|'context'|'instruction'|'backstory'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} InputMessage
 *
 * @typedef {{
 *   type: 'bot'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} OutputMessage
 *
 * @typedef {InputMessage | OutputMessage} Message
 */
/**
 * @typedef {() => AsyncGenerator<ReactNode>|ReactNode|Promise<ReactNode>} RenderFunction
 */
/**
 * @typedef {any} HandlerArgs
 * @typedef {{
 *   messages: InputMessage[],
 *   functions?: InputFunction[],
 *   controllers: {
 *     continuation: AbortController
 *   },
 *   signals: {
 *     abort: AbortSignal
 *   }
 * }} HandlerOptions
 * @typedef {string|ReactElement|{text?: string, children?: ReactNode, render?: RenderFunction, result?: any}} HandlerResult
 */
/**
 * @typedef {{
 *   name: string,
 *   description: string,
 *   parameters: BasicParametersSchema|ValidatingParametersSchema,
 *   handler?: (args: HandlerArgs, options: HandlerOptions) => Promise<HandlerResult>
 * }} InputFunction
 */
/**
 * @typedef {function(Item): any} OnItemHandler
 * @typedef {function(): any} OnStartHandler
 * @typedef {function({ messages: Message[] }): any} OnFinishHandler
 */
/**
 * @typedef {Omit<import('@chatbotkit/sdk/conversation/v1.js').ConversationCompleteRequest,'messages'|'functions'> & {
 *   client: import('@chatbotkit/sdk').ConversationClient,
 *   messages: InputMessage[],
 *   functions?: (InputFunction|(() => InputFunction|Promise<InputFunction>))[],
 *   maxRecusion?: number,
 *   onItem?: OnItemHandler,
 *   onStart?: OnStartHandler,
 *   onFinish?: OnFinishHandler
 * }} Options
 */
/**
 * The complete function will take a list of messages and optional functions and
 * return a generator that will yield various events. The function also handles
 * the current message state as well as correctly handling function calls.
 *
 * @param {Options} options
 * @returns {any}
 */
declare function complete({ client, messages, functions, maxRecusion, ...options }: Options): any;
