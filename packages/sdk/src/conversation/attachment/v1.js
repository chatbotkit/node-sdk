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
