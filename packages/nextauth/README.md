[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/nextauth.svg)](https://www.npmjs.com/package/@chatbotkit/nextauth)

# ChatBotKit NextAuth SDK

The [ChatBotKit](https://chatbotkit.com) SDK for NextAuth.js offers a simple way to integrate your Next.js application with the ChatBotKit platform.

## Getting Started

To begin using the ChatBotKit NextAuth SDK, follow these steps:

1. **Installation**: Add the SDK to your project using npm:

   ```bash
   npm install @chatbotkit/nextauth
   ```

2. **Configuration**: Create nextauth.config.js file in your project root directory and add the following code:

   ```javascript
   const {
     ChatBotKitPartnerAdapter,
     ChatBotKitEmailProvider,
     MemoryStore,
   } = require('@chatbotkit/nextauth')

   const nextAuthConfig = {
     adapter: ChatBotKitPartnerAdapter({
       secret: process.env.CHATBOTKIT_API_SECRET,
       store: new MemoryStore(),
     }),

     providers: [ChatBotKitEmailProvider({})],

     session: {
       strategy: 'jwt',
     },

     callbacks: {
       async session({ session, token }) {
         session.user = token.user

         return session
       },

       async jwt({ token, user }) {
         if (user) {
           token.user = user
         }

         return token
       },
     },

     pages: {
       signIn: '/signin',
       verifyRequest: '/verify',
     },

     debug: !!process.env.DEBUG,
   }
   ```

3. **Usage**: Use the config file to initialize the nextauth routes as you normally would.

A complete example of the ChatBotKit NextAuth SDK in use can be found in the [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/basic-auth).

## Documentation

For comprehensive information about the ChatBotKit NextAuth SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_nextauth.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
