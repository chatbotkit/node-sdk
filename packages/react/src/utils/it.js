/**
 * @internal
 * @param {any} value
 * @returns {boolean}
 */
export function isAsyncGenerator(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value[Symbol.asyncIterator] === 'function'
  )
}
