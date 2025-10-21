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
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string|import('../model/v1.js').Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['requestBody']['content']['application/json']} ConversationCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createConversation']['responses']['200']['content']['application/json']} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export function createConversation(client: ChatBotKitClient, request: ConversationCreateRequest): Promise<ConversationCreateResponse>;
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string|import('../model/v1.js').Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationUpdateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['requestBody']['content']['application/json']} ConversationUpdateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['updateConversation']['responses']['200']['content']['application/json']} ConversationUpdateResponse
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
 * @typedef {import('../types/api/v1.js').operations['deleteConversation']['responses']['200']['content']['application/json']} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export function deleteConversation(client: ChatBotKitClient, conversationId: string): Promise<ConversationDeleteResponse>;
/**
 * @typedef {{
 *   botId?: string,
 *   backstory?: string,
 *   model?: import('../model/v1.js').Model,
 *   messages?: Message[],
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   functions?: {name: string, description: string, parameters: any}[]
 * } & ({text: string}|{messages: Message[]})} ConversationCompleteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/json']} ConversationCompleteResponse
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversation']['responses']['200']['content']['application/jsonl']} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function completeConversation(client: ChatBotKitClient, request: ConversationCompleteRequest): ResponsePromise<ConversationCompleteResponse, ConversationCompleteStreamType>;
/**
 * @typedef {{
 *   text: string,
 *   entities?: Entity[]
 * }} ConversationCompleteMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['completeConversationMessage']['responses']['200']['content']['application/json']} ConversationCompleteMessageResponse
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
 * @typedef {{
 *   text?: string,
 *   entities?: Entity[],
 * }} ConversationSendMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['sendConversationMessage']['responses']['200']['content']['application/json']} ConversationSendMessageResponse
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
 * @typedef {{
 * }} ConversationReceiveMessageRequest
 *
 * @typedef {import('../types/api/v1.js').operations['receiveConversationMessage']['responses']['200']['content']['application/json']} ConversationReceiveMessageResponse
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
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} ConversationUpvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['requestBody']['content']['application/json']} ConversationUpvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['upvoteConversation']['responses']['200']['content']['application/json']} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export function upvoteConversation(client: ChatBotKitClient, conversationId: string, request: ConversationUpvoteRequest): Promise<ConversationUpvoteResponse>;
/**
 * @typedef {{
 *   value?: number,
 *   reason?: string
 * }} ConversationDownvoteRequest
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['requestBody']['content']['application/json']} ConversationDownvoteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['downvoteConversation']['responses']['200']['content']['application/json']} ConversationDownvoteResponse
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
export type ConversationCreateRequest = {
    name?: string;
    description?: string;
    contactId?: string;
    taskId?: string;
    botId?: string;
    backstory?: string;
    model?: string | import("../model/v1.js").Model;
    datasetId?: string;
    skillsetId?: string;
    meta?: Record<string, any>;
};
export type ConversationCreateRequestBody = import("../types/api/v1.js").operations["createConversation"]["requestBody"]["content"]["application/json"];
export type ConversationCreateResponse = import("../types/api/v1.js").operations["createConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationUpdateRequest = {
    name?: string;
    description?: string;
    contactId?: string;
    taskId?: string;
    botId?: string;
    backstory?: string;
    model?: string | import("../model/v1.js").Model;
    datasetId?: string;
    skillsetId?: string;
    meta?: Record<string, any>;
};
export type ConversationUpdateRequestBody = import("../types/api/v1.js").operations["updateConversation"]["requestBody"]["content"]["application/json"];
export type ConversationUpdateResponse = import("../types/api/v1.js").operations["updateConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDeleteRequestBody = import("../types/api/v1.js").operations["deleteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDeleteResponse = import("../types/api/v1.js").operations["deleteConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationCompleteRequest = {
    botId?: string;
    backstory?: string;
    model?: import("../model/v1.js").Model;
    messages?: Message[];
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
    functions?: {
        name: string;
        description: string;
        parameters: any;
    }[];
} & ({
    text: string;
} | {
    messages: Message[];
});
export type ConversationCompleteResponse = import("../types/api/v1.js").operations["completeConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationCompleteStreamType = import("../types/api/v1.js").operations["completeConversation"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationCompleteMessageRequest = {
    text: string;
    entities?: Entity[];
};
export type ConversationCompleteMessageResponse = import("../types/api/v1.js").operations["completeConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationCompleteMessageStreamType = import("../types/api/v1.js").operations["completeConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationSendMessageRequest = {
    text?: string;
    entities?: Entity[];
};
export type ConversationSendMessageResponse = import("../types/api/v1.js").operations["sendConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationSendMessageStreamType = import("../types/api/v1.js").operations["sendConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationReceiveMessageRequest = {};
export type ConversationReceiveMessageResponse = import("../types/api/v1.js").operations["receiveConversationMessage"]["responses"]["200"]["content"]["application/json"];
export type ConversationReceiveMessageStreamType = import("../types/api/v1.js").operations["receiveConversationMessage"]["responses"]["200"]["content"]["application/jsonl"];
export type ConversationUpvoteRequest = {
    value?: number;
    reason?: string;
};
export type ConversationUpvoteRequestBody = import("../types/api/v1.js").operations["upvoteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationUpvoteResponse = import("../types/api/v1.js").operations["upvoteConversation"]["responses"]["200"]["content"]["application/json"];
export type ConversationDownvoteRequest = {
    value?: number;
    reason?: string;
};
export type ConversationDownvoteRequestBody = import("../types/api/v1.js").operations["downvoteConversation"]["requestBody"]["content"]["application/json"];
export type ConversationDownvoteResponse = import("../types/api/v1.js").operations["downvoteConversation"]["responses"]["200"]["content"]["application/json"];
