[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/nextauth.svg)](https://www.npmjs.com/package/@chatbotkit/nextauth)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit NextAuth SDK

The [ChatBotKit](https://chatbotkit.com) SDK for NextAuth.js enables passwordless email authentication that integrates directly with the ChatBotKit Partner API. This allows you to authenticate users into their ChatBotKit sub-accounts without building separate user management infrastructure.

## What It Does

This SDK eliminates the need for a separate authentication system by:

- **Authenticating users directly into ChatBotKit sub-accounts** via the Partner API
- **Managing user identities** automatically through ChatBotKit
- **Providing passwordless authentication** with secure 6-character verification codes
- **Simplifying your architecture** by removing the need for password management and user databases

## Getting Started

To begin using the ChatBotKit NextAuth SDK, follow these steps:

1. **Installation**: Add the SDK to your project using npm:

   ```bash
   npm install @chatbotkit/nextauth next-auth
   ```

2. **Configuration**: Create a `nextauth.config.js` file in your project root directory:

   ```javascript
   import {
     ChatBotKitEmailProvider,
     ChatBotKitPartnerAdapter,
     MemoryStore,
   } from '@chatbotkit/nextauth'

   const nextAuthConfig = {
     adapter: ChatBotKitPartnerAdapter({
       secret: process.env.CHATBOTKIT_API_SECRET,

       // Use Redis or another persistent store in production

       store: new MemoryStore(),

       // Control user lifecycle

       autoCreateUser: false,
       autoUpdateUser: true,
       autoDeleteUser: false,
     }),

     providers: [
       ChatBotKitEmailProvider({
         async sendVerificationRequest({ identifier, token }) {
           // Implement your email sending logic here
           await sendEmail({
             to: identifier,
             subject: 'Sign in to your account',
             text: `Your verification code is: ${token}`,
           })
         },
       }),
     ],

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
       signOut: '/signin',
       verifyRequest: '/verify',
     },

     debug: !!process.env.DEBUG,
   }

   export default nextAuthConfig
   ```

3. **Create NextAuth API Route**: Create `pages/api/auth/[...nextauth].js`:

   ```javascript
   import NextAuth from 'next-auth'

   import nextAuthConfig from '../../../nextauth.config.js'

   export default NextAuth(nextAuthConfig)
   ```

4. **Environment Variables**: Add your ChatBotKit Partner API secret to `.env`:

   ```bash
   CHATBOTKIT_API_SECRET=your_partner_api_secret_here
   ```

## Complete Example

A complete working example demonstrating passwordless authentication with the ChatBotKit Partner API can be found in the [basic-auth example](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/basic-auth).

## Documentation

For comprehensive information about the ChatBotKit NextAuth SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_nextauth.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
