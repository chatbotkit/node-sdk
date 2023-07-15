[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [Message](hooks_useConversationManager.md#message)
- [onErrorFn](hooks_useConversationManager.md#onerrorfn)
- [onReceiveFn](hooks_useConversationManager.md#onreceivefn)
- [onSendFn](hooks_useConversationManager.md#onsendfn)

### Functions

- [default](hooks_useConversationManager.md#default)

## Type Aliases

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `id` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[hooks/useConversationManager.js:13](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/react/src/hooks/useConversationManager.js#L13)

___

### onErrorFn

Ƭ **onErrorFn**<\>: (`error`: `any`) => `any`

#### Type declaration

▸ (`error`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

##### Returns

`any`

#### Defined in

[hooks/useConversationManager.js:15](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/react/src/hooks/useConversationManager.js#L15)

___

### onReceiveFn

Ƭ **onReceiveFn**<\>: (`conversationId`: `string`, `messages`: [`Message`](hooks_useConversationManager.md#message)[], `data`: `Record`<`string`, `any`\>) => `any`

#### Type declaration

▸ (`conversationId`, `messages`, `data`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `data` | `Record`<`string`, `any`\> |

##### Returns

`any`

#### Defined in

[hooks/useConversationManager.js:17](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/react/src/hooks/useConversationManager.js#L17)

___

### onSendFn

Ƭ **onSendFn**<\>: (`conversationId`: `string`, `messages`: [`Message`](hooks_useConversationManager.md#message)[], `data`: `Record`<`string`, `any`\>) => `any`

#### Type declaration

▸ (`conversationId`, `messages`, `data`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `data` | `Record`<`string`, `any`\> |

##### Returns

`any`

#### Defined in

[hooks/useConversationManager.js:16](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/react/src/hooks/useConversationManager.js#L16)

## Functions

### default

▸ **default**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.conversationId?` | `string` |
| `options.messages?` | [`Message`](hooks_useConversationManager.md#message)[] |
| `options.onError?` | ``null`` \| [`onErrorFn`](hooks_useConversationManager.md#onerrorfn) |
| `options.onReceive?` | ``null`` \| [`onReceiveFn`](hooks_useConversationManager.md#onreceivefn) |
| `options.onSend?` | ``null`` \| [`onSendFn`](hooks_useConversationManager.md#onsendfn) |
| `options.parse?` | `boolean` |
| `options.stream?` | `boolean` |
| `options.token?` | `string` |
| `options.verbose?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `continueConversation` | (`options?`: { `token?`: `string`  }) => `Promise`<`void`\> |
| `conversationId` | `string` |
| `flushUserMessage` | () => `Promise`<`void`\> |
| `interact` | (`options?`: { `conversationId?`: `string` ; `messages?`: [`Message`](hooks_useConversationManager.md#message)[] ; `token?`: `string`  }) => `void` |
| `loading` | `boolean` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `reset` | () => `void` |
| `setConversationId` | `Dispatch`<`SetStateAction`<`string`\>\> |
| `setMessages` | `Dispatch`<`SetStateAction`<[`Message`](hooks_useConversationManager.md#message)[]\>\> |
| `setText` | `Dispatch`<`SetStateAction`<`string`\>\> |
| `setToken` | `Dispatch`<`SetStateAction`<`string`\>\> |
| `text` | `string` |
| `thinking` | `boolean` |
| `token` | `string` |

#### Defined in

[hooks/useConversationManager.js:32](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/react/src/hooks/useConversationManager.js#L32)
