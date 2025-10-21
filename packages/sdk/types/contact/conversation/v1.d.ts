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
 * }} ConversationListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactConversations']['responses']['200']['content']['application/json']} ConversationListResponse
 *
 * @typedef {import('../../types/api/v1.js').operations['listContactConversations']['responses']['200']['content']['application/jsonl']} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} contactId
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client: ChatBotKitClient, contactId: string, request?: ConversationListRequest): ResponsePromise<ConversationListResponse, ConversationListStreamType>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ConversationListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationListResponse = import("../../types/api/v1.js").operations["listContactConversations"]["responses"]["200"]["content"]["application/json"];
export type ConversationListStreamType = import("../../types/api/v1.js").operations["listContactConversations"]["responses"]["200"]["content"]["application/jsonl"];
