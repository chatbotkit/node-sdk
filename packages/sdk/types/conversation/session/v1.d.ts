/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {{
 *   durationInSeconds?: number
 * }} ConversationSessionCreateRequest
 *
 * @typedef {{
 *   token: string,
 *   expiresAt: number
 * }} ConversationSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSessionCreateRequest} request
 * @returns {Promise<ConversationSessionCreateResponse>}
 */
export function createConversationSession(client: ChatBotKitClient, conversationId: string, request: ConversationSessionCreateRequest): Promise<ConversationSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ConversationSessionCreateRequest = {
    durationInSeconds?: number;
};
export type ConversationSessionCreateResponse = {
    token: string;
    expiresAt: number;
};
