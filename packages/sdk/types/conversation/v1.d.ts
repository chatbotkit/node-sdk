/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {'user'|'bot'|'reasoning'|'context'|'instruction'|'backstory'|'activity'} MessageType
 *
 * @typedef {{
 *   type: MessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} Message
 *
 * @typedef {{
 *   type: string,
 *   begin: number,
 *   end: number,
 *   text: string,
 *   replacement?: {
 *     begin: number,
 *     end: number,
 *     text: string
 *   }
 * }} Entity
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ConversationListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/json']} ConversationListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listConversations']['responses']['200']['content']['application/jsonl']} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client: ChatBotKitClient, request?: ConversationListRequest): ResponsePromise<ConversationListResponse, ConversationListStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['fetchConversation']['responses']['200']['content']['application/json']} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {ResponsePromise<ConversationFetchResponse,never>}
 */
export function fetchConversation(client: ChatBotKitClient, conversationId: string): ResponsePromise<ConversationFetchResponse, never>;
/**
 * @typedef {Omit<import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json'],'model'> & {
 *   model?: string|import('../model/v1.js').Model,
 * }} ConversationCreateRequestBody
 *
 * @typedef {ConversationCreateRequestBody} ConversationCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} ConversationCreateResponseBody
 *
 * @typedef {ConversationCreateResponseBody} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export function createConversation(client: ChatBotKitClient, request: ConversationCreateRequest): Promise<ConversationCreateResponse>;
/**
 * @typedef {Omit<import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json'],'model'> & {
 *   model?: string|import('../model/v1.js').Model,
 * }} ConversationUpdateRequestBody
 *
 * @typedef {ConversationUpdateRequestBody} ConversationUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} ConversationUpdateResponseBody
 *
 * @typedef {ConversationUpdateResponseBody} ConversationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpdateRequest} request
 * @returns {Promise<ConversationUpdateResponse>}
 */
export function updateConversation(client: ChatBotKitClient, conversationId: string, request: ConversationUpdateRequest): Promise<ConversationUpdateResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['requestBody']['content']['application/json']} ConversationDeleteRequestBody
 *
 * @typedef {ConversationDeleteRequestBody} ConversationDeleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} ConversationDeleteResponseBody
 *
 * @typedef {ConversationDeleteResponseBody} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export function deleteConversation(client: ChatBotKitClient, conversationId: string): Promise<ConversationDeleteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['requestBody']['content']['application/json']} ConversationCompleteRequestBody
 *
 * @typedef {ConversationCompleteRequestBody extends infer U
 *   ? U extends any
 *     ? U extends {model?: any}
 *       ? Omit<U, 'model'> & {model?: string|import('../model/v1.js').Model}
 *       : U
 *     : never
 *   : never
 * } ConversationCompleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/json']} ConversationCompleteResponseBody
 *
 * @typedef {ConversationCompleteResponseBody} ConversationCompleteResponse
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/jsonl']} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function completeConversation(client: ChatBotKitClient, request: ConversationCompleteRequest): ResponsePromise<ConversationCompleteResponse, ConversationCompleteStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['requestBody']['content']['application/json']} ConversationCompleteMessageRequestBody
 *
 * @typedef {ConversationCompleteMessageRequestBody} ConversationCompleteMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/json']} ConversationCompleteMessageResponseBody
 *
 * @typedef {ConversationCompleteMessageResponseBody} ConversationCompleteMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationCompleteMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationCompleteMessageRequest} request
 * @returns {ResponsePromise<ConversationCompleteMessageResponse,ConversationCompleteMessageStreamType>}
 */
export function completeConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationCompleteMessageRequest): ResponsePromise<ConversationCompleteMessageResponse, ConversationCompleteMessageStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['dispatchConversation']['requestBody']['content']['application/json']} ConversationDispatchRequestBody
 *
 * @typedef {ConversationDispatchRequestBody extends infer U
 *   ? U extends any
 *     ? U extends {model?: any}
 *       ? Omit<U, 'model'> & {model?: string|import('../model/v1.js').Model}
 *       : U
 *     : never
 *   : never
 * } ConversationDispatchRequest
 *
 * @typedef {import('../types/api/v1.js').operations['dispatchConversation']['responses']['200']['content']['application/json']} ConversationDispatchResponseBody
 *
 * @typedef {ConversationDispatchResponseBody} ConversationDispatchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationDispatchRequest} request
 * @returns {Promise<ConversationDispatchResponse>}
 */
