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
 * Agent complete generator function.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType, void, unknown>}
 */
export function complete(options: ConversationCompleteRequest & {
    client: ChatBotKit;
    tools?: Tools;
}): AsyncGenerator<ConversationCompleteStreamType, void, unknown>;
/**
 * Execute an agent task in a loop until exit is called. Provides planning,
 * progress tracking, and controlled exit functionality.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   maxIterations?: number
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | {type: 'iteration', data: {iteration: number}} | {type: 'exit', data: ExitResult}, void, unknown>}
 */
export function execute(options: ConversationCompleteRequest & {
    client: ChatBotKit;
    tools?: Tools;
    maxIterations?: number;
}): AsyncGenerator<ConversationCompleteStreamType | {
    type: "iteration";
    data: {
        iteration: number;
    };
} | {
    type: "exit";
    data: ExitResult;
}, void, unknown>;
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
