/**
 * @typedef {import('zod').ZodObject<any>} ZodObject
 */
/**
 * @typedef {import('@chatbotkit/sdk').ChatBotKit} ChatBotKit
 * @typedef {import('@chatbotkit/sdk/conversation/v1').ConversationCompleteRequest} ConversationCompleteRequest
 * @typedef {import('@chatbotkit/sdk/conversation/v1').ConversationCompleteStreamType} ConversationCompleteStreamType
 */
/**
 * @template {ZodObject} T
 * @typedef {{
 *   description: string,
 *   input?: T,
 *   handler: (input: any) => Promise<any>
 * }} ToolDefinition
 */
/**
 * @typedef {Record<string, ToolDefinition<ZodObject>>} Tools
 */
/**
 * @typedef {{
 *   code: number,
 *   message?: string
 * }} ExitResult
 */
/**
 * @typedef {{
 *   type: 'toolCallStart',
 *   data: { name: string, args: any }
 * }} ToolCallStartEvent
 */
/**
 * @typedef {{
 *   type: 'toolCallEnd',
 *   data: { name: string, result: any }
 * }} ToolCallEndEvent
 */
/**
 * @typedef {{
 *   type: 'toolCallError',
 *   data: { name: string, error: string }
 * }} ToolCallErrorEvent
 */
/**
 * @typedef {{
 *   type: 'iteration',
 *   data: { iteration: number }
 * }} IterationEvent
 */
/**
 * @typedef {{
 *   type: 'exit',
 *   data: ExitResult
 * }} ExitEvent
 */
/**
 * Agent complete generator function.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>}
 */
export function complete(options: ConversationCompleteRequest & {
    client: ChatBotKit;
    tools?: Tools;
}): AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>;
/**
 * Execute an agent task in a loop until exit is called. Provides planning,
 * progress tracking, and controlled exit functionality.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   maxIterations?: number
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent | IterationEvent | ExitEvent, void, unknown>}
 */
export function execute(options: ConversationCompleteRequest & {
    client: ChatBotKit;
    tools?: Tools;
    maxIterations?: number;
}): AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent | IterationEvent | ExitEvent, void, unknown>;
export type ZodObject = import("zod").ZodObject<any>;
export type ChatBotKit = import("@chatbotkit/sdk").ChatBotKit;
export type ConversationCompleteRequest = import("@chatbotkit/sdk/conversation/v1").ConversationCompleteRequest;
export type ConversationCompleteStreamType = import("@chatbotkit/sdk/conversation/v1").ConversationCompleteStreamType;
export type ToolDefinition<T extends ZodObject> = {
    description: string;
    input?: T;
    handler: (input: any) => Promise<any>;
};
export type Tools = Record<string, ToolDefinition<ZodObject>>;
export type ExitResult = {
    code: number;
    message?: string;
};
export type ToolCallStartEvent = {
    type: "toolCallStart";
    data: {
        name: string;
        args: any;
    };
};
export type ToolCallEndEvent = {
    type: "toolCallEnd";
    data: {
        name: string;
        result: any;
    };
};
export type ToolCallErrorEvent = {
    type: "toolCallError";
    data: {
        name: string;
        error: string;
    };
};
export type IterationEvent = {
    type: "iteration";
    data: {
        iteration: number;
    };
};
export type ExitEvent = {
    type: "exit";
    data: ExitResult;
};
