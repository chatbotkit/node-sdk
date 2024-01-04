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

    maxAge: 24 * 60 * 60, // 24 hours

    async sendVerificationRequest({ url }) {
      // eslint-disable-next-line no-console
      console.log(`* authenticate by visiting ${url}`)
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
