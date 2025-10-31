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
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['requestBody']['content']['application/json']} ConversationMessageCreateRequestBody
 *
 * @typedef {ConversationMessageCreateRequestBody} ConversationMessageCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageCreateResponseBody
 *
 * @typedef {ConversationMessageCreateResponseBody} ConversationMessageCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageCreateRequest} request
 * @returns {Promise<ConversationMessageCreateResponse>}
 */
export function createConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationMessageCreateRequest): Promise<ConversationMessageCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpdateRequestBody
 *
 * @typedef {ConversationMessageUpdateRequestBody} ConversationMessageUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpdateResponseBody
 *
 * @typedef {ConversationMessageUpdateResponseBody} ConversationMessageUpdateResponse
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
 * @typedef {ConversationMessageDeleteRequestBody} ConversationMessageDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDeleteResponseBody
 *
 * @typedef {ConversationMessageDeleteResponseBody} ConversationMessageDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {Promise<ConversationMessageDeleteResponse>}
 */
export function deleteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string): Promise<ConversationMessageDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageUpvoteRequestBody
 *
 * @typedef {ConversationMessageUpvoteRequestBody} ConversationMessageUpvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['upvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageUpvoteResponseBody
 *
 * @typedef {ConversationMessageUpvoteResponseBody} ConversationMessageUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpvoteRequest} request
 * @returns {Promise<ConversationMessageUpvoteResponse>}
 */
export function upvoteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageUpvoteRequest): Promise<ConversationMessageUpvoteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['requestBody']['content']['application/json']} ConversationMessageDownvoteRequestBody
 *
 * @typedef {ConversationMessageDownvoteRequestBody} ConversationMessageDownvoteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['downvoteConversationMessage']['responses']['200']['content']['application/json']} ConversationMessageDownvoteResponseBody
 *
 * @typedef {ConversationMessageDownvoteResponseBody} ConversationMessageDownvoteResponse
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
export type ConversationMessageCreateRequestBody = import("../../types/api/v1.js").operations["createConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageCreateRequest = ConversationMessageCreateRequestBody;
export type ConversationMessageCreateResponseBody = import("../../types/api/v1.js").operations["createConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageCreateResponse = ConversationMessageCreateResponseBody;
export type ConversationMessageUpdateRequestBody = import("../../types/api/v1.js").operations["updateConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageUpdateRequest = ConversationMessageUpdateRequestBody;
export type ConversationMessageUpdateResponseBody = import("../../types/api/v1.js").operations["updateConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageUpdateResponse = ConversationMessageUpdateResponseBody;
export type ConversationMessageDeleteRequestBody = import("../../types/api/v1.js").operations["deleteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageDeleteRequest = ConversationMessageDeleteRequestBody;
export type ConversationMessageDeleteResponseBody = import("../../types/api/v1.js").operations["deleteConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageDeleteResponse = ConversationMessageDeleteResponseBody;
export type ConversationMessageUpvoteRequestBody = import("../../types/api/v1.js").operations["upvoteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageUpvoteRequest = ConversationMessageUpvoteRequestBody;
export type ConversationMessageUpvoteResponseBody = import("../../types/api/v1.js").operations["upvoteConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageUpvoteResponse = ConversationMessageUpvoteResponseBody;
export type ConversationMessageDownvoteRequestBody = import("../../types/api/v1.js").operations["downvoteConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationMessageDownvoteRequest = ConversationMessageDownvoteRequestBody;
export type ConversationMessageDownvoteResponseBody = import("../../types/api/v1.js").operations["downvoteConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationMessageDownvoteResponse = ConversationMessageDownvoteResponseBody;
