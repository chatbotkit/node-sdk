/**
 * @template T
 * @template U
 * @typedef {import('../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Attachment client.
 */
export class ConversationAttachmentClient extends ChatBotKitClient {
    /**
     * Upload file data.
     *
     * @param {string} fileId
     * @param {import('./v1.js').ConversationAttachmentUploadRequest} request
     * @returns {Promise<import('./v1.js').ConversationAttachmentUploadResponse>}
     */
    upload(fileId: string, request: import("./v1.js").ConversationAttachmentUploadRequest): Promise<import("./v1.js").ConversationAttachmentUploadResponse>;
}
export default ConversationAttachmentClient;
export type ResponsePromise<T, U> = import("../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../client.js';
