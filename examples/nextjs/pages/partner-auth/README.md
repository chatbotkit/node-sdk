# ChatBotKit Partner API Authentication Example

This example demonstrates how to use the **ChatBotKit Partner API** to authenticate users directly into their sub-accounts using a passwordless email authentication flow with NextAuth.js.

## What This Example Does

This project showcases a complete authentication system that:

- **Authenticates users into sub-accounts**: Uses the ChatBotKit Partner API to create and manage user sub-accounts automatically
- **Passwordless authentication**: Implements email-based authentication with secure 6-character verification codes
- **Direct sub-account access**: Once authenticated, users are automatically logged into their dedicated ChatBotKit sub-account
- **Partner API integration**: Demonstrates how to use the Partner API to manage user identities and access control

This is the most straightforward way to build quick AI applications with ChatBotKit for your users without having to worry about the complexities of building a backend or managing user infrastructure.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-partner-auth dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
