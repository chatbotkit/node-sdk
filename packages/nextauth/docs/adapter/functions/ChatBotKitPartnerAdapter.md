[**@chatbotkit/nextauth**](../../README.md)

***

[@chatbotkit/nextauth](../../modules.md) / [adapter](../README.md) / ChatBotKitPartnerAdapter

# Function: ChatBotKitPartnerAdapter()

> **ChatBotKitPartnerAdapter**(`options`): `Adapter`

Defined in: [adapter.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L166)

A NextAuth.js adapter that integrates with the ChatBotKit Partner API for
user management.

This adapter enables you to authenticate users directly into their ChatBotKit
sub-accounts using NextAuth.js. It manages user identities through the
ChatBotKit Partner API, allowing you to build applications where each user
gets their own isolated ChatBotKit environment.

## Overview

The ChatBotKitPartnerAdapter bridges NextAuth.js authentication with
ChatBotKit's Partner API user management system. When users authenticate
through your application, this adapter automatically manages their ChatBotKit
sub-account, creating, updating, or removing users based on your
configuration.

## Key Features

- **Sub-account Management**: Automatically manages ChatBotKit sub-accounts for each user
- **Flexible User Lifecycle**: Control whether users are auto-created, updated, or deleted
- **Secure Token Storage**: Uses a configurable store for managing verification tokens
- **Partner API Integration**: Seamlessly works with ChatBotKit Partner API credentials

## Storage Requirements

This adapter requires a store implementation for persisting verification
tokens and session data. The store interface is compatible with Vercel KV and
Redis, but you can implement your own storage backend by extending the Store
class.

**Important**: Do not use MemoryStore in production environments as it
doesn't persist data across server restarts or multiple instances.

## User Lifecycle Control

- `autoCreateUser`: When true, new ChatBotKit sub-accounts are created automatically on
  first sign-in. Recommended for self-service applications.
- `autoUpdateUser`: When true, user information is synchronized with ChatBotKit on each
  sign-in. Recommended to keep user data in sync.
- `autoDeleteUser`: When true, ChatBotKit sub-accounts are deleted when users are removed
  from NextAuth. Use with caution in production.

## Production Recommendations

For production environments:
- Use a persistent store (Redis, Vercel KV, or database-backed implementation)
- Set `autoCreateUser: false` and manually approve user creation
- Enable `autoUpdateUser: true` to keep user data synchronized
- Set `autoDeleteUser: false` to prevent accidental data loss
- Store your ChatBotKit Partner API secret securely in environment variables

## Parameters

### options

#### autoCreateUser?

`boolean` = `false`

#### autoDeleteUser?

`boolean` = `false`

#### autoUpdateUser?

`boolean` = `true`

#### secret

`string`

#### store

[`Store`](../classes/Store.md)

## Returns

`Adapter`

## Example

```ts
import NextAuth from 'next-auth'
import { ChatBotKitPartnerAdapter, MemoryStore } from '@chatbotkit/nextauth'

export default NextAuth({
  adapter: ChatBotKitPartnerAdapter({
    secret: process.env.CHATBOTKIT_API_SECRET,
    store: new MemoryStore(), // Use Redis or another store in production
    autoCreateUser: false,
    autoUpdateUser: true,
    autoDeleteUser: false,
  }),
  // ... other NextAuth configuration
})
```
