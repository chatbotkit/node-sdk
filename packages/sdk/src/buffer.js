import { fetch } from '@chatbotkit/fetch'

/**
 * @internal
 * @param {string|ArrayBuffer} buffer
 * @returns {ArrayBuffer}
 */
export function getBuffer(buffer) {
  if (typeof buffer === 'string') {
    return new TextEncoder().encode(buffer).buffer
  }

  if (buffer instanceof ArrayBuffer) {
    return buffer
  }

  // @ts-expect-error because we need to be sure
  return buffer.buffer
}

/**
 * A reference to a local file by URI, as returned by React Native and Expo
 * pickers.
 *
 * @typedef {{
 *   uri: string,
 *   name?: string,
 *   type?: string
 * }} FileReference
 */

/**
 * @internal
 * @param {any} value
 * @returns {value is FileReference}
 */
export function isFileReference(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !(value instanceof ArrayBuffer) &&
    !ArrayBuffer.isView(value) &&
    typeof value.uri === 'string'
  )
}

/**
 * @internal
 * @param {string|ArrayBuffer|FileReference} data
 * @returns {Promise<{ body: ArrayBuffer|Blob, size: number, name?: string }>}
 */
export async function getUploadBody(data) {
  if (isFileReference(data)) {
    const response = await fetch(data.uri)

    if (response.status >= 400) {
      throw new Error(`Unable to read the file at ${data.uri}`)
    }

    const blob = await response.blob()

    return {
      body: blob,
      size: blob.size,
      name: data.name,
    }
  }

  const buffer = getBuffer(data)

  return { body: buffer, size: buffer.byteLength }
}
