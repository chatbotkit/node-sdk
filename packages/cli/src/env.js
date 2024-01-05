/**
 * @returns {string}
 * @throws
 */
export function getSECRET() {
  if (!process.env.CHATBOTKIT_API_SECRET) {
    throw new Error('CHATBOTKIT_API_SECRET is not set')
  }

  return process.env.CHATBOTKIT_API_SECRET
}
