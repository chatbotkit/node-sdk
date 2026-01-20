[**@chatbotkit/nextauth**](../../../README.md)

***

[@chatbotkit/nextauth](../../../modules.md) / [contact/adapter](../README.md) / ChatBotKitContactAdapter

# Function: ChatBotKitContactAdapter()

> **ChatBotKitContactAdapter**(`options`): `Adapter`

Defined in: [contact/adapter.js:177](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L177)

A NextAuth.js adapter that integrates with the ChatBotKit Contact API for
user management within a single account.

This adapter enables you to authenticate users as contacts within a single
ChatBotKit account using NextAuth.js. Unlike the Partner adapter which
creates separate sub-accounts for each user, this adapter manages users as
contacts within your main account, making it ideal for scenarios where you
want all users to interact within the same ChatBotKit environment.

## Overview

The ChatBotKitContactAdapter bridges NextAuth.js authentication with
ChatBotKit's Contact API. When users authenticate through your application,
this adapter automatically manages them as contacts within your account,
creating, updating, or removing contacts based on your configuration.

## Key Differences from Partner Adapter

- **Single Account**: All contacts exist within your main ChatBotKit account
- **Fingerprint-Based Identity**: Contacts are identified by fingerprints instead of separate account IDs
- **Shared Resources**: Contacts can share bots, datasets, and other resources
- **Contact-Specific Data**: Each contact can have their own conversation history and preferences

## Use Cases

This adapter is ideal for:
- Chat applications where users interact with shared AI assistants
- Customer support systems where each customer is a contact
- Multi-tenant applications within a single ChatBotKit account
- Applications where you need to track individual user conversations

## Storage Requirements

This adapter requires a store implementation for persisting verification
tokens and session data. The store interface is compatible with Vercel KV and
Redis, but you can implement your own storage backend by extending the
ContactStore class.

**Important**: Do not use ContactMemoryStore in production environments as it
doesn't persist data across server restarts or multiple instances.

## User Lifecycle Control

- `autoCreateContact`: When true, new contacts are created automatically on first sign-in.
  Recommended for self-service applications.
- `autoUpdateContact`: When true, contact information is synchronized on each sign-in.
  Recommended to keep user data in sync.
- `autoDeleteContact`: When true, contacts are deleted when users are removed from NextAuth.
  Use with caution in production.

## Production Recommendations

For production environments:
- Use a persistent store (Redis, Vercel KV, or database-backed implementation)
- Set `autoCreateContact: false` and manually approve contact creation
- Enable `autoUpdateContact: true` to keep contact data synchronized
- Set `autoDeleteContact: false` to prevent accidental data loss
- Store your ChatBotKit API secret securely in environment variables

## Parameters

### options

#### autoCreateContact?

`boolean` = `false`

#### autoDeleteContact?

`boolean` = `false`

#### autoUpdateContact?

`boolean` = `true`

#### secret

`string`

#### store

[`ContactStore`](../classes/ContactStore.md)

## Returns

`Adapter`

## Example

```ts
import NextAuth from 'next-auth'
import { ChatBotKitContactAdapter, ContactMemoryStore } from '@chatbotkit/nextauth/contact'

export default NextAuth({
  adapter: ChatBotKitContactAdapter({
    secret: process.env.CHATBOTKIT_API_SECRET,
    store: new ContactMemoryStore(), // Use Redis or another store in production
    autoCreateContact: true,
    autoUpdateContact: true,
    autoDeleteContact: false,
  }),
  // ... other NextAuth configuration
})
```
