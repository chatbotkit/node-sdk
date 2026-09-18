/**
 * Find the ChatBotKit API token, if one is set.
 *
 * @note CHATBOTKIT_API_TOKEN is the name to use, or CBK_API_TOKEN for short.
 * SECRET and KEY are older names that are still read so existing setups keep
 * working. Every name has a CBK_ shorthand.
 *
 * @returns {string|undefined}
 */
export function findTOKEN() {
  return (
    process.env.CHATBOTKIT_API_TOKEN ||
    process.env.CBK_API_TOKEN ||
    process.env.CHATBOTKIT_API_SECRET ||
    process.env.CBK_API_SECRET ||
    process.env.CHATBOTKIT_API_KEY ||
    process.env.CBK_API_KEY ||
    undefined
  )
}

/**
 * Get the ChatBotKit API token.
 *
 * @returns {string}
 * @throws
 */
export function getTOKEN() {
  const token = findTOKEN()

  if (!token) {
    throw new Error('CHATBOTKIT_API_TOKEN is not set')
  }

  return token
}

/**
 * Get the ChatBotKit API URL, e.g. `http://localhost:3000` for a self-hosted
 * platform. The SDK default applies when unset.
 *
 * @returns {string|undefined}
 */
export function getAPI_URL() {
  return process.env.CHATBOTKIT_API_URL || process.env.CBK_API_URL || undefined
}

/**
 * Get the ChatBotKit RunAs-UserID.
 *
 * @returns {string|undefined}
 */
export function getRUNAS_USERID() {
  return (
    process.env.CHATBOTKIT_API_RUNAS_USERID ||
    process.env.CBK_API_RUNAS_USERID ||
    process.env.CHATBOTKIT_RUN_AS ||
    process.env.CBK_RUN_AS ||
    undefined
  )
}
