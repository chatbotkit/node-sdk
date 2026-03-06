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
 * Completes a single agent iteration. Handles tool calls and streams events for
 * tool execution and completion.
 *
 * @param {Omit<ConversationCompleteRequest, 'functions' | 'limits'> & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   abortSignal?: AbortSignal,
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>}
 */
export function complete(options: Omit<ConversationCompleteRequest, "functions" | "limits"> & {
    client: ChatBotKit;
    tools?: Tools;
    abortSignal?: AbortSignal;
}): AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>;
/**
 * Execute an agent task in a loop until exit is called. Provides planning,
 * progress tracking, and controlled exit functionality.
 *
 * The agent runs until the model calls the built-in `exit` tool, the
 * `maxIterations` limit is reached, or an `abortSignal` is triggered.
 *
 * ### Message injection
 *
 * The `messages` array is used directly (not copied), so you can push new
 * messages onto it at any point while the agent is running. They will be
 * included in the context at the start of the next iteration:
 *
 * ```js
 * const messages = [{ type: 'user', text: 'Perform the task.' }]
 *
 * const stream = execute({ client, messages, tools })
 *
 * // inject a user message or system notification mid-run:
 * messages.push({ type: 'user', text: 'Also handle edge case Y.' })
 * messages.push({ type: 'context', text: 'System: disk usage at 90%.' })
 * ```
 *
 * The agent also appends its own `bot` responses to the same array as each
 * iteration completes, so `messages` reflects the full conversation history.
 *
 * @param {Omit<ConversationCompleteRequest, 'functions' | 'limits'> & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   maxIterations?: number,
 *   abortSignal?: AbortSignal,
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent | IterationEvent | ExitEvent, void, unknown>}
 */
export function execute(options: Omit<ConversationCompleteRequest, "functions" | "limits"> & {
    client: ChatBotKit;
    tools?: Tools;
    maxIterations?: number;
    abortSignal?: AbortSignal;
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
