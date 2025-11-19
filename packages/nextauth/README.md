[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/nextauth.svg)](https://www.npmjs.com/package/@chatbotkit/nextauth)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit NextAuth SDK

The [ChatBotKit](https://chatbotkit.com) SDK for NextAuth.js enables passwordless email authentication that integrates directly with the ChatBotKit Partner API. This allows you to authenticate users into their ChatBotKit sub-accounts without building separate user management infrastructure.

## Why Use This?

**Authentication is complex and risky to build yourself.** This SDK lets you skip all of that.

Instead of spending weeks building and maintaining authentication infrastructure, you can:

- **Launch faster**: Skip building user registration, login, password reset, and account management
- **Reduce security risks**: No passwords to hash, no credentials to secure, no user data breaches to worry about
- **Lower maintenance burden**: No authentication-related bugs, no password reset support tickets, no security patches
- **Eliminate infrastructure costs**: No user database, no email verification system, no password reset flows
- **Focus on your product**: Spend time building features that make your application unique

## What It Does

This SDK eliminates the need for a separate authentication system by:

- **Authenticating users directly into ChatBotKit sub-accounts** via the Partner API
- **Managing user identities** automatically through ChatBotKit
- **Providing passwordless authentication** with secure 6-character verification codes
- **Simplifying your architecture** by removing the need for password management and user databases

Perfect for applications that primarily provide a UI for ChatBotKit functionality—let ChatBotKit handle the auth complexity while you focus on delivering value to your users.

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

A complete working example demonstrating passwordless authentication with the ChatBotKit Partner API can be found in the [partner-auth example](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/partner-auth).

## Documentation

For comprehensive information about the ChatBotKit NextAuth SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_nextauth.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
