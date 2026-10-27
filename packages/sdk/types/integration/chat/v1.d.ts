/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ChatIntegrationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrations']['responses']['200']['content']['application/json']} ChatIntegrationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrations']['responses']['200']['content']['application/jsonl']} ChatIntegrationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ChatIntegrationListRequest} [request]
 * @returns {ResponsePromise<ChatIntegrationListResponse,ChatIntegrationListStreamType>}
 */
export function listChatIntegrations(client: ChatBotKitClient, request?: ChatIntegrationListRequest): ResponsePromise<ChatIntegrationListResponse, ChatIntegrationListStreamType>;
/**
 * @typedef {import('../../types/api/v1.js').operations['fetchChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationFetchResponse,never>}
 */
export function fetchChatIntegration(client: ChatBotKitClient, chatId: string): ResponsePromise<ChatIntegrationFetchResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationCreateRequestBody
 *
 * @typedef {ChatIntegrationCreateRequestBody} ChatIntegrationCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationCreateResponseBody
 *
 * @typedef {ChatIntegrationCreateResponseBody} ChatIntegrationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ChatIntegrationCreateRequest} request
 * @returns {Promise<ChatIntegrationCreateResponse>}
 */
export function createChatIntegration(client: ChatBotKitClient, request: ChatIntegrationCreateRequest): Promise<ChatIntegrationCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['updateChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationUpdateRequestBody
 *
 * @typedef {ChatIntegrationUpdateRequestBody} ChatIntegrationUpdateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['updateChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationUpdateResponseBody
 *
 * @typedef {ChatIntegrationUpdateResponseBody} ChatIntegrationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationUpdateRequest} request
 * @returns {Promise<ChatIntegrationUpdateResponse>}
 */
export function updateChatIntegration(client: ChatBotKitClient, chatId: string, request: ChatIntegrationUpdateRequest): Promise<ChatIntegrationUpdateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['deleteChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationDeleteRequestBody
 *
 * @typedef {ChatIntegrationDeleteRequestBody} ChatIntegrationDeleteRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['deleteChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationDeleteResponseBody
 *
 * @typedef {ChatIntegrationDeleteResponseBody} ChatIntegrationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationDeleteRequest} [request]
 * @returns {Promise<ChatIntegrationDeleteResponse>}
 */
export function deleteChatIntegration(client: ChatBotKitClient, chatId: string, request?: ChatIntegrationDeleteRequest): Promise<ChatIntegrationDeleteResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['setupChatIntegration']['requestBody']['content']['application/json']} ChatIntegrationSetupRequestBody
 *
 * @typedef {ChatIntegrationSetupRequestBody} ChatIntegrationSetupRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['setupChatIntegration']['responses']['200']['content']['application/json']} ChatIntegrationSetupResponseBody
 *
 * @typedef {ChatIntegrationSetupResponseBody} ChatIntegrationSetupResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {Promise<ChatIntegrationSetupResponse>}
 */
export function setupChatIntegration(client: ChatBotKitClient, chatId: string): Promise<ChatIntegrationSetupResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['initiateChat']['requestBody']['content']['application/json']} ChatInitiateRequestBody
 *
 * @typedef {ChatInitiateRequestBody} ChatInitiateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['initiateChat']['responses']['200']['content']['application/json']} ChatInitiateResponseBody
 *
 * @typedef {ChatInitiateResponseBody} ChatInitiateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatInitiateRequest} request
 * @returns {Promise<ChatInitiateResponse>}
 */
export function initiateChat(client: ChatBotKitClient, chatId: string, request: ChatInitiateRequest): Promise<ChatInitiateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationMembers']['responses']['200']['content']['application/json']} ChatIntegrationMemberListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationMemberListResponse,never>}
 */
export function listChatIntegrationMembers(client: ChatBotKitClient, chatId: string): ResponsePromise<ChatIntegrationMemberListResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationGroups']['responses']['200']['content']['application/json']} ChatIntegrationGroupListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @returns {ResponsePromise<ChatIntegrationGroupListResponse,never>}
 */
export function listChatIntegrationGroups(client: ChatBotKitClient, chatId: string): ResponsePromise<ChatIntegrationGroupListResponse, never>;
/**
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegrationSession']['requestBody']['content']['application/json']} ChatIntegrationSessionCreateRequestBody
 *
 * @typedef {ChatIntegrationSessionCreateRequestBody} ChatIntegrationSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createChatIntegrationSession']['responses']['200']['content']['application/json']} ChatIntegrationSessionCreateResponseBody
 *
 * @typedef {ChatIntegrationSessionCreateResponseBody} ChatIntegrationSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationSessionCreateRequest} request
 * @returns {Promise<ChatIntegrationSessionCreateResponse>}
 */
