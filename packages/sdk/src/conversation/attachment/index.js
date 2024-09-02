import { ChatBotKitClient } from '../../client.js'
import { uploadConversationAttachment } from './v1.js'

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
   * Upload file data.
   *
   * @param {string} fileId
   * @param {import('./v1.js').ConversationAttachmentUploadRequest} request
   * @returns {Promise<import('./v1.js').ConversationAttachmentUploadResponse>}
   */
  upload(fileId, request) {
    return uploadConversationAttachment(this, fileId, request)
  }
}

export default ConversationAttachmentClient
