[@chatbotkit/nextauth](../README.md) / [Modules](../modules.md) / adapter

# Module: adapter

## Table of contents

### Classes

- [MemoryStore](../classes/adapter.MemoryStore.md)
- [Store](../classes/adapter.Store.md)

### Functions

- [ChatBotKitPartnerAdapter](adapter.md#chatbotkitpartneradapter)

## Functions

### ChatBotKitPartnerAdapter

▸ **ChatBotKitPartnerAdapter**(`options`): `Adapter`

An adapter for NextAuth.js that works with ChatBotKit Partner API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.autoCreateUser?` | `boolean` |
| `options.autoDeleteUser?` | `boolean` |
| `options.autoUpdateUser?` | `boolean` |
| `options.secret` | `string` |
| `options.store` | [`Store`](../classes/adapter.Store.md) |

#### Returns

`Adapter`

#### Defined in

[adapter.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L102)
