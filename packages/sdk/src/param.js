/**
 * @param {string} name
 * @param {Record<string,any>} params
 * @param {Record<string,any>} [defaultParams]
 * @returns {string}
 */
export function buildParamString(name, params, defaultParams) {
  const parts = []

  for (const [name, value] of Object.entries(params)) {
    if (value) {
      // deliberately use != instead of !==

      if (defaultParams?.[name] != value) {
        parts.push(`${name}=${value}`)
      }
    }
  }

  if (parts.length) {
    return `${name}/${parts.join('/')}`
  } else {
    return `${name}`
  }
}
