/**
 * @param {string|ArrayBuffer} buffer
 * @returns {ArrayBuffer}
 */
export function getBuffer(buffer) {
  if (typeof buffer === 'string') {
    return new TextEncoder().encode(buffer)
  } else {
    return new Uint8Array(buffer)
  }
}
