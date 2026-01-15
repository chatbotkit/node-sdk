/**
 * A NextAuth.js email provider configured for passwordless authentication with
 * ChatBotKit Contacts.
 *
 * This provider implements a passwordless email authentication flow using
 * secure 6-character verification codes instead of magic links. It's designed
 * to work seamlessly with the ChatBotKit Contact API and provides a
 * user-friendly authentication experience for contact-based authentication.
 *
 * ## Problem It Solves
 *
 * When building applications where users are managed as contacts within a
 * single ChatBotKit account, you need an authentication mechanism that maps
 * users to contacts rather than separate accounts. This provider enables
 * passwordless authentication that integrates with the Contact adapter.
 *
 * **With this provider and the Contact adapter, you can:**
 *
 * - Authenticate users as contacts within your ChatBotKit account
 * - Track individual user conversations and preferences
 * - Share AI assistants and resources across all contacts
 * - Build multi-user applications without managing separate sub-accounts
 *
 * ## Overview
 *
 * The ChatBotKitContactEmailProvider generates cryptographically secure
 * 6-character hexadecimal verification tokens (e.g., "a3f9c2") that are sent
 * to users via email. These tokens have a 15-minute validity period by default,
 * providing a balance between security and usability.
 *
 * Unlike traditional magic link providers, this approach allows users to
 * manually enter a short code, which is particularly useful for:
 * - Mobile applications where clicking email links can be problematic
 * - Cross-device authentication flows
 * - Scenarios where email clients don't support HTML or links properly
 * - Improved accessibility and user experience
 *
 * ## Security Features
 *
 * - Generates tokens using `crypto.getRandomValues()` for cryptographic security
 * - 6-character hex codes provide sufficient entropy (16^6 = 16.7M combinations)
 * - Short expiration time (15 minutes) limits attack window
 * - Compatible with rate limiting and brute force protection strategies
 *
 * ## Implementation Requirements
 *
 * You must implement the `sendVerificationRequest` callback to send
 * verification codes to users. The default implementation only logs to console
 * for development purposes.
 *
 * @param {import("next-auth/providers/email").EmailUserConfig & {
 * }} [options]
 * @return {import("next-auth/providers/email").EmailConfig}
 *
 * @example
 * import NextAuth from 'next-auth'
 * import { ChatBotKitContactAdapter, ContactMemoryStore } from '@chatbotkit/nextauth/contact-adapter'
 * import { ChatBotKitContactEmailProvider } from '@chatbotkit/nextauth/contact-provider'
 *
 * export default NextAuth({
 *   adapter: ChatBotKitContactAdapter({
 *     secret: process.env.CHATBOTKIT_API_SECRET,
 *     store: new ContactMemoryStore(),
 *     autoCreateContact: true,
 *     autoUpdateContact: true,
 *     autoDeleteContact: false,
 *   }),
 *   providers: [
 *     ChatBotKitContactEmailProvider({
 *       async sendVerificationRequest({ identifier, token }) {
 *         // Send email with verification token to the user
 *         await sendEmail({
 *           to: identifier,
 *           subject: 'Sign in to your account',
 *           text: `Your verification code is: ${token}`,
 *         })
 *       },
 *     }),
 *   ],
 *   session: {
 *     strategy: 'jwt',
 *   },
 *   // ... other NextAuth configuration
 * })
 */
export function ChatBotKitContactEmailProvider(options) {
  return {
    id: 'email',

    type: 'email',

    name: 'Email',

    maxAge: 900, // 15 minutes

    async generateVerificationToken() {
      const length = 6

      const byteLength = Math.ceil(length / 2)

      const randomValues = crypto.getRandomValues(new Uint8Array(byteLength))

      return Array.prototype.map
        .call(randomValues, (x) => x.toString(16).padStart(2, '0'))
        .join('')
        .slice(0, length)
    },

    async sendVerificationRequest({ identifier, token }) {
      // eslint-disable-next-line no-console
      console.log(`* authenticate contact by sending ${token} to ${identifier}`)
      // eslint-disable-next-line no-console
      console.log(
        `* please override sendVerificationRequest with your own implementation`
      )
    },

    options: {
      ...options,
    },

    // dummy values which do not matter
    ...{
      server: {
        host: 'localhost',
        port: 25,
        auth: { user: 'user', pass: 'pass' },
      },

      from: 'Dummy <no-reply@dummy>',
    },
  }
}
