/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {'user'|'bot'|'reasoning'|'context'|'instruction'|'backstory'|'activity'} ConversationMessageType
 *
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationMessageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/json']} ConversationMessageListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listConversationMessages']['responses']['200']['content']['application/jsonl']} ConversationMessageListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageListRequest} [request]
 * @returns {ResponsePromise<ConversationMessageListResponse,ConversationMessageListStreamType>}
 */
export function listConversationMessages(client: ChatBotKitClient, conversationId: string, request?: ConversationMessageListRequest): ResponsePromise<ConversationMessageListResponse, ConversationMessageListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {ResponsePromise<ConversationMessageFetchResponse,never>}
 */
export function fetchConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string): ResponsePromise<ConversationMessageFetchResponse, never>;
/**
 * @typedef {{
 *   type: ConversationMessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} ConversationMessageCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['requestBody']['content']['application/json']} ConversationMessageCreateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageCreateRequest} request
 * @returns {Promise<ConversationMessageCreateResponse>}
 */
export function createConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationMessageCreateRequest): Promise<ConversationMessageCreateResponse>;
/**
 * @typedef {{
 *   type?: ConversationMessageType,
 *   text?: string,
 *   meta?: Record<string,any>
 * }} ConversationMessageUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpdateRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpdateRequest} request
 * @returns {Promise<ConversationMessageUpdateResponse>}
 */
export function updateConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageUpdateRequest): Promise<ConversationMessageUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageDeleteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {Promise<ConversationMessageDeleteResponse>}
 */
export function deleteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string): Promise<ConversationMessageDeleteResponse>;
/**
 * @typedef {{
 *   value?: number
 * }} ConversationMessageUpvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpvoteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpvoteRequest} request
 * @returns {Promise<ConversationMessageUpvoteResponse>}
 */
export function upvoteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageUpvoteRequest): Promise<ConversationMessageUpvoteResponse>;
/**
 * @typedef {{
 *   value?: number
 * }} ConversationMessageDownvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageDownvoteRequestBody
 *
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageDownvoteRequest} request
 * @returns {Promise<ConversationMessageDownvoteResponse>}
 */
export function downvoteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageDownvoteRequest): Promise<ConversationMessageDownvoteResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ConversationMessageType = "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity";
export type ConversationMessageListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationMessageListResponse = import("../../types/api/v1.js").operations["listConversationMessages"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageListStreamType = import("../../types/api/v1.js").operations["listConversationMessages"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationMessageFetchResponse = import("../../types/api/v1.js").operations["fetchConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageCreateRequest = {
    type: ConversationMessageType;
    text: string;
    meta?: Record<string, any>;
};
export type ConversationMessageCreateRequestBody = import("../../types/api/v1.js").operations["createConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageCreateResponse = import("../../types/api/v1.js").operations["createConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageUpdateRequest = {
    type?: ConversationMessageType;
    text?: string;
    meta?: Record<string, any>;
};
export type ConversationMessageUpdateRequestBody = import("../../types/api/v1.js").operations["updateConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageUpdateResponse = import("../../types/api/v1.js").operations["updateConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageDeleteRequestBody = import("../../types/api/v1.js").operations["deleteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageDeleteResponse = import("../../types/api/v1.js").operations["deleteConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageUpvoteRequest = {
    value?: number;
};
export type ConversationMessageUpvoteRequestBody = import("../../types/api/v1.js").operations["upvoteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageUpvoteResponse = import("../../types/api/v1.js").operations["upvoteConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageDownvoteRequest = {
    value?: number;
};
export type ConversationMessageDownvoteRequestBody = import("../../types/api/v1.js").operations["downvoteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageDownvoteResponse = import("../../types/api/v1.js").operations["downvoteConversationMessage"]["responses"]["200"]["content"]["application/json"];
