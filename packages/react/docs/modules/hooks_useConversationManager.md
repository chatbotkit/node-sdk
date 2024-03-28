[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [UseConversationManagerOptions](hooks_useConversationManager.md#useconversationmanageroptions)
- [UseConversationManagerRemoteOptions](hooks_useConversationManager.md#useconversationmanagerremoteoptions)
- [UseConversationManagerResult](hooks_useConversationManager.md#useconversationmanagerresult)

### Functions

- [useConversationManager](hooks_useConversationManager.md#useconversationmanager)

## Type Aliases

### UseConversationManagerOptions

Ƭ **UseConversationManagerOptions**\<\>: [`UseConversationManagerRemoteOptions`](hooks_useConversationManager.md#useconversationmanagerremoteoptions) & {}

#### Defined in

[hooks/useConversationManager.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L14)

___

### UseConversationManagerRemoteOptions

Ƭ **UseConversationManagerRemoteOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `client?` | `ConversationClient` |
| `conversationId?` | `string` |
| `datasetId?` | `string` |
| `endpoint?` | [`EndpointURL`](hooks_useConversationManagerRemote.md#endpointurl) \| [`EndpointFunction`](hooks_useConversationManagerRemote.md#endpointfunction) |
| `model?` | `Model` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |
| `token?` | `string` |

#### Defined in

[hooks/useConversationManagerRemote.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L32)

___

### UseConversationManagerResult

Ƭ **UseConversationManagerResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `any` |
| `message` | `Message` \| ``null`` |
| `messages` | `Message`[] |
| `request` | (`name`: `string`, ...`args`: `any`) => `void` |
| `setError` | (`error`: `any`) => `void` |
| `setText` | (`text`: `string`) => `void` |
| `submit` | () => `void` |
| `text` | `string` |
| `thinking` | `boolean` |
| `trigger` | (`name`: `string`) => `void` |
| `typing` | `boolean` |

#### Defined in

[hooks/useConversationManager.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L28)

## Functions

### useConversationManager

▸ **useConversationManager**(`options`): [`UseConversationManagerResult`](hooks_useConversationManager.md#useconversationmanagerresult)

The useConversationManager hook is a React hook that manages the conversation
state including the messages, the input text and all calls to the ChatBotKit
API endpoint. It automatically handles the conversation state and other
details like the token and conversation ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UseConversationManagerRemoteOptions`](hooks_useConversationManager.md#useconversationmanagerremoteoptions) |

#### Returns

[`UseConversationManagerResult`](hooks_useConversationManager.md#useconversationmanagerresult)

#### Defined in

[hooks/useConversationManager.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L40)
