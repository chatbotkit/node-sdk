[**@chatbotkit/nextauth**](../../../README.md)

***

[@chatbotkit/nextauth](../../../modules.md) / [partner/provider](../README.md) / ChatBotKitEmailProvider

# Function: ChatBotKitEmailProvider()

> **ChatBotKitEmailProvider**(`options?`): `EmailConfig`

Defined in: [partner/provider.js:86](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/partner/provider.js#L86)

A NextAuth.js email provider configured for passwordless authentication with
ChatBotKit.

This provider implements a passwordless email authentication flow using
secure 6-character verification codes instead of magic links. It's designed
to work seamlessly with the ChatBotKit Partner API and provides a
user-friendly authentication experience.

## Problem It Solves

When building applications with ChatBotKit, you typically need to manage two
separate user systems: one for your application authentication and another
for ChatBotKit sub-accounts. This creates unnecessary complexity and
maintenance overhead.

**With this provider, you can eliminate your own authentication system entirely.**

Instead of building and maintaining separate user management infrastructure,
you rely solely on the partner accounts created within ChatBotKit. This
means:

- **No separate user database required**: User identities are managed by ChatBotKit
- **No password management**: Passwordless authentication removes password reset flows
- **Simplified architecture**: One less system to build, secure, and maintain
- **Automatic sub-account provisioning**: Users are automatically connected to their
  ChatBotKit environment upon authentication
- **Faster time to market**: Focus on your application features instead of auth infrastructure

This approach is ideal for applications that exist primarily to provide a
user interface for ChatBotKit functionality, allowing you to leverage
ChatBotKit's Partner API as your complete user management and authentication
backend.

## Overview

The ChatBotKitEmailProvider generates cryptographically secure 6-character
hexadecimal verification tokens (e.g., "a3f9c2") that are sent to users via
email. These tokens have a 15-minute validity period by default, providing a
balance between security and usability.

Unlike traditional magic link providers, this approach allows users to
manually enter a short code, which is particularly useful for:
- Mobile applications where clicking email links can be problematic
- Cross-device authentication flows
- Scenarios where email clients don't support HTML or links properly
- Improved accessibility and user experience

## Security Features

- Generates tokens using `crypto.getRandomValues()` for cryptographic security
- 6-character hex codes provide sufficient entropy (16^6 = 16.7M combinations)
- Short expiration time (15 minutes) limits attack window
- Compatible with rate limiting and brute force protection strategies

## Implementation Requirements

You must implement the `sendVerificationRequest` callback to send
verification codes to users. The default implementation only logs to console
for development purposes.

## Parameters

### options?

`EmailUserConfig`

## Returns

`EmailConfig`

## Example

```ts
import NextAuth from 'next-auth'
import { ChatBotKitEmailProvider } from '@chatbotkit/nextauth/partner'

export default NextAuth({
  providers: [
    ChatBotKitEmailProvider({
      async sendVerificationRequest({ identifier, token }) {
        // Send email with verification token to the user
        await sendEmail({
          to: identifier,
          subject: 'Sign in to your account',
          text: `Your verification code is: ${token}`,
        })
      },
    }),
  ],
  // ... other NextAuth configuration
})
```
