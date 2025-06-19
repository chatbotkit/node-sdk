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
 *   type: ConversationMessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} ConversationMessageOptions
 *
 * @typedef {ConversationMessageOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationMessageInstance
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} ConversationMessageListRequest
 *
 * @typedef {{items: ConversationMessageInstance[]}} ConversationMessageListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationMessageInstance
 * }} ConversationMessageListStreamItem
 *
 * @typedef {ConversationMessageListStreamItem} ConversationMessageListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageListRequest} [request]
 * @returns {ResponsePromise<ConversationMessageListResponse,ConversationMessageListStreamType>}
 */
export function listConversationMessages(client: ChatBotKitClient, conversationId: string, request?: ConversationMessageListRequest | undefined): ResponsePromise<ConversationMessageListResponse, ConversationMessageListStreamType>;
/**
 * @typedef {ConversationMessageInstance & {
 * }} ConversationMessageFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @returns {ResponsePromise<ConversationMessageFetchResponse,never>}
 */
export function fetchConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string): ResponsePromise<ConversationMessageFetchResponse, never>;
/**
 * @typedef {ConversationMessageOptions & {
 * }} ConversationMessageCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationMessageCreateRequest} request
 * @returns {Promise<ConversationMessageCreateResponse>}
 */
export function createConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationMessageCreateRequest): Promise<ConversationMessageCreateResponse>;
/**
 * @typedef {ConversationMessageOptions & {
 * }} ConversationMessageUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationMessageUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageUpdateRequest} request
 * @returns {Promise<ConversationMessageUpdateResponse>}
 */
export function updateConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageUpdateRequest): Promise<ConversationMessageUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} ConversationMessageDeleteResponse
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
 * @typedef {{
 *   id: string
 * }} ConversationMessageUpvoteResponse
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
 * @typedef {{
 *   id: string
 * }} ConversationMessageDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {string} messageId
 * @param {ConversationMessageDownvoteRequest} request
 * @returns {Promise<ConversationMessageDownvoteResponse>}
 */
export function downvoteConversationMessage(client: ChatBotKitClient, conversationId: string, messageId: string, request: ConversationMessageDownvoteRequest): Promise<ConversationMessageDownvoteResponse>;
export type ChatBotKitClient = import('../../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../../client.js').ResponsePromise<T, U>;
export type ConversationMessageType = 'user' | 'bot' | 'reasoning' | 'context' | 'instruction' | 'backstory' | 'activity';
export type ConversationMessageOptions = {
    type: ConversationMessageType;
    text: string;
    meta?: Record<string, any>;
};
export type ConversationMessageInstance = ConversationMessageOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type ConversationMessageListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationMessageListResponse = {
    items: ConversationMessageInstance[];
};
export type ConversationMessageListStreamItem = {
    type: 'item';
    data: ConversationMessageInstance;
};
export type ConversationMessageListStreamType = ConversationMessageListStreamItem;
export type ConversationMessageFetchResponse = ConversationMessageInstance & {};
export type ConversationMessageCreateRequest = ConversationMessageOptions & {};
export type ConversationMessageCreateResponse = {
    id: string;
};
export type ConversationMessageUpdateRequest = ConversationMessageOptions & {};
export type ConversationMessageUpdateResponse = {
    id: string;
};
export type ConversationMessageDeleteResponse = {
    id: string;
};
export type ConversationMessageUpvoteRequest = {
    value?: number;
};
export type ConversationMessageUpvoteResponse = {
    id: string;
};
export type ConversationMessageDownvoteRequest = {
    value?: number;
};
export type ConversationMessageDownvoteResponse = {
    id: string;
};