export function createChatIntegrationSession(client: ChatBotKitClient, chatId: string, request: ChatIntegrationSessionCreateRequest): Promise<ChatIntegrationSessionCreateResponse>;
/**
 * @typedef {import('../../types/api/v1.js').operations['sendChatIntegrationMessage']['requestBody']['content']['application/json']} ChatIntegrationMessageSendRequestBody
 *
 * @typedef {ChatIntegrationMessageSendRequestBody} ChatIntegrationMessageSendRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['sendChatIntegrationMessage']['responses']['200']['content']['application/json']} ChatIntegrationMessageSendResponseBody
 *
 * @typedef {ChatIntegrationMessageSendResponseBody} ChatIntegrationMessageSendResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationMessageSendRequest} request
 * @returns {Promise<ChatIntegrationMessageSendResponse>}
 */
export function sendChatIntegrationMessage(client: ChatBotKitClient, chatId: string, request: ChatIntegrationMessageSendRequest): Promise<ChatIntegrationMessageSendResponse>;
/**
 * @typedef {{
 *   group?: string,
 *   handle?: string,
 *   contactId?: string,
 *   since?: string,
 *   limit?: number
 * }} ChatIntegrationMessageListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listChatIntegrationMessages']['responses']['200']['content']['application/json']} ChatIntegrationMessageListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} chatId
 * @param {ChatIntegrationMessageListRequest} request
 * @returns {ResponsePromise<ChatIntegrationMessageListResponse,never>}
 */
export function listChatIntegrationMessages(client: ChatBotKitClient, chatId: string, request: ChatIntegrationMessageListRequest): ResponsePromise<ChatIntegrationMessageListResponse, never>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ChatIntegrationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ChatIntegrationListResponse = import("../../types/api/v1.js").operations["listChatIntegrations"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationListStreamType = import("../../types/api/v1.js").operations["listChatIntegrations"]["responses"]["200"]["content"]["application/jsonl"];
export type ChatIntegrationFetchResponse = import("../../types/api/v1.js").operations["fetchChatIntegration"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationCreateRequestBody = import("../../types/api/v1.js").operations["createChatIntegration"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationCreateRequest = ChatIntegrationCreateRequestBody;
export type ChatIntegrationCreateResponseBody = import("../../types/api/v1.js").operations["createChatIntegration"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationCreateResponse = ChatIntegrationCreateResponseBody;
export type ChatIntegrationUpdateRequestBody = import("../../types/api/v1.js").operations["updateChatIntegration"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationUpdateRequest = ChatIntegrationUpdateRequestBody;
export type ChatIntegrationUpdateResponseBody = import("../../types/api/v1.js").operations["updateChatIntegration"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationUpdateResponse = ChatIntegrationUpdateResponseBody;
export type ChatIntegrationDeleteRequestBody = import("../../types/api/v1.js").operations["deleteChatIntegration"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationDeleteRequest = ChatIntegrationDeleteRequestBody;
export type ChatIntegrationDeleteResponseBody = import("../../types/api/v1.js").operations["deleteChatIntegration"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationDeleteResponse = ChatIntegrationDeleteResponseBody;
export type ChatIntegrationSetupRequestBody = import("../../types/api/v1.js").operations["setupChatIntegration"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationSetupRequest = ChatIntegrationSetupRequestBody;
export type ChatIntegrationSetupResponseBody = import("../../types/api/v1.js").operations["setupChatIntegration"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationSetupResponse = ChatIntegrationSetupResponseBody;
export type ChatInitiateRequestBody = import("../../types/api/v1.js").operations["initiateChat"]["requestBody"]["content"]["application/json"];
export type ChatInitiateRequest = ChatInitiateRequestBody;
export type ChatInitiateResponseBody = import("../../types/api/v1.js").operations["initiateChat"]["responses"]["200"]["content"]["application/json"];
export type ChatInitiateResponse = ChatInitiateResponseBody;
export type ChatIntegrationMemberListResponse = import("../../types/api/v1.js").operations["listChatIntegrationMembers"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationGroupListResponse = import("../../types/api/v1.js").operations["listChatIntegrationGroups"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationSessionCreateRequestBody = import("../../types/api/v1.js").operations["createChatIntegrationSession"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationSessionCreateRequest = ChatIntegrationSessionCreateRequestBody;
export type ChatIntegrationSessionCreateResponseBody = import("../../types/api/v1.js").operations["createChatIntegrationSession"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationSessionCreateResponse = ChatIntegrationSessionCreateResponseBody;
export type ChatIntegrationMessageSendRequestBody = import("../../types/api/v1.js").operations["sendChatIntegrationMessage"]["requestBody"]["content"]["application/json"];
export type ChatIntegrationMessageSendRequest = ChatIntegrationMessageSendRequestBody;
export type ChatIntegrationMessageSendResponseBody = import("../../types/api/v1.js").operations["sendChatIntegrationMessage"]["responses"]["200"]["content"]["application/json"];
export type ChatIntegrationMessageSendResponse = ChatIntegrationMessageSendResponseBody;
export type ChatIntegrationMessageListRequest = {
    group?: string;
    handle?: string;
    contactId?: string;
    since?: string;
    limit?: number;
};
export type ChatIntegrationMessageListResponse = import("../../types/api/v1.js").operations["listChatIntegrationMessages"]["responses"]["200"]["content"]["application/json"];
