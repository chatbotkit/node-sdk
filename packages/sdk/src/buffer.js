/**
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
