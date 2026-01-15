**@chatbotkit/nextauth**

***

[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/nextauth.svg)](https://www.npmjs.com/package/@chatbotkit/nextauth)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit NextAuth SDK

The [ChatBotKit](https://chatbotkit.com) SDK for NextAuth.js enables passwordless email authentication that integrates directly with ChatBotKit. This allows you to authenticate users without building separate user management infrastructure.

## Two Authentication Approaches

This SDK provides two adapters for different use cases:

### 1. Partner Adapter (Sub-Accounts)

Use `ChatBotKitPartnerAdapter` when you want each user to have their own isolated ChatBotKit sub-account:

- **Separate environments**: Each user gets their own bots, datasets, and resources
- **Complete isolation**: Users cannot see or access each other's data
- **Partner API integration**: Requires a Partner API secret
- **Best for**: SaaS applications, white-label solutions, multi-tenant platforms

### 2. Contact Adapter (Single Account)

Use `ChatBotKitContactAdapter` when you want all users to be contacts within a single ChatBotKit account:

- **Shared resources**: All contacts can interact with the same bots and datasets
- **Individual tracking**: Each contact has their own conversation history and preferences
- **Standard API integration**: Works with a regular API secret
- **Best for**: Chat applications, customer support systems, community platforms

## Why Use This?

**Authentication is complex and risky to build yourself.** This SDK lets you skip all of that.

Instead of spending weeks building and maintaining authentication infrastructure, you can:

- **Launch faster**: Skip building user registration, login, password reset, and account management
- **Reduce security risks**: No passwords to hash, no credentials to secure, no user data breaches to worry about
- **Lower maintenance burden**: No authentication-related bugs, no password reset support tickets, no security patches
- **Eliminate infrastructure costs**: No user database, no email verification system, no password reset flows
- **Focus on your product**: Spend time building features that make your application unique

## Getting Started

### Installation

Add the SDK to your project using npm:

```bash
npm install @chatbotkit/nextauth next-auth
```

### Partner Adapter Configuration

Use this approach when each user needs their own isolated ChatBotKit environment:

```javascript
import {
  ChatBotKitEmailProvider,
  ChatBotKitPartnerAdapter,
  MemoryStore,
} from '@chatbotkit/nextauth/partner'

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

### Contact Adapter Configuration

Use this approach when users are contacts within a single ChatBotKit account:

```javascript
import {
  ChatBotKitContactEmailProvider,
  ChatBotKitContactAdapter,
  ContactMemoryStore,
} from '@chatbotkit/nextauth/contact'

const nextAuthConfig = {
  adapter: ChatBotKitContactAdapter({
    secret: process.env.CHATBOTKIT_API_SECRET,

    // Use Redis or another persistent store in production
    store: new ContactMemoryStore(),

    // Control contact lifecycle
    autoCreateContact: true,
    autoUpdateContact: true,
    autoDeleteContact: false,
  }),

  providers: [
    ChatBotKitContactEmailProvider({
      async sendVerificationRequest({ identifier, token }) {
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

### Create NextAuth API Route

Create `pages/api/auth/[...nextauth].js`:

```javascript
import NextAuth from 'next-auth'

import nextAuthConfig from '../../../nextauth.config.js'

export default NextAuth(nextAuthConfig)
```

### Environment Variables

Add your ChatBotKit API secret to `.env`:

```bash
CHATBOTKIT_API_SECRET=your_api_secret_here
```

## Choosing Between Partner and Contact Adapters

| Feature | Partner Adapter | Contact Adapter |
|---------|-----------------|-----------------|
| User isolation | Complete (separate sub-accounts) | Partial (shared account, individual contacts) |
| Resource sharing | None (each user has own resources) | Full (all contacts share bots/datasets) |
| API type | Partner API | Standard API |
| User identity | Separate ChatBotKit accounts | Contacts within single account |
| Best for | SaaS, white-label, multi-tenant | Chat apps, support systems, communities |

## Complete Example

A complete working example demonstrating passwordless authentication with the ChatBotKit Partner API can be found in the [partner-auth example](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/partner-auth).

## Documentation

For comprehensive information about the ChatBotKit NextAuth SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_nextauth.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
