import { getBuffer } from '../../buffer.js'

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
export function listConversationAttachments(client, conversationId, request) {
  let url = `/api/v1/conversation/${conversationId}/attachment/list`

  /** @type {ResponsePromise<ConversationAttachmentListResponse,never>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

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
export async function uploadConversationAttachment(
  client,
  attachmentId,
  request
) {
  const url = `/api/v1/Attachment/${attachmentId}/upload`

  const buffer = getBuffer(request.data)

  /** @type {import('../../types/api/v1.js').operations['uploadConversationAttachment']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../../types/api/v1.js').operations['uploadConversationAttachment']['requestBody']['content']['application/json']} */
    record: {
      file: {
        size: buffer.byteLength,
        type: request.type,
        name: request.name,
      },
    },
  })

  const { uploadRequest } = response

  if (!uploadRequest) {
    throw new Error('Missing upload request')
  }

  await client.clientFetch(uploadRequest.url, {
    method: uploadRequest.method,

    headers: uploadRequest.headers,

    buffer: buffer,

    external: true,
  })

  return {
    id: response.id,
  }
}
