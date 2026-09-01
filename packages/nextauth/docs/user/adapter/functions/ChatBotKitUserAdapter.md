[**@chatbotkit/nextauth**](../../../README.md)

***

[@chatbotkit/nextauth](../../../modules.md) / [user/adapter](../README.md) / ChatBotKitUserAdapter

# Function: ChatBotKitUserAdapter()

> **ChatBotKitUserAdapter**(`options`): `Adapter`

Defined in: user/adapter.js:166

A NextAuth.js adapter that integrates with the ChatBotKit User API for
user management.

This adapter maps application users to isolated ChatBotKit Users through
NextAuth.js. It manages those identities through the ChatBotKit User API,
allowing each application user to receive an isolated ChatBotKit
environment.

## Overview

The ChatBotKitUserAdapter bridges NextAuth.js authentication with
ChatBotKit's User API management system. When application users authenticate,
this adapter automatically manages their ChatBotKit Users, creating,
updating, or removing Users based on your
configuration.

## Key Features

- **User Management**: Automatically manages one ChatBotKit User for each application user
- **Flexible User Lifecycle**: Control whether users are auto-created, updated, or deleted
- **Secure Token Storage**: Uses a configurable store for managing verification tokens
- **User API Integration**: Seamlessly works with ChatBotKit User API credentials

## Storage Requirements

This adapter requires a store implementation for persisting verification
tokens and session data. The store interface is compatible with Vercel KV and
Redis, but you can implement your own storage backend by extending the Store
class.

**Important**: Do not use MemoryStore in production environments as it
doesn't persist data across server restarts or multiple instances.

## User Lifecycle Control

- `autoCreateUser`: When true, new ChatBotKit Users are created automatically on
  first sign-in. Recommended for self-service applications.
- `autoUpdateUser`: When true, user information is synchronized with ChatBotKit on each
  sign-in. Recommended to keep user data in sync.
- `autoDeleteUser`: When true, ChatBotKit Users are deleted when application users are removed
  from NextAuth. Use with caution in production.

## Production Recommendations

For production environments:
- Use a persistent store (Redis, Vercel KV, or database-backed implementation)
- Set `autoCreateUser: false` and manually approve user creation
- Enable `autoUpdateUser: true` to keep user data synchronized
- Set `autoDeleteUser: false` to prevent accidental data loss
- Store your parent-user API secret securely in environment variables

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
import { ChatBotKitUserAdapter, MemoryStore } from '@chatbotkit/nextauth/user'

export default NextAuth({
  adapter: ChatBotKitUserAdapter({
    secret: process.env.CHATBOTKIT_API_SECRET,
    store: new MemoryStore(), // Use Redis or another store in production
    autoCreateUser: false,
    autoUpdateUser: true,
    autoDeleteUser: false,
  }),
  // ... other NextAuth configuration
})
```
