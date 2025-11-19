/**
 * @param {import("next-auth/providers/email").EmailUserConfig & {
 * }} [options]
 * @return {import("next-auth/providers/email").EmailConfig}
 */
export function ChatBotKitEmailProvider(options) {
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
      console.log(`* authenticate by sending ${token} to ${identifier}`)
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
