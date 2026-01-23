export const BLUE = '\u001b[34m'
export const RED = '\u001b[31m'
export const YELLOW = '\u001b[33m'
export const RESET = '\u001b[0m'

/**
 * @param {string} text
 */
export const formatBlue = (text) => {
  return `${BLUE}${text}${RESET}`
}

/**
 * @param {string} text
 */
export const formatRed = (text) => {
  return `${RED}${text}${RESET}`
}

/**
 * @param {string} text
 */
export const formatYellow = (text) => {
  return `${YELLOW}${text}${RESET}`
}