export function dispatchConversation(client: ChatBotKitClient, request: ConversationDispatchRequest): Promise<ConversationDispatchResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['dispatchStatefulConversation']['requestBody']['content']['application/json']} ConversationDispatchMessageRequestBody
 *
 * @typedef {ConversationDispatchMessageRequestBody} ConversationDispatchMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['dispatchStatefulConversation']['responses']['200']['content']['application/json']} ConversationDispatchMessageResponseBody
 *
 * @typedef {ConversationDispatchMessageResponseBody} ConversationDispatchMessageResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDispatchMessageRequest} request
 * @returns {Promise<ConversationDispatchMessageResponse>}
 */
export function dispatchConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationDispatchMessageRequest): Promise<ConversationDispatchMessageResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['requestBody']['content']['application/json']} ConversationSendMessageRequestBody
 *
 * @typedef {ConversationSendMessageRequestBody} ConversationSendMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/json']} ConversationSendMessageResponseBody
 *
 * @typedef {ConversationSendMessageResponseBody} ConversationSendMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationSendMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendMessageRequest} request
 * @returns {ResponsePromise<ConversationSendMessageResponse,ConversationSendMessageStreamType>}
 */
export function sendConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationSendMessageRequest): ResponsePromise<ConversationSendMessageResponse, ConversationSendMessageStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['requestBody']['content']['application/json']} ConversationReceiveMessageRequestBody
 *
 * @typedef {ConversationReceiveMessageRequestBody} ConversationReceiveMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/json']} ConversationReceiveMessageResponseBody
 *
 * @typedef {ConversationReceiveMessageResponseBody} ConversationReceiveMessageResponse
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/jsonl']} ConversationReceiveMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveMessageRequest} request
 * @returns {ResponsePromise<ConversationReceiveMessageResponse,ConversationReceiveMessageStreamType>}
 */
export function receiveConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationReceiveMessageRequest): ResponsePromise<ConversationReceiveMessageResponse, ConversationReceiveMessageStreamType>;
/**
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['requestBody']['content']['application/json']} ConversationUpvoteRequestBody
 *
 * @typedef {ConversationUpvoteRequestBody} ConversationUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['responses']['200']['content']['application/json']} ConversationUpvoteResponseBody
 *
 * @typedef {ConversationUpvoteResponseBody} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export function upvoteConversation(client: ChatBotKitClient, conversationId: string, request: ConversationUpvoteRequest): Promise<ConversationUpvoteResponse>;
/**
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['requestBody']['content']['application/json']} ConversationDownvoteRequestBody
 *
 * @typedef {ConversationDownvoteRequestBody} ConversationDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['responses']['200']['content']['application/json']} ConversationDownvoteResponseBody
 *
 * @typedef {ConversationDownvoteResponseBody} ConversationDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDownvoteRequest} request
 * @returns {Promise<ConversationDownvoteResponse>}
 */
