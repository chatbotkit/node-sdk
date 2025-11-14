export const BLUE = '\u001b[34m'
export const RESET = '\u001b[0m'

/**
 * @param {string} text
 */
export const formatBlue = (text) => {
  return `${BLUE}${text}${RESET}`
}
