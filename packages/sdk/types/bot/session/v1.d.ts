/**
 * @typedef {import('../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @typedef {import('../../types/api/v1.js').operations['createBotSession']['requestBody']['content']['application/json']} BotSessionCreateRequestBody
 *
 * @typedef {BotSessionCreateRequestBody} BotSessionCreateRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['createBotSession']['responses']['200']['content']['application/json']} BotSessionCreateResponseBody
 *
 * @typedef {BotSessionCreateResponseBody} BotSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} botId
 * @param {BotSessionCreateRequest} request
 * @returns {Promise<BotSessionCreateResponse>}
 */
export function createBotSession(client: ChatBotKitClient, botId: string, request: BotSessionCreateRequest): Promise<BotSessionCreateResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type BotSessionCreateRequestBody = import("../../types/api/v1.js").operations["createBotSession"]["requestBody"]["content"]["application/json"];
export type BotSessionCreateRequest = BotSessionCreateRequestBody;
export type BotSessionCreateResponseBody = import("../../types/api/v1.js").operations["createBotSession"]["responses"]["200"]["content"]["application/json"];
export type BotSessionCreateResponse = BotSessionCreateResponseBody;
