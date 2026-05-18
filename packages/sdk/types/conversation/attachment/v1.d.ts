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
 *   take?: number,
 * }} ConversationAttachmentListRequest
 *
 * @typedef {import('../../types/api/v1.js').operations['listConversationAttachments']['responses']['200']['content']['application/json']} ConversationAttachmentListResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationAttachmentListRequest} [request]
 * @returns {ResponsePromise<ConversationAttachmentListResponse,never>}
 */
export function listConversationAttachments(client: ChatBotKitClient, conversationId: string, request?: ConversationAttachmentListRequest): ResponsePromise<ConversationAttachmentListResponse, never>;
/**
 * @typedef {{
 *   data: string|ArrayBuffer
 *   type: string,
 *   name?: string,
 * }} ConversationAttachmentUploadRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationAttachmentUploadResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} attachmentId
 * @param {ConversationAttachmentUploadRequest} request
 * @returns {Promise<ConversationAttachmentUploadResponse>}
 */
export function uploadConversationAttachment(client: ChatBotKitClient, attachmentId: string, request: ConversationAttachmentUploadRequest): Promise<ConversationAttachmentUploadResponse>;
export type ChatBotKitClient = import("../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
export type ConversationAttachmentListRequest = {
    cursor?: string;
    take?: number;
};
export type ConversationAttachmentListResponse = import("../../types/api/v1.js").operations["listConversationAttachments"]["responses"]["200"]["content"]["application/json"];
export type ConversationAttachmentUploadRequest = {
    data: string | ArrayBuffer;
    type: string;
    name?: string;
};
export type ConversationAttachmentUploadResponse = {
    id: string;
};
