/**
 * Find the ChatBotKit API token, if one is set.
 *
 * @note CHATBOTKIT_API_TOKEN is the name to use, or CBK_API_TOKEN for short.
 * SECRET and KEY are older names that are still read so existing setups keep
 * working. Every name has a CBK_ shorthand.
 *
 * @returns {string|undefined}
 */
export function findTOKEN(): string | undefined;
/**
 * Get the ChatBotKit API token.
 *
 * @returns {string}
 * @throws
 */
export function getTOKEN(): string;
/**
 * Get the ChatBotKit API URL, e.g. `http://localhost:3000` for a self-hosted
 * platform. The SDK default applies when unset.
 *
 * @returns {string|undefined}
 */
export function getAPI_URL(): string | undefined;
/**
 * Get the ChatBotKit RunAs-UserID.
 *
 * @returns {string|undefined}
 */
export function getRUNAS_USERID(): string | undefined;
