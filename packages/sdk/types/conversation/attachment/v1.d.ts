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
export type ConversationAttachmentUploadRequest = {
    data: string | ArrayBuffer;
    type: string;
    name?: string;
};
export type ConversationAttachmentUploadResponse = {
    id: string;
};
