[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [Message](hooks_useConversationManager.md#message)

### Functions

- [useConversationManager](hooks_useConversationManager.md#useconversationmanager)

## Type Aliases

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"bot"`` \| ``"user"`` |

#### Defined in

[hooks/useConversationManager.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L9)

## Functions

### useConversationManager

▸ **useConversationManager**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.backstory?` | `string` |
| `options.client?` | `ConversationClient` |
| `options.conversationId?` | `string` |
| `options.datasetId?` | `string` |
| `options.endpoint?` | `string` |
| `options.model?` | `string` |
| `options.skillsetId?` | `string` |
| `options.token?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `backstory` | `string` |
| `conversationId` | `string` |
| `datasetId` | `string` |
| `error` | `any` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `model` | `string` |
| `setBackstory` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setConversationId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setDatasetId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setError` | `Dispatch`\<`any`\> |
| `setMessages` | `Dispatch`\<`SetStateAction`\<[`Message`](hooks_useConversationManager.md#message)[]\>\> |
| `setModel` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setSkillsetId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setText` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setThinking` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> |
| `setToken` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setWriting` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> |
| `skillsetId` | `string` |
| `submit` | () => `Promise`\<`void`\> |
| `text` | `string` |
| `thinking` | `boolean` |
| `token` | `string` |
| `writing` | `boolean` |

#### Defined in

[hooks/useConversationManager.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L25)
