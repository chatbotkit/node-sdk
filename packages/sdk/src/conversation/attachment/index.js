import { ChatBotKitClient } from '../../client.js'
import {
  listConversationAttachments,
  uploadConversationAttachment,
} from './v1.js'

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
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all attachments.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationAttachmentListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ConversationAttachmentListResponse,never>}
   */
  list(conversationId, request) {
    return listConversationAttachments(this, conversationId, request)
  }

  /**
   * Upload file data.
   *
   * @param {string} conversationId
   * @param {import('./v1.js').ConversationAttachmentUploadRequest} request
   * @returns {Promise<import('./v1.js').ConversationAttachmentUploadResponse>}
   */
  upload(conversationId, request) {
    return uploadConversationAttachment(this, conversationId, request)
  }
}

export default ConversationAttachmentClient