export function downvoteConversation(client: ChatBotKitClient, conversationId: string, request: ConversationDownvoteRequest): Promise<ConversationDownvoteResponse>;
export type ChatBotKitClient = import("../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
export type MessageType = "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity";
export type Message = {
    type: MessageType;
    text: string;
    meta?: Record<string, any>;
};
export type Entity = {
    type: string;
    begin: number;
    end: number;
    text: string;
    replacement?: {
        begin: number;
        end: number;
        text: string;
    };
};
export type ConversationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationListResponse = import("../types/api/v1.js").operations["listConversations"]["responses"]["200"]["content"]["application/json"];
export type ConversationListStreamType = import("../types/api/v1.js").operations["listConversations"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationFetchResponse = import("../types/api/v1.js").operations["fetchConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationCreateRequestBody = Omit<import("../types/api/v1.js").operations["createConversation"]["requestBody"]["content"]["application/json"], "model"> & {
    model?: string | import("../model/v1.js").Model;
};
export type ConversationCreateRequest = ConversationCreateRequestBody;
export type ConversationCreateResponseBody = import("../types/api/v1.js").operations["createConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationCreateResponse = ConversationCreateResponseBody;
export type ConversationUpdateRequestBody = Omit<import("../types/api/v1.js").operations["updateConversation"]["requestBody"]["content"]["application/json"], "model"> & {
    model?: string | import("../model/v1.js").Model;
};
export type ConversationUpdateRequest = ConversationUpdateRequestBody;
export type ConversationUpdateResponseBody = import("../types/api/v1.js").operations["updateConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationUpdateResponse = ConversationUpdateResponseBody;
export type ConversationDeleteRequestBody = import("../types/api/v1.js").operations["deleteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDeleteRequest = ConversationDeleteRequestBody;
export type ConversationDeleteResponseBody = import("../types/api/v1.js").operations["deleteConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDeleteResponse = ConversationDeleteResponseBody;
export type ConversationCompleteRequestBody = import("../types/api/v1.js").operations["completeConversation"]["requestBody"]["content"]["application/json"];
export type ConversationCompleteRequest = ConversationCompleteRequestBody extends infer U ? U extends any ? U extends {
    model?: any;
} ? Omit<U, "model"> & {
    model?: string | import("../model/v1.js").Model;
} : U : never : never;
export type ConversationCompleteResponseBody = import("../types/api/v1.js").operations["completeConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationCompleteResponse = ConversationCompleteResponseBody;
export type ConversationCompleteStreamType = import("../types/api/v1.js").operations["completeConversation"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationCompleteMessageRequestBody = import("../types/api/v1.js").operations["completeConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationCompleteMessageRequest = ConversationCompleteMessageRequestBody;
export type ConversationCompleteMessageResponseBody = import("../types/api/v1.js").operations["completeConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationCompleteMessageResponse = ConversationCompleteMessageResponseBody;
export type ConversationCompleteMessageStreamType = import("../types/api/v1.js").operations["completeConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationDispatchRequestBody = import("../types/api/v1.js").operations["dispatchConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDispatchRequest = ConversationDispatchRequestBody extends infer U ? U extends any ? U extends {
    model?: any;
} ? Omit<U, "model"> & {
    model?: string | import("../model/v1.js").Model;
} : U : never : never;
export type ConversationDispatchResponseBody = import("../types/api/v1.js").operations["dispatchConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDispatchResponse = ConversationDispatchResponseBody;
export type ConversationDispatchMessageRequestBody = import("../types/api/v1.js").operations["dispatchStatefulConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDispatchMessageRequest = ConversationDispatchMessageRequestBody;
export type ConversationDispatchMessageResponseBody = import("../types/api/v1.js").operations["dispatchStatefulConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDispatchMessageResponse = ConversationDispatchMessageResponseBody;
export type ConversationSendMessageRequestBody = import("../types/api/v1.js").operations["sendConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationSendMessageRequest = ConversationSendMessageRequestBody;
export type ConversationSendMessageResponseBody = import("../types/api/v1.js").operations["sendConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationSendMessageResponse = ConversationSendMessageResponseBody;
export type ConversationSendMessageStreamType = import("../types/api/v1.js").operations["sendConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationReceiveMessageRequestBody = import("../types/api/v1.js").operations["receiveConversationMessage"]["requestBody"]["content"]["application/json"];
export type ConversationReceiveMessageRequest = ConversationReceiveMessageRequestBody;
export type ConversationReceiveMessageResponseBody = import("../types/api/v1.js").operations["receiveConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationReceiveMessageResponse = ConversationReceiveMessageResponseBody;
export type ConversationReceiveMessageStreamType = import("../types/api/v1.js").operations["receiveConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationUpvoteRequestBody = import("../types/api/v1.js").operations["upvoteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationUpvoteRequest = ConversationUpvoteRequestBody;
export type ConversationUpvoteResponseBody = import("../types/api/v1.js").operations["upvoteConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationUpvoteResponse = ConversationUpvoteResponseBody;
export type ConversationDownvoteRequestBody = import("../types/api/v1.js").operations["downvoteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDownvoteRequest = ConversationDownvoteRequestBody;
export type ConversationDownvoteResponseBody = import("../types/api/v1.js").operations["downvoteConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDownvoteResponse = ConversationDownvoteResponseBody;
