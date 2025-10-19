/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {{
 *   durationInSeconds?: number
 * }} BotSessionCreateRequest
 *
 * @typedef {{
 *   conversationId: string,
 *   token: string,
 *   expiresAt: number
 * }} BotSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotSessionCreateRequest} request
 * @returns {Promise<BotSessionCreateResponse>}
 */
export function createBotSession(client: ChatBotKitClient, botId: string, request: BotSessionCreateRequest): Promise<BotSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type BotSessionCreateRequest = {
    durationInSeconds?: number;
};
export type BotSessionCreateResponse = {
    conversationId: string;
    token: string;
    expiresAt: number;
};
