/**
 * @template T
 * @param {T} object
 * @param {object} extension
 * @returns {T}
 */
export function cloneAndExtend(object, extension) {
  return Object.assign(
    Object.assign(Object.create(Object.getPrototypeOf(object)), object),
    extension
  )
}
