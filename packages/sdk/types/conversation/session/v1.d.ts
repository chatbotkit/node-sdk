/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {import('../../types/api/v1.js').operations['createConversationSession']['requestBody']['content']['application/json']} ConversationSessionCreateRequestBody
 *
 * @typedef {ConversationSessionCreateRequestBody} ConversationSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createConversationSession']['responses']['200']['content']['application/json']} ConversationSessionCreateResponseBody
 *
 * @typedef {ConversationSessionCreateResponseBody} ConversationSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSessionCreateRequest} request
 * @returns {Promise<ConversationSessionCreateResponse>}
 */
export function createConversationSession(client: ChatBotKitClient, conversationId: string, request: ConversationSessionCreateRequest): Promise<ConversationSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ConversationSessionCreateRequestBody = import("../../types/api/v1.js").operations["createConversationSession"]["requestBody"]["content"]["application/json"];
export type ConversationSessionCreateRequest = ConversationSessionCreateRequestBody;
export type ConversationSessionCreateResponseBody = import("../../types/api/v1.js").operations["createConversationSession"]["responses"]["200"]["content"]["application/json"];
export type ConversationSessionCreateResponse = ConversationSessionCreateResponseBody;
